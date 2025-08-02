// components/CustomInput.jsx
"use client";
import { forwardRef } from "react";

const CustomInput = forwardRef(
  (
    {
      id,
      type = "text",
      placeholder = "",
      value,
      onChange,
      className = "",
      inputClassName = "",
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        border-gray-300 border-[1px] rounded-[10px] px-2 py-[6px]
        placeholder-gray-400 focus:outline-none focus:border-ecdarkblue
        transition duration-300 ease-in-out block w-full text-[12px]
        ${inputClassName} ${className}
      `}
      {...props}
    />
  )
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
