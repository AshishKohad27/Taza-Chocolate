export interface ProductItemProps {
    _id?: string;
    productId?: string;
    newProduct: boolean;
    soldProduct: boolean;
    productImage: string;
    productTitle: string;
    productPrice: string;
    productDescription: string;
}

export type ProductGridProps = { products: ProductItemProps[] };


