import ProductList from "@/components/productList";
import db from "@/lib/db";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Prisma } from "@prisma/client";
import Link from "next/link";

const getInitialProducts = async () => {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });

  return products;
};

export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

const Products = async () => {
  const initialProducts = await getInitialProducts();
  return (
    <>
      <ProductList initialProducts={initialProducts} />
      <Link
        href="/products/add"
        className="bg-orange-500 flex items-center justify-center rounded-full fixed bottom-24 right-8 text-white size-16 transition-colors hover:bg-orange-400"
      >
        <PlusIcon className="size-10" />
      </Link>
    </>
  );
};

export default Products;
