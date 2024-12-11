import { Dispatch, FormEvent, SetStateAction } from "react";

export const handelSubmitPartOneForgotPassword = (e: FormEvent<HTMLFormElement>, setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>) => {
    e.preventDefault()
    setPart(2)
}
export const handelSubmitPartTwoForgotPassword = (e: FormEvent<HTMLFormElement>, setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>) => {
    e.preventDefault()
    setPart(3)
}
export const handelSubmitPartThreeForgotPassword = (e: FormEvent<HTMLFormElement>, setPart: Dispatch<SetStateAction<1 | 2 | 3 | 4>>) => {
    e.preventDefault()
    setPart(4)
}
export const handelSubmitPartFourForgotPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}