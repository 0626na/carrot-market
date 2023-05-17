import Layout from "@/components/layout";
import type { NextPage } from "next";

const Chat: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="p-4 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <div className="flex py-3 space-x-4 items-center" key={index}>
            <div className="h-12 w-12 bg-slate-200 rounded-full" />
            <div>
              <p className="font-semibold">Steve Jebs</p>
              <p className="text-sm text-gray-400">안녕 닐스야, 산책갈래?</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chat;
