import type { ProductProps } from "@/data/interface"

const Product = (product : ProductProps) => {
  return (
    <div className="text-black text-center pt-5">
        <div>
            {product.name}
        </div>
        <div>
            {product.price}
        </div>
        {product.variants?.color && (
            <div>
                Color: {product.variants.color}
            </div>
        )}
                {product.variants?.size && (
            <div>
                Size: {product.variants.size}
            </div>
        )}
    </div>
  )
};

export default Product