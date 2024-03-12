'use client'
import React from "react";
import { useRouter } from 'next/navigation'
function Feed() {
    const router = useRouter();
  return (
    <div className="flex-col flex w-full">
      <div className="flex flex-row mt-4 bg-white p-[22px] shadow rounded-lg">
        <div
          className="h-40 w-[168px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: "url(https://tailwindcss.com/img/card-left.jpg)",
          }}
          title="Woman holding a mug"
        ></div>
        <div className="px-4 w-full flex flex-col justify-between leading-normal">
          <div className="mb-8">
            {/* <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Hover Me
            </button> */}
            <div className="flex justify-between">
              <div className="text-black font-semibold text-[24px] mb-2">
                Happy Birthday
              </div>
              <div>            <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                type="button"
                onClick={() => router.push('/dashboard')}
              >
                View Board
              </button>
              <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
  </svg>
</button>


<div id="dropdownDotsHorizontal" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
              </div>



            </div>
            <p className="text-[#3a4561] text-sm font-normal">
              For Abhinash Sharma
            </p>
            <p>
              <span className="font-light text-sm text-[rgb(137, 144, 151) mr-4]">
                Created
              </span>
            </p>
            <p>
              <span className="font-light text-sm text-[rgb(137, 144, 151) mr-4">
                Creator
              </span>
            </p>
          </div>
          {/* <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-black leading-none">Jonathan Reinink</p>
              <p className="text-grey-dark">Aug 18</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex">Footer</div>
    </div>
  );
}

export default Feed;
