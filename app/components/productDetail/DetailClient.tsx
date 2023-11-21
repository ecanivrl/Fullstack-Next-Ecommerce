'use client';

import {
  PageHorizontalPaddingContainer,
  PageTopPaddingContainer,
} from '../common/Containers';

const DetailClient = ({ product }: { product: any }) => {
  return (
    <PageHorizontalPaddingContainer>
      <PageTopPaddingContainer>
        <div>{product.name}</div>
      </PageTopPaddingContainer>
    </PageHorizontalPaddingContainer>
  );
};

export default DetailClient;
