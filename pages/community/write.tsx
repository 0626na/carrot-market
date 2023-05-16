import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="p-4">
      <textarea
        id="description"
        className="w-full shadow-sm border-gray-300 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 rounded-md"
        placeholder="질문을 입력해주세요!"
      />
      <button className="mt-4 p-4 bg-orange-400 w-full border border-transparent hover:bg-orange-200 text-white rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none">
        Submit
      </button>
    </div>
  );
};
export default Write;
