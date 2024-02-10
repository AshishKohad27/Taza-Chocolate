export type AuthCredentials = {
    _id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: 'admin' | 'manager' | 'guest';
};

// Sign In Page
export type authorizationRegT = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    conform_password?: string;
}

export type authorizationLoginT = {
    email: string;
    password: string;
}

export type passwordStatusT = {
    upperCase: boolean,
    lowerCase: boolean,
    number: boolean,
    symbol: boolean,
    length: boolean
}

export type AuthPayloadAction = {
    desc: string;
    message: string;
    data: AuthCredentials[];
}


export type AuthToken = {
    taza_token: string,
    taza_refresh_token: string
}

export type LoginPayloadAction = {
    desc: string;
    message: string;
    token: AuthToken;
}