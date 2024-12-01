import { Calendar, HomeIcon, Inbox, Search, Settings } from "lucide-react";

import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./_components/ui/sidebar";
import Image from "next/image";

const Home = async () => {
  // Menu items.
  const items = [
    {
      title: "Home",
      url: "#",
      icon: HomeIcon,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="h-full flex items-center justify-center">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroupLabel>
              <Image
                src="/logo.svg"
                width={173}
                height={39}
                alt="Finance AI"
                className="mb-8"
              />
            </SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="">
            <UserButton showName />
          </div>
          <SidebarFooter />
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};

export default Home;
