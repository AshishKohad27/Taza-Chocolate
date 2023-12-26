export type AuthorizationBET = {
    _id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: 'admin' | 'manager' | 'guest';
};

export type AuthResponseControllerBET = {
    token?: {
        taza_token: String,
        taza_refresh_token: String
    };
    data?: Array<AuthorizationBET> | [];
    flag: Boolean;
    desc: any;
    statusCode: number;
    message: string
}

export type AuthResponseLoginControllerBET = {
    token: {
        taza_token: String,
        taza_refresh_token: String
    };
    flag: Boolean;
    desc: any;
    statusCode: number;
    message: string
}

export type AuthLoginBET = {
    email: string;
    password: string;
}

export type AuthQueryBET = {
    search?: any;
    limit?: any;
    page?: any;
};
