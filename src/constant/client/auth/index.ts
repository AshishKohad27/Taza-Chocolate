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