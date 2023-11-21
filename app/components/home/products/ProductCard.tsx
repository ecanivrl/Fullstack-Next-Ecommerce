'use client';

import textClip from '@/utils/TextClip';
import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    // <Link href={`product/${product.id}`}>
    <div
      onClick={() => router.push(`product/${product.id}`)}
      className="w-full mx-auto shadow-2xl rounded-md border border-purpleDark flex flex-col flex-1 cursor-pointer"
    >
      <div className="relative h-[140px] sm:h-[190px]">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="product image"
        />
      </div>
      <div className="text-center mt-2 p-2 space-y-1">
        <div className="">{textClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="flex items-center justify-between text-sm text-purpleLight ">
          <span className="font-bold">{product.price.toLocaleString()} ₺</span>
          <span className="line-through text-xs font-semibold">
            {product.oldPrice.toLocaleString()} ₺
          </span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCard;
