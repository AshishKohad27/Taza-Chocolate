export type AuthorizationBET = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: 'admin' | 'manager' | 'guest';
};

export type AuthResponseControllerBET = {
    data: Array<AuthorizationBET> | [];
    flag: Boolean;
    desc: any;
    statusCode: number;
    message: string
}