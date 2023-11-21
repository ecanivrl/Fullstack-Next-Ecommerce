import React from 'react';
import Heading from '../../common/Heading';
import { products } from '@/utils/Products';
import ProductCard from './ProductCard';
import { PageHorizontalPaddingContainer } from '../../common/Containers';

const Products = () => {
  return (
    <PageHorizontalPaddingContainer>
      <Heading text="All products" />
      <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 
          gap-3 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageHorizontalPaddingContainer>
  );
};

export default Products;
