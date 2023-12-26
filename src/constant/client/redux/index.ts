export type TReducerStateAuth = {
    isAuth: boolean;
    token: string | null | undefined;
    loading: boolean;
    error: boolean;
    message?: string;
    errorMessage?: string;
    tokenDetails: [],
    user: [],
    allUsers: [],
}


export type TReducerActionAuth = {
    type: string;
    payload?: any;
};