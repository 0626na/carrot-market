import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const getIsOwner = async (userId: number) => {
  const session = await getSession();
  if (session.id) return session.id === userId;

  return false;
};

const getProduct = async (id: number) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });

  return product;
};

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = await getProduct(id);

  if (!product) return notFound();
  const isOwner = await getIsOwner(product.userId);

  return (
    <div className="relative">
      {/* 상품 이미지 */}
      <div className="relative aspect-square">
        <Image
          fill
          className="object-cover"
          src={product.photo}
          alt={product.title}
        />
      </div>
      {/* 작성자 정보 */}
      <div className="p-5 flex  items-center gap-3 border-b border-neutral-700">
        <div className="relative rounded-full size-10 overflow-hidden">
          {product.user.avatar !== null ? (
            <Image
              fill
              className="object-cover"
              alt={product.user.username}
              src={product.user.avatar}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>

      {/* 판매상품 정보 */}
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="fixed w-full bottom-0 left-0 pb-10 bg-neutral-800 flex justify-between items-center p-5">
        <span className="font-semibold text-xl">
          {formatToWon(product.price)}원
        </span>
        <div className="flex items-center gap-4">
          {isOwner && (
            <button className="bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold">
              상품 삭제하기
            </button>
          )}
          <Link
            className="bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-md"
            href={""}
          >
            채팅하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
