"use client";
import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTheme } from "@/store/reducers/settingsSlice";
import KeyboardKey from "../Keyboard/KeyboardKey";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.settings.theme);

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  useEffect(() => {
    const handleDKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyD") {
        toggleTheme();
      }
    };
    window.addEventListener("keydown", handleDKeyDown);

    return () => {
      window.removeEventListener("keydown", handleDKeyDown);
    };
  }, [currentTheme]);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="cursor-pointer hover:bg-darkerblack hover:text-white dark:text-white text-black p-[6px] rounded-[4px] transition-all duration-300"
              onClick={toggleTheme}
            >
              {currentTheme === "light" ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div
              className="flex items-center
             justify-center gap-[5px]"
            >
              <div>toggle theme</div>
              <KeyboardKey>
                <div className="font-[500]">D</div>
              </KeyboardKey>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
