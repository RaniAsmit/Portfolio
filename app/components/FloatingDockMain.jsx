"use client";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {  Code2 } from "lucide-react";
import {useThemeToggle} from "./ui/toogle-theme"
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconMail,
  IconBrandLinkedin,
  IconSun,
  IconMoonStars,
  IconBrandMedium
} from "@tabler/icons-react";

export function FloatingDockMain() {

  const { toggleTheme, theme, mounted } = useThemeToggle();

  if (!mounted) return null

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    // {
    //   title: "Blog",
    //   icon: (
    //     <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://medium.com/@spectorcodes",
    // },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
        href: "https://x.com/RaniAsmit",
        target: "_blank",

    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/RaniAsmit",
      target: "_blank",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/raniasmit/",
      target: "_blank",

    },
    {
      title: "email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:raniasmit200204@gmail.com",
      target: "_blank",

    },
    {
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ?(
        <IconMoonStars key={`theme-icon-${theme}`} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ): (
        <IconSun key={`theme-icon-${theme}`} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: toggleTheme,
    },
  ];
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center w-full">
      <FloatingDock
        desktopClassName="bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-neutral-800"
        mobileClassName="bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-neutral-800 w-[83%] mx-auto"
        items={links} 
      />
    </div>
  );
}
