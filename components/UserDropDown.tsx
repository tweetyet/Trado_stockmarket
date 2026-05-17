"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const UserDropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };
  const user = {
    name: "Yamin Theint Theint Wai",
    email: "ytheint80@gmail.com",
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-300 "
        >
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />

            <AvatarFallback className="bg-yellow-500 text-sm font-semibold text-black">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-700 text-gray-400">
        {/* User Info */}
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-medium text-white">{user.name}</span>

            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Menu Items */}
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push("/profile")}
            className="cursor-pointer"
          >
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push("/dashboard")}
            className="cursor-pointer"
          >
            Dashboard
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push("/settings")}
            className="cursor-pointer"
          >
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer text-red-500 focus:text-red-500"
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
