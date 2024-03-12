import Image from "next/image";
import SidebarComponent from "../components/SidebarComponent";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
export default function Home() {
  return (
    <main className="flex flex-col h-screen container-fluid mx-auto">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex" style={{background:"#fff"}} >
          <SidebarComponent />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-y-auto paragraph px-4 w-full">
           <Feed/>
          </div>
        </div>
      </div>
    </main>
  );
}
