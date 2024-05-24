import { formatToTimeAgo, formatToWon } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
}

const Product = ({ title, price, created_at, photo, id }: ProductProps) => {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="size-28 rounded-md relative overflow-hidden">
        <Image src={photo} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg font-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
};

export default Product;
