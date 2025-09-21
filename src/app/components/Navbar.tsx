"use client";
import Link from "next/link";

export default function Navbar() {
  return (
<>
  <nav className="bg-blue-50 border-b border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/50 transition-colors duration-300">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse group">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 transition-transform group-hover:scale-105" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-800 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Flowbite</span>
      </a>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <a href="tel:5541251234" className="text-sm text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition-colors hover:underline">
          (555) 412-1234
        </a>
        <a href="#" className="text-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 px-3 py-1 rounded-md transition-colors">
          Login
        </a>
      </div>
    </div>
  </nav>

  <nav className="bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-sm transition-colors duration-300">
    <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-center">
      <ul className="flex flex-row font-medium space-x-8 rtl:space-x-reverse text-sm">
        <li>
          <a href="/" className="text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100 px-2 py-1 rounded hover:bg-blue-200/30 dark:hover:bg-blue-800/30 transition-colors" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="/blog/1" className="text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100 px-2 py-1 rounded hover:bg-blue-200/30 dark:hover:bg-blue-800/30 transition-colors">
            Blog
          </a>
        </li>
        <li>
          <a href="/about" className="text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100 px-2 py-1 rounded hover:bg-blue-200/30 dark:hover:bg-blue-800/30 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-700 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100 px-2 py-1 rounded hover:bg-blue-200/30 dark:hover:bg-blue-800/30 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</>

  );
}
