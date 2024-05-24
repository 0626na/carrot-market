"use client";

import {
  NewspaperIcon as OutLineNewspaperIcon,
  HomeIcon as OutLineHomeIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutLineChatIcon,
  VideoCameraIcon as OutLineVideoCameraIcon,
  UserIcon as OutLineUserIcon,
} from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TabBar = () => {
  const path = usePathname();
  return (
    <div className="fixed bottom-0 grid grid-cols-5 w-full max-w-screen-md mx-auto border-neutral-600 border-t px-5 py-3 *:text-white bg-neutral-800">
      {/* 홈 */}
      <Link href="/products" className="flex flex-col items-center gap-px">
        {path === "/products" ? (
          <HomeIcon className="w-7 h-7" />
        ) : (
          <OutLineHomeIcon className="w-7 h-7" />
        )}
        <span>홈</span>
      </Link>
      {/* 동네생활 */}
      <Link href="/life" className="flex flex-col items-center gap-px">
        {path === "/life" ? (
          <NewspaperIcon className="w-7 h-7" />
        ) : (
          <OutLineNewspaperIcon className="w-7 h-7" />
        )}
        <span>동네생활</span>
      </Link>
      {/* 채팅 */}
      <Link href="/chat" className="flex flex-col items-center gap-px">
        {path === "/chat" ? (
          <ChatIcon className="w-7 h-7" />
        ) : (
          <OutLineChatIcon className="w-7 h-7" />
        )}
        <span>채팅</span>
      </Link>
      {/* 라이브쇼핑 */}
      <Link href="/live" className="flex flex-col items-center gap-px">
        {path === "/live" ? (
          <VideoCameraIcon className="w-7 h-7" />
        ) : (
          <OutLineVideoCameraIcon className="w-7 h-7" />
        )}
        <span>쇼핑</span>
      </Link>
      {/* 프로필 */}
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {path === "/profile" ? (
          <UserIcon className="w-7 h-7" />
        ) : (
          <OutLineUserIcon className="w-7 h-7" />
        )}
        <span>나의 당근</span>
      </Link>
    </div>
  );
};

export default TabBar;
