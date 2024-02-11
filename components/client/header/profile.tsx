import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/redux/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";

interface ProfilePops {
  userName: string;
}

export function Profile({ userName }: ProfilePops) {
  const dispatch = useAppDispatch();

  const [flag, setFlag] = useState<boolean>(true);
  const handleClick = () => {
    console.log("Click Me");
    setFlag(!flag);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="tchr-listitem-a">
          <img
            className="w-6 h-6 rounded-full"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Rounded avatar"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-2xl font-bold text-orange-500 hover:text-red-400">
            {userName}
          </DropdownMenuItem>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            dispatch(logout());
          }}
          style={{ cursor: "pointer" }}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
