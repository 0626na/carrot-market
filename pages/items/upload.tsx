import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div className="mb-5">
        <label className="flex w-full cursor-pointer items-center justify-center border-dashed border-4 p-4 h-48 rounded-lg hover:text-orange-400 hover:border-orange-400">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="file" className="hidden" />
        </label>
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
        Upload product
      </button>
    </div>
  );
};

export default Upload;
