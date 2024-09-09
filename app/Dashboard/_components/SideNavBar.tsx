"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Clock, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideNavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting type",
      path: "/dashboard/meeting-type",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Meeting scheduled",
      path: "/dashboard/meeting-scheduled",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability",
      icon: Clock,
    },
    {
      id: 4,
      name: "Setting",
      path: "/dashboard/setting",
      icon: Settings,
    },
  ];

  const pathname = usePathname();

  return (
    <div className="p-5 py-14">
      <div className="flex justify-center">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
      </div>
      <div>
        <Button className="flex gap-2 w-full rounded-full mt-7">
          <Plus />
          Create
        </Button>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        {menu.map((item) => (
          <Link key={item.id} href={item.path}>
            <Button
              variant="ghost"
              className={`w-full flex gap-2 justify-start hover:bg-blue-400 ${
                pathname === item.path ? 'bg-blue-200' : ''
              }`}
            >
              <item.icon />
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};