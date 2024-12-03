// import {
//   Calendar,
//   ChevronRight,
//   HomeIcon,
//   Inbox,
//   Search,
//   Settings,
// } from "lucide-react";

// import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  // Sidebar,
  // SidebarContent,
  // SidebarFooter,
  // SidebarGroup,
  // SidebarGroupLabel,
  // SidebarHeader,
  // SidebarMenu,
  // SidebarMenuButton,
  // SidebarMenuItem,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
  SidebarProvider,
} from "./_components/ui/sidebar";
// import Image from "next/image";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import Page from "./dashboard/page";

// interface MenuItem {
//   title: string;
//   url: string;
//   icon?: React.ElementType;
//   items?: MenuItem[];
//   isActive?: boolean;
// }

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  // const data = {
  //   navMain: [
  //     {
  //       title: "Dashboard",
  //       isActive: true,
  //       icon: HomeIcon,
  //       items: [
  //         { title: "Overview", url: "/overview" },
  //         { title: "Stats", url: "/stats" },
  //       ],
  //     },
  //   ],
  // };

  // const items: MenuItem[] = [
  //   { title: "Home", url: "#", icon: HomeIcon },
  //   { title: "Inbox", url: "#", icon: Inbox },
  //   { title: "Calendar", url: "#", icon: Calendar },
  //   { title: "Search", url: "#", icon: Search },
  //   { title: "Settings", url: "#", icon: Settings },
  // ];

  return (
    <div className="h-full flex items-center justify-center">
      <SidebarProvider>
        <Page />
      </SidebarProvider>
    </div>
  );
};

export default Home;
