"use client";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useAppDispatch } from "@/store";
import { setCurrentView } from "@/store/reducers/elysiumChatNavigationSlice";
import Logo from "./LogoComponent";
import CustomInput from "@/components/inputs/CustomInput";
import { isValidEmail } from "@/utils/isValidEmail";
import nodeExpressAxios from "@/utils/node_express_apis";
import Cookies from "js-cookie";
import UserProfileCard from "./UserProfileCard";
import { getSocket } from "@/lib/socket";
import { toast } from "sonner";

export default function AddNewContact() {
  const socket = getSocket();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [foundUser, setFoundUser] = useState<any>(null);

  const emailInvalid = email.length > 0 && !isValidEmail(email);

  // Async function to handle valid email
  const handleValidEmail = async (validEmail: string) => {
    try {
      console.log("Valid email detected:", validEmail);
      setFoundUser(null);
      const token = Cookies.get("elysium_chat_session_token");
      const userPayload = {
        email: email,
      };

      const res = await nodeExpressAxios.post(
        "/v1/elysium-chat/fetch-user-by-email",
        userPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user_data = res.data;
      console.log(`User Data fetched for ${email} :`, user_data);
      if (user_data.success) {
        console.log("user_data.user", user_data.user);
        setUserNotFound(false);
        setFoundUser(user_data.user);
      } else {
        setUserNotFound(true);
      }
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    setUserNotFound(false);
    if (!isValidEmail(email)) {
      setIsFetching(false);
      return;
    }

    setIsFetching(true); // show "fetching" immediately

    const debounceTimer = setTimeout(() => {
      handleValidEmail(email);
    }, 2000); // 2s debounce

    return () => clearTimeout(debounceTimer);
  }, [email]);

  useEffect(() => {
    if (!socket || !email) return;

    socket.on("contact-request-sent", (data) => {
      console.log("[Socket:contact-request-sent] Contact request sent:", data);
      toast(data.message);
      handleValidEmail(email);
    });

    socket.on("contact-accepted", (data) => {
      console.log("[Socket:contact-accepted] Contact request sent:", data);
      toast.success("Contact request accepted by " + data.from);
    });

    return () => {
      socket.off("contact-request-sent");
      socket.off("contact-accepted");
    };
  }, [socket, email]);

  return (
    <div className="w-full flex flex-col items-start justify-between">
      <Logo />

      <div className="w-full py-[10px] mt-[10px]">
        {/* Header */}
        <div className="flex items-center justify-start gap-[10px]">
          <div
            className="flex items-center justify-center hover:text-eclightblue transition-all duration-300 cursor-pointer"
            onClick={() => dispatch(setCurrentView("new_conversation"))}
          >
            <ArrowLeft className="cursor-pointer" size={20} />
          </div>
          <p className="text-[14px] font-[600] text-ecdarkblue">
            New Conversation
          </p>
        </div>

        {/* Name Field */}
        <div className="flex items-start justify-start mt-[20px]">
          <div className="flex flex-col w-full">
            <p className="text-[14px] font-[500] ml-[2px] text-gray600 dark:text-brightgray">
              Name
            </p>
            <CustomInput
              id="name"
              autoComplete="off"
              type="text"
              placeholder="Contact Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-[2px] min-h-[40px]"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-start justify-start mt-[20px]">
          <div className="flex flex-col w-full">
            <p className="text-[14px] font-[500] ml-[2px] text-gray600 dark:text-brightgray">
              Email <span className="text-red-500">*</span>
            </p>
            <CustomInput
              id="email"
              autoComplete="off"
              type="email"
              placeholder="Contact Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-[2px] min-h-[40px] ${
                emailInvalid ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {/* Validation or fetching message */}
            {emailInvalid && (
              <span className="text-red-500 text-xs mt-[6px] ml-[2px]">
                This is not a valid email address...
              </span>
            )}
            {!emailInvalid && isFetching && (
              <span className="flex items-center gap-[6px] text-pastelprimarygreen text-xs mt-[6px] ml-[2px]">
                <span className="inline-block w-3 h-3 border border-pastelprimarygreen border-t-transparent rounded-full animate-spin"></span>
                <p>Fetching contact...</p>
              </span>
            )}
            {!emailInvalid && !isFetching && userNotFound && (
              <span className="flex text-ecdarkblue text-xs mt-[6px] ml-[2px]">
                <p>No user found with this email.</p>
                <span className="ml-[4px] cursor-pointer">
                  <p className="text-pastelprimarygreen">
                    Invite <span>{email}</span>
                  </p>
                </span>
              </span>
            )}
            {!emailInvalid && !isFetching && foundUser && (
              <UserProfileCard foundUser={foundUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
