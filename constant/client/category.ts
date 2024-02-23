
export type CategoryData = {
    _id: string;
    title: string;
    image_url: string
    iat?: string;
    exp?: string;
};

export type PayloadCategory = {
    title: string;
    image_url: string
};

export type CategoryId = {
    categoryId: string;
};

export type CategoryPayloadAction = {
    desc: string;
    message: string;
    data: CategoryData[];
}