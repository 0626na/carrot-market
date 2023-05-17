import Layout from "@/components/layout";
import { NextPage } from "next";

const Streams: NextPage = () => {
  return (
    <Layout title="라이브 판매" hasTabBar>
      <div className="py-10 px-4 space-y-10 divide-y-2">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="pt-8">
            <div className="w-full aspect-video bg-slate-400 rounded-md" />
            <h3 className="font-semibold text-lg mt-2">
              강아지 간식 판매합니다.
            </h3>
          </div>
        ))}

        <button className="fixed bg-orange-400 bottom-12 right-12 rounded-full p-5 text-white shadow-sm hover:bg-orange-300 cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Streams;
