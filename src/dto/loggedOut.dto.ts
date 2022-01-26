import { useMutation } from "react-query";
import axios from "axios";
import { url } from "../url";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../slices/loginSlice";

export interface CreateUserInterface{
    username: string;
    // email: string;
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




const dispatch = useDispatch()

// LoginPost
export const loginFunction = (user: LoginUserInterface): Promise<ReturnUserInterface> => {
    return axios.post(url + 'login', user)
}

export const loginMutation = () => {
    return useMutation(loginFunction)
}

// loginOptions


export const signupFunction = (user: CreateUserInterface): Promise<ReturnUserInterface> => {
    return axios.post(url + 'signup', user)
}

export const signupMutation = () => {
    return useMutation(signupFunction)
}