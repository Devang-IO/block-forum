import React, { useState, useEffect } from "react";
import { Send, Image, Link } from "lucide-react";

interface CreatePostProps {
  onSubmit: (title: string, content: string) => Promise<void>;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export function CreatePost({
  onSubmit,
  isExpanded,
  setIsExpanded,
}: CreatePostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isExpanded) {
      document.getElementById("create-post-title")?.focus();
    }
  }, [isExpanded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(title, content);
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-300 mb-4">
      <form onSubmit={handleSubmit} className="p-2">
        {!isExpanded ? (
          <div
            onClick={() => setIsExpanded(true)}
            className="flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-md px-4 py-2 cursor-text"
          >
            <input
              type="text"
              placeholder="Create Post"
              className="bg-transparent w-full outline-none cursor-text"
              readOnly
            />
            <div className="flex space-x-2 text-gray-400">
              <Image className="h-5 w-5" />
              <Link className="h-5 w-5" />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              id="create-post-title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <textarea
              placeholder="What are your thoughts?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="px-4 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm font-semibold"
              >
                <Send className="h-4 w-4" />
                <span>Post</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
