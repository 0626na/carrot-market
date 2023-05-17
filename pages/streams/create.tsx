import { NextPage } from "next";

const CreateStream: NextPage = () => {
  return (
    <div className="px-4 py-16 space-y-6">
      <div>
        <label className="text-sm font-medium block">Product Name</label>

        <div className="relative flex items-center">
          <div className="absolute left-2 flex items-center pointer-events-none">
            <span className="text-sm text-gray-300">$</span>
          </div>

          <input
            type="text"
            placeholder="상품명을 입력하세요"
            className="pl-6 appearance-none w-full border px-3 py-2 border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-orange-400  focus:border-orange-400 rounded-l-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="price" className="text-sm font-medium block">
          Price
        </label>

        <div className="relative flex items-center">
          <div className="absolute left-2 flex items-center pointer-events-none">
            <span className="text-sm text-gray-300">$</span>
          </div>

          <input
            type="text"
            placeholder="0.00"
            id="price"
            className="pl-6 appearance-none w-full border px-3 py-2 border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-orange-400  focus:border-orange-400 rounded-l-none"
          />

          <div className="flex items-center absolute right-0 pr-6 text-sm text-gray-300 pointer-events-none">
            <span>USD</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="description" className="text-sm font-medium block">
          Description
        </label>

        <div>
          <textarea
            id="description"
            className="w-full shadow-sm border-gray-300 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 rounded-md"
          />
        </div>
      </div>

      <button className="mt-4 p-4 bg-orange-400 w-full border border-transparent hover:bg-orange-200 text-white rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none">
        Go Live
      </button>
    </div>
  );
};

export default CreateStream;
