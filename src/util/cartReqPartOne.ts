import { Dispatch, FormEvent, SetStateAction } from "react";

export const handelSubmitPartOne = (e: FormEvent<HTMLFormElement>, setPart: Dispatch<SetStateAction<number>>) => {
    e.preventDefault()
    setPart(2)
}