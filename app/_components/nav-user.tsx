"use client";

import {} from "@/app/_components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/app/_components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export function NavUser({
  // isSidebarOpen,
  
}: {
  isSidebarOpen: boolean; // Estado que indica se a sidebar está aberta
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <UserButton
              // appearance={{
              //   elements: {
              //     userButtonBox: {
              //       flexDirection: "row-reverse",
              //     },
              //   },
              // }}
              // showName
            />
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
