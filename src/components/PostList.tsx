import React from "react";
import { Post } from "../types";
import { PostCard } from "./PostCard";

interface PostListProps {
  posts: Post[];
  loading: boolean;
  onUpvote: (id: number) => Promise<void>;
}

export function PostList({ posts, loading, onUpvote }: PostListProps) {
  if (loading) {
    return (
      <div className="text-center py-8 text-gray-600">Loading posts...</div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        No posts yet. Be the first to post!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onUpvote={onUpvote} />
      ))}
    </div>
  );
}
