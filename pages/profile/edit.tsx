import { NextPage } from "next";

const Edit: NextPage = () => {
  return (
    <>
      <div className="px-4 py-16 space-y-5 ">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-slate-400" />
          <label
            htmlFor="picture"
            className="border border-slate-400 rounded-md p-2 text-slate-400 hover:cursor-pointer"
          >
            아바타 사진 변경
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="email" className="font-semibold">
            E-mail
          </label>
          <input
            id="email"
            placeholder="input your e-mail"
            type="email"
            className="shadow-md appearance-none w-full border px-3 py-2 border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-orange-400  focus:border-orange-400"
            required
          />
        </div>

        <div className="flex flex-col justify-center">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <div className="flex rounded-md shadow-md">
            <span className="flex justify-center items-center px-3 rounded-l-md border border-r-0 bg-gray-100 border-gray-200 text-gray-400 text-sm">
              +82
            </span>
            <input
              id="phone"
              type="number"
              placeholder="input your phone number"
              className="appearance-none w-full border px-3 py-2 border-gray-300 rounded-md placeholder-gray-300 focus:outline-none focus:ring-orange-400  focus:border-orange-400 rounded-l-none"
              required
            />
          </div>
        </div>
        <button className="mt-4 p-4 bg-orange-400 w-full border border-transparent hover:bg-orange-200 text-white rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none">
          Upload Profile
        </button>
      </div>
    </>
  );
};

export default Edit;
