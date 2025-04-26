"use client"

import { useState } from "react"
import { Bell, ChevronDown, Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="flex items-center justify-between w-full px-10 py-4 bg-white  border-gray-200">
      <div className="relative ">
      
      </div>
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-sm bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
            2
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 overflow-hidden rounded-full">
            <Image
              src="/icon.png"
              alt="Profile picture"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Kalyani Kumar</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
