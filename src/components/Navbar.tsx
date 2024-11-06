import React from "react";
import {
  MessageSquarePlus,
  Wallet,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

interface NavbarProps {
  account: string;
  onConnect: () => void;
}

export function Navbar({ account, onConnect }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageSquarePlus className="h-8 w-8 text-orange-500" />
          <h1 className="text-xl font-bold text-gray-900">BlockForum</h1>
        </div>

        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search BlockForum"
              className="w-full bg-gray-100 border border-transparent rounded-full pl-10 pr-4 py-2 hover:border-gray-300 focus:outline-none focus:border-orange-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button
            onClick={onConnect}
            className="flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors text-sm font-semibold"
          >
            <Wallet className="h-4 w-4" />
            <span>
              {account
                ? `${account.slice(0, 6)}...${account.slice(-4)}`
                : "Connect Wallet"}
            </span>
          </button>
          <button className="flex items-center text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
