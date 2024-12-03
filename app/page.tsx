
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  SidebarProvider,
} from "./_components/ui/sidebar";

import Page from "./dashboard/page";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }


  return (
    <div className="h-full flex items-center justify-center">
      <SidebarProvider>
        <Page />
      </SidebarProvider>
    </div>
  );
};

export default Home;
