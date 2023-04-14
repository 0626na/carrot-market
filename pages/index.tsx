import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <>
      <div className="bg-neutral-200 px-20 py-20 grid gap-10 min-h-screen">
        <div className="bg-white p-6 rounded-2xl shadow-2xl ">
          <span className="font-semibold text-3xl">Select Item</span>
          <div className="flex justify-between my-3">
            <span className="text-gray-400">Grey chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tooly Table</span>
            <span className="font-semibold">$8</span>
          </div>
          <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
            <span>Total</span>
            <span className="font-semibold">$26</span>
          </div>
          <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
            Checkout
          </div>
        </div>
        <div className="bg-white overflow-hidden rounded-2xl shadow-2xl ">
          <div className="bg-blue-400 p-6 pb-14">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
            <div className="flex relative -top-16 items-end  justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-red-300 rounded-full"></div>
              <div className="flex flex-col item-center">
                <span className="text-sm text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="-mt-12  flex flex-col items-center">
              <span className="text-lg font-medium">Tony Molly</span>
              <span className="text-sm text-gray-500">미국</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-2xl ">
          <div className="flex justify-between mb-4">
            <span>⬅</span>
            <div className="space-x-3">
              <span>⭐️ 4.9</span>
              <span className="shadow-lg p-2 rounded-xl">❤️</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-80 mb-5"></div>
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="flex justify-between items-center mt-1">
              <div>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button className="w-11 bg-blue-300 rounded-lg aspect-square flex justify-center items-center">
                  -
                </button>
                <span>1</span>
                <button className="w-11 bg-blue-300 rounded-lg aspect-square flex justify-center items-center">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-lg font-semibold ">$450</span>
              <button className="bg-blue-500 rounded-lg p-2 w-48 text-center text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-2xl ">4</div>
      </div>
    </>
  );
};

export default Home;
