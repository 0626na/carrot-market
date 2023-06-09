import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="개인 물건">
      <div className="p-4 space-y-4">
        <div className="space-y-4">
          <div className="bg-slate-300 w-full h-72" />
          <div className="flex mt-5 space-x-4 items-center border-b py-4">
            <div className="h-24 w-24 bg-slate-200 rounded-full" />
            <div>
              <p className="font-semibold">Steve Jebs</p>
              <p>View profile &rarr;</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold pb-2">Galaxy S50</h1>
            <p className="text-2xl pb-4">$140</p>
            <p className="text-justify">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <button className="flex-1 bg-orange-400 py-3 text-white rounded-md hover:bg-orange-300 hover:ring-2 ring-offset-2 ring-orange-400">
                Talk to seller
              </button>
              <button className="p-3 rounded-xl opacity-40 items-center hover:bg-slate-200">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="w-full h-56 bg-slate-400 mb-2" />
                <h3 className="text-gray-400">Galaxy S60</h3>
                <p className="text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
