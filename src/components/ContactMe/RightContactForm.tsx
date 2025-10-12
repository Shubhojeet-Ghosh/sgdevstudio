"use client";

import { useState } from "react";
import CustomInputPrimaryCyan from "@/components/inputs/CustomInputPrimaryCyan";
import CustomTextareaPrimaryCyan from "@/components/inputs/CustomTextareaPrimaryCyan";
import { Send } from "lucide-react";
import { registerContact } from "@/services/connectService";
import { toast } from "sonner";

export default function RightContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Form Data:", form);
      const res = await registerContact(form);
      console.log("Response:", res);
      toast.success("Message sent successfully...");
      // integrate backend here later
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // 👇 Block hotkey (like 'D') propagation when typing
  function stopHotkeyPropagation(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.stopPropagation();
  }

  return (
    <div className="md:w-1/2 flex justify-start">
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Name + Email side by side */}
        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
          {/* Name */}
          <div className="w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-[12px] font-[700] text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>

            <div className="mt-2">
              <CustomInputPrimaryCyan
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onKeyDown={stopHotkeyPropagation}
                placeholder="Enter your name..."
                autoComplete="off"
              />
            </div>
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-[12px] font-[700] text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>

            <div className="mt-2">
              <CustomInputPrimaryCyan
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onKeyDown={stopHotkeyPropagation}
                placeholder="Enter your email..."
                required
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-[12px] font-[700] text-gray-700 dark:text-gray-300"
          >
            Message
          </label>

          <div className="mt-2">
            <CustomTextareaPrimaryCyan
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onKeyDown={stopHotkeyPropagation}
              placeholder="Write your message..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-[16px] py-[12px] rounded-[12px] bg-tealbutton hover:bg-primarycyan text-[14px] font-[500] text-white flex items-center justify-center gap-2 transition-all duration-300 "
        >
          <Send className="w-4 h-4" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
