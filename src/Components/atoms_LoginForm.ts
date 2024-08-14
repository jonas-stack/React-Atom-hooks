import { atom } from 'jotai';

export interface AuthForm {
    username: string;
    password: string;
}

export const authFormAtom = atom<AuthForm>({ username: '', password: '' });