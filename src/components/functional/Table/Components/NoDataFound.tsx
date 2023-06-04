import { Flexbox } from "@/components/ui"
import React from "react"

interface INoDataFound{
    labelText?:string
}
export const TableNoDataFound:React.FC<INoDataFound> = ({labelText = 'There are no records to display'}) =>{
    return <Flexbox align='center' justify='center' >{labelText}</Flexbox>
}