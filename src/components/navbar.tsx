import React from 'react'

export function Navbar() {
  return (
    <nav className="rounded px-4 py-4 bg-pink-300 sm:px-4">
    <div className="container mx-auto flex  items-center justify-between">
      <a href="#" className="flex items-center">
        <span className="self-center whitespace-nowrap text-3xl font-semibold text-blue-900">Merch-E</span>
      </a>
       <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  
      <div className="hidden w-full md:block md:w-auto "  id="navbar-default">
        <ul className="flex flex-col items-center rounded-lg  md:flex-row md:space-x-10 bg-pink-300">
          <li>
            <a href="#" className="block pl-12 dark:text-blue-100 md:hover:bg-transparent md:dark:hover:text-blue-900" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block dark:text-blue-100 md:hover:bg-transparent md:dark:hover:text-blue-900">About</a>
          </li>
          <li>
            <a href="#" className="block dark:text-blue-100 md:hover:bg-transparent md:dark:hover:text-blue-900">Services</a>
          </li>
          <li>
            <a href="#" className="block dark:text-blue-100 md:hover:bg-transparent md:dark:hover:text-blue-900">Pricing</a>
          </li>
          <li>
            <a href="#" className="block pr-96 dark:text-blue-100 md:hover:bg-transparent md:dark:hover:text-blue-900">Contact</a>
          </li>
          <div className="flex items-center">
            <ul className="flex flex-col rounded-lg border py-2 pl-4 dark:border-gray-200 md:flex-row md:space-x-4 md:dark:bg-gray-100">
              <svg fill="none" viewBox="0 0 30 20" stroke-width="1.5" stroke="currentColor" className="block h-6 w-6 dark:text-gray-400 md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:text-gray-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <a href="#" className="block pr-64 dark:text-gray-400 md:hover:bg-transparent md:dark:hover:text-gray-900">Search</a>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}

