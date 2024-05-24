"use client";
import { imageLoader } from "@/helpers/image-helper";
import { Cog, Gift, Layers, LineChart, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SidebarMenu = ({ logo }: { logo: string }) => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const menuItems = [
    {
      href: "/dashboard",
      icon: <LineChart className="h-4 w-4" />,
      label: "Dashboard"
    },
    { href: "/deals", icon: <Star className="h-4 w-4" />, label: "Deals" },
    {
      href: "/campaigns",
      icon: <Layers className="h-4 w-4" />,
      label: "Campaigns"
    },
    { href: "/rewards", icon: <Gift className="h-4 w-4" />, label: "Rewards" },
    { href: "/settings", icon: <Cog className="h-4 w-4" />, label: "Settings" }
  ];

  return (
    <div className="hidden border-r bg-gray-100/50 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <span>
              <Image
                loader={imageLoader}
                src={logo}
                alt="referral"
                width={0}
                height={0}
                className="w-full max-w-full h-[30px] object-contain"
                loading="lazy"
              />
            </span>
          </a>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 sidebar">
            {menuItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className={`sidebar-link ${currentPath === item.href ? "active" : ""}`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
