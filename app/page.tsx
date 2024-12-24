
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


import {
  SidebarProvider,
} from "./_components/ui/sidebar";

import Page from "./dashboard/page";
import Link from "next/link";

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
      <Link href={"/comandas"}> Produtos</Link>
    
    </div>
  ); 
};

export default Home;
