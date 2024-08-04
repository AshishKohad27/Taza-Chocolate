interface Subproduct {
    type: "bar" | "case";
    price: number;
}

interface Status {
    new_product: boolean;
    sold_product: boolean;
    most_sale: boolean;
}

export type ProductData = {
    sub_products: Subproduct[];
    title: string;
    description: string;
    category: string;
    image: string;
    image_url: string[];
    nutrition_information: string;
    total_quantity: number;
    product_status: Status;
};

export type ProductPayloadAction = {
    desc: string;
    message: string;
    total: number;
    data: ProductData[];
}