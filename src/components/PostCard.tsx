import React from "react";
import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquare,
  Share2,
  BookmarkPlus,
} from "lucide-react";
import { Post } from "../types";

interface PostCardProps {
  post: Post;
  onUpvote: (id: number) => Promise<void>;
}

export function PostCard({ post, onUpvote }: PostCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-300 hover:border-gray-400 transition-all">
      <div className="flex">
        {/* Vote sidebar */}
        <div className="w-10 bg-gray-50 rounded-l-md p-2 flex flex-col items-center space-y-2">
          <button
            onClick={() => onUpvote(post.id)}
            className="text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded p-1"
          >
            <ArrowBigUp className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold text-gray-900">
            {post.upvotes}
          </span>
          {/* <button className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded p-1">
            <ArrowBigDown className="h-5 w-5" />
          </button> */}
        </div>

        {/* Main content */}
        <div className="p-3 flex-1">
          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-2">
            <span>Posted by</span>
            <span className="hover:underline cursor-pointer">
              {post.author.slice(0, 6)}...{post.author.slice(-4)}
            </span>
            <span>•</span>
            <span>{post.timestamp}</span>
          </div>

          <h3 className="text-lg font-medium mb-2">{post.title}</h3>
          <p className="text-gray-900 mb-3">{post.content}</p>

          <div className="flex items-center space-x-4 text-gray-500">
            {/* <button className="flex items-center space-x-1 hover:bg-gray-100 rounded-md px-2 py-1">
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs font-medium">Comment</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded-md px-2 py-1">
              <Share2 className="h-4 w-4" />
              <span className="text-xs font-medium">Share</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-gray-100 rounded-md px-2 py-1">
              <BookmarkPlus className="h-4 w-4" />
              <span className="text-xs font-medium">Save</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
