"use client"
import Product from "@/components/Product";
import { products } from "@/data/dummydata";

export default function Home() {
  return (
   <div className="grid grid-cols-1 justify-between pt-5 sm:grid-cols-3 md:grid-cols-5">
    {products.map((products, index, image) => (
      <Product 
        key = {index}
        name = {products.name}
        price = {products.price}
        variants={products.variants ? { color: products.variants.color, size: products.variants.size } : undefined}
       

      />
    ))}
   </div>
  );
}
