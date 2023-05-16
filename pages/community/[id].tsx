import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <span className="flex justify-center items-center bg-slate-200 w-20 rounded-xl m-4">
        동네질문
      </span>
      <div className="p-5">
        <div className="flex mt-4 border-b pb-4">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div className="ml-3">
            <span className="font-semibold block">Steve Jebs</span>
            <span className="block text-sm text-gray-400">View profile →</span>
          </div>
        </div>
        <div>
          <div className="py-4">
            <span className="text-orange-300 font-semibold">Q.</span> What is
            the best mandu restaurant?
          </div>
          <div className="flex space-x-3 border-b-4 pb-2">
            <span className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 1</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex space-x-3 py-3">
            <div className="w-12 h-12 rounded-full bg-slate-300 pt-4" />
            <div className="flex flex-col">
              <span>Steve Jebs</span>
              <span>2시간 전</span>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
          <div className="flex space-x-3 py-3">
            <div className="w-12 h-12 rounded-full bg-slate-300 pt-4" />
            <div className="flex flex-col">
              <span>Steve Jebs</span>
              <span>2시간 전</span>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
          <div className="flex space-x-3 py-3">
            <div className="w-12 h-12 rounded-full bg-slate-300 pt-4" />
            <div className="flex flex-col">
              <span>Steve Jebs</span>
              <span>2시간 전</span>
              <p>The best mandu restaurant is the one next to my house.</p>
            </div>
          </div>
        </div>
        <div>
          <textarea
            id="description"
            className="w-full shadow-sm border-gray-300 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 rounded-md"
            placeholder="대답을 입력해주세요!"
          />
          <button className="mt-4 p-4 bg-orange-400 w-full border border-transparent hover:bg-orange-200 text-white rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
