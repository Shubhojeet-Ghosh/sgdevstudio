"use client";
import { useState } from "react";
import CustomInput from "@/components/inputs/CustomInput.jsx";
import { GoogleIcon } from "@/components/TechStacks/Icons.tsx";
import { toast } from "sonner";
import nodeExpressAxios from "@/utils/node_express_apis";
import Spinner from "@/components/ui/Spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function LoginBox() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email) {
      toast.error("Please enter your email");
      setIsLoading(false);
      return;
    }
    try {
      const loginPayload = {
        email: email.trim().toLowerCase(),
      };
      if (showPassword && password) {
        loginPayload.password = password;
      }
      const res = await nodeExpressAxios.post(
        "/v1/auth/magic-link",
        loginPayload
      );
      // console.log(res);
      const response_data = res.data;
      if (response_data.success) {
        if (response_data.user) {
          Cookies.set(
            "elysium_chat_session_token",
            response_data.sessionToken,
            {
              path: "/",
              expires: 30,
            }
          );
          localStorage.setItem(
            "first_name",
            response_data?.user?.first_name || ""
          );
          localStorage.setItem(
            "last_name",
            response_data?.user?.last_name || ""
          );
          toast.success("Logged in successfully!");
          router.push("/elysium-chat");
        } else {
          toast.success("Magic link sent to your email");
        }
      } else {
        toast.error(response_data.message);
      }
    } catch {
      toast.error("We are facing some issues, please try again later");
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    toast("Google login feature is coming soon...", {
      action: {
        label: "Ok",
      },
      position: "top-center",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-full w-full"
    >
      <div className="flex flex-col p-6 md:w-[400px] w-full">
        <p className="text-[20px] font-bold text-ecdarkblue text-center">
          Welcome Back!
        </p>
        <p className="text-[14px] text-gray600 text-center mb-2">
          Log into your account to get going...
        </p>
        <div className="flex flex-col mt-[25px]">
          <div className="flex flex-col">
            <p className="text-[14px] font-[500] ml-[2px] text-gray600">
              Email
            </p>
            <CustomInput
              id="email"
              autoComplete="off"
              type="email"
              placeholder="elysium@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-[2px] min-h-[40px]"
            />
          </div>
          {showPassword && (
            <div className="flex flex-col mt-3">
              <p className="text-[14px] font-[500] ml-[2px] text-gray600">
                Password
              </p>
              <CustomInput
                id="password"
                autoComplete="off"
                type={showPwd ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-[2px] min-h-[40px]"
              />
              <label className="flex items-center gap-2 mt-2 text-[13px] text-gray-600 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPwd}
                  onChange={() => setShowPwd((prev) => !prev)}
                  className="accent-ecdarkblue"
                />
                Show password
              </label>
            </div>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="min-h-[40px] w-full mt-[20px] py-2 rounded-[10px] bg-ecdarkblue text-white text-[12px] transition flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <Spinner className="border-white" />
            ) : (
              <span className="text-[12px]">
                {showPassword ? "Log in..." : "Send Link..."}
              </span>
            )}
          </button>
          <div className="flex items-center justify-end mt-[10px]">
            {!showPassword && (
              <button
                type="button"
                className="text-ecnavy hover:underline text-[13px] mt-1 mb-4"
                tabIndex={0}
                onClick={() => setShowPassword(true)}
              >
                Log in using password...
              </button>
            )}
            {showPassword && (
              <button
                type="button"
                className="text-ecnavy hover:underline text-[13px] mt-1 mb-4"
                tabIndex={0}
                onClick={() => setShowPassword(false)}
              >
                Log in using Magic Link...
              </button>
            )}
          </div>
          <div className="flex items-center w-full mt-[20px]">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>
          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="min-h-[40px] mt-[20px] w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-[10px] text-[12px] font-semibold text-gray-700 bg-white hover:bg-gray-50 transition mb-2"
          >
            {isLoading ? (
              <Spinner className="border-ecdarkblue" />
            ) : (
              <>
                <GoogleIcon />
                <span className="text-[12px] ">Continue with Google</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
