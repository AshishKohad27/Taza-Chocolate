interface Subproduct {
    type: "bar" | "case";
    price: number;
}

interface Status {
    new_product: boolean;
    sold_product: boolean;
    most_sale: boolean;
}

export type ProductApiProps = {
    sub_products: Subproduct[];
    title: string;
    description: string;
    category: string;
    image_url: string[];
    nutrition_information: string;
    total_quantity: number;
    product_status: Status;
};

export type PramsProps = {
    search: string | null;
    page: string | 1 | null;
    limit: string | 10 | null;
};

export type ProductIdProps = {
    productId: string;
};