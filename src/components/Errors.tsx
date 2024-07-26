import { ReactNode } from "react"



export type ErrosProps ={
    children:ReactNode
}

export default function Errors({children}:ErrosProps) {
    return (
        <p className=" text-center my-4 bg-red-700 text-white font-bold p-3 uppercase text-sm">
            {children}
        </p>
    )
}
