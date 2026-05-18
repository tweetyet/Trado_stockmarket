"use client";

import { useRouter } from "next/navigation";

import NavItems from "./NavItems";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const user = {
  name: "Yamin Theint Theint Wai",
  email: "ytheint80@gmail.com",
  image: "https://github.com/shadcn.png",
};

export default function UserDropDown() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/sign-in");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Search",
      path: "/search",
    },
    {
      label: "Watchlist",
      path: "/watchlist",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="
            h-auto
            px-2
            py-1.5
            hover:bg-gray-800
            rounded-xl
            flex items-center gap-3
          "
        >
          <Avatar className="size-9 border border-gray-700">
            <AvatarImage
              src={user.image}
              alt={user.name}
            />

            <AvatarFallback className="bg-yellow-500 text-black font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start leading-none">
            <span className="text-sm font-medium text-white">
              {user.name}
            </span>

            <span className="text-xs text-gray-400">
              {user.email}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-64
          bg-gray-900
          border border-gray-800
          text-gray-300
        "
      >
        {/* User Info */}
        <DropdownMenuLabel className="py-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold text-white">
              {user.name}
            </p>

            <p className="text-xs text-gray-400 truncate">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-800" />

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.path}
              onClick={() => router.push(item.path)}
              className="
                cursor-pointer
                focus:bg-gray-800
                focus:text-white
              "
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden px-2 py-1">
          <NavItems />
        </div>

        <DropdownMenuSeparator className="bg-gray-800" />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="
            cursor-pointer
            text-red-500
            focus:bg-red-500/10
            focus:text-red-400
          "
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}