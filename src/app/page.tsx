"use client";
import Post from "@/components/cards/Post";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const posts = useAppSelector(state => state.postsSlice.posts);

  return (
    <div className="w-full columns-1 sm:columns-2 md:columns-3 space-y-4">
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  )
}
