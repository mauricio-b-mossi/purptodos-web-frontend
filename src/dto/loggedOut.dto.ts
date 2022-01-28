export interface CreateUserInterface{
    email?: string;
    username: string;
    password: string;
}


export interface LoginUserInterface{
    username: string;
    password: string;
}

export interface ReturnUserInterface{
    username: string;
    id: string;
}
