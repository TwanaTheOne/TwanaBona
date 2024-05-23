interface LinkProps {
    name : string
    href : string
    image? : string
}

interface ProductProps {
    name: string
    price: number
    variants?: ProductVariants
    image? : string
    label?: string
}

interface ProductVariants {
    color?: string
    size?: string
    image?:string
}

export type { LinkProps, ProductProps, ProductVariants }