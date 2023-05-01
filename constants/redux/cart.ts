
export interface ObjectProduct {
    _id: String;
    title: String;
    description: String;
    bar: String;
    caseBar: String;
    image: String;
    category: String;
    quantity: Number;
    productId: String;
    userId: String;
    __v: Number;
}

export type TReducerStateCart = {
    CartItems: ObjectProduct[] | [];
    loading: boolean;
    error: boolean;
    errorMessage: string;
    message: string;
}


export type TReducerActionCart = {
    type: string;
    payload?: any;
};