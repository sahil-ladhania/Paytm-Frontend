import { atom } from "recoil";

export const signupFormState = atom({
    key : 'signupFormState',
    default : {
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    }
})