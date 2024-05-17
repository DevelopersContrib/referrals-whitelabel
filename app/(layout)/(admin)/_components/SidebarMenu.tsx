"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { imageLoader } from "@/helpers/image-helper";
import {
  Bell,
  Cog,
  Gift,
  Home,
  Layers,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Star,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarMenu = ({ logo }: { logo: string }) => {
  return (
    <>
      <div className="hidden border-r bg-gray-100/50 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
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
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 sidebar">
              <Link href="/dashboard" className="sidebar-link active">
                <LineChart className="h-4 w-4" />
                Dashboard
              </Link>
              <Link href="/deals" className="sidebar-link">
                <Star className="h-4 w-4" />
                Deals
              </Link>
              <Link href="/campaigns" className="sidebar-link">
                <Layers className="h-4 w-4" />
                Campaigns
              </Link>
              <Link href="/rewards" className="sidebar-link">
                <Gift className="h-4 w-4" />
                Rewards
              </Link>
              <Link href="/settings" className="sidebar-link">
                <Cog className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
