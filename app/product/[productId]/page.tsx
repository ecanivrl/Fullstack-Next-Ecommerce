import DetailClient from '@/app/components/productDetail/DetailClient'
import { products } from '@/utils/Products'
import React from 'react'

type ProductDetailProps = {
    productId?: string,

}

const ProductDetail = ({params}:{params: ProductDetailProps}) => {

    const {productId} = params

    const product = products.find(product => product.id == productId)

  return (
    <div>
        <DetailClient product={product}/>
    </div>
  )
}

export default ProductDetail