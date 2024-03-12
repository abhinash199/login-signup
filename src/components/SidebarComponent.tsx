
"use client";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example" className='p-0 ' style={{marginTop:"-19px",paddingBottom:"0px",height:"inherit"}}>
      <Sidebar.Items className='px-4  border-r-2' style={{background:"#fff",height:"inherit",paddingBottom:"0px"}}>
        <Sidebar.ItemGroup className='m-0 border-none '>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            All
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Given
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Received
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
           Archived
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Favorites
          </Sidebar.Item>
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default SidebarComponent
