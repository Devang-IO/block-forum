import React from "react";
import { Cake, Users, TrendingUp, Info } from "lucide-react";

interface SidebarProps {
  memberCount: number;
  onlineCount: number;
  onCreatePost: () => void;
}

export function Sidebar({
  memberCount,
  onlineCount,
  onCreatePost,
}: SidebarProps) {
  return (
    <aside className="w-80">
      <div className="bg-white rounded-md shadow-sm border border-gray-300 overflow-hidden">
        <div className="bg-orange-500 p-4 text-white">
          <h2 className="font-semibold text-lg">About Community</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Cake className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Created Nov 7, 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-500" />
            <span className="text-sm">
              {memberCount.toLocaleString()} Members
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-gray-500" />
            <span className="text-sm">{onlineCount} Online</span>
          </div>
          <p className="text-sm text-gray-600">
            Welcome to BlockForum, a decentralized community for blockchain
            enthusiasts!
          </p>
          <button
            onClick={onCreatePost}
            className="w-full bg-orange-500 text-white rounded-full py-2 font-semibold hover:bg-orange-600 transition-colors"
          >
            Create Post
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-sm border border-gray-300 mt-4 p-4">
        <h3 className="font-semibold mb-2 flex items-center">
          <Info className="h-5 w-5 mr-2 text-orange-500" />
          BlockForum Rules
        </h3>
        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
          <li>Be respectful and civil</li>
          <li>No spam or self-promotion</li>
          <li>Use appropriate tags for your posts</li>
          <li>Follow Reddit's content policy</li>
        </ol>
      </div>
    </aside>
  );
}
