import React from "react";

function Page() {
  return (
    <div className="flex  flex-col md:flex-row w-full h-[100vh]">
      <div className="md:w-[50%] bg-[#04BFFA] h-full justify-center items-center flex">
        <div className="flex flex-col justify-center items-center">
        <span className="text-white text-lg mb-4">Create a KudoBoard in less than a minute.</span>
        <div>
            <img src="https://www.kudoboard.com/images/celebration-people-2.svg"/>
        </div>
        </div>
      </div>
      <div className="md:w-[50%]  justify-center items-center flex ">
        <div className="flex flex-col md:w-[50%] m-4 md:m-0 items-center">
          <h2 className="font-bold my-3">Create Your board</h2>
          <span className="font-normal mb-2 text-xs text-[#899097]">Choose an occasion, enter your recipient and add a title.</span>
           
          
<form className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Select an occasion</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option>Select</option>
    <option value="US">Birthday & Celebrations</option>
    <option value="CA">Congrats & Praise</option>
    <option value="FR">Farewell</option>
    <option value="DE">Work Anniversary</option>
  </select>



    <div>
        <div>
            <label htmlFor="first_name" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">Who is the recipient?</label>
            <div className="flex">
            <input type="text" id="first_name" className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required />
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
        </div>
        </div>
       
        <div>
            <label htmlFor="company" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">What should the title be?</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
       </div>
   
</div>
<button type="submit" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

</form>

        </div>
      </div>
    </div>
  );
}

export default Page;
