import Sidebar from "@/components/Sidebar"
import { FC } from "react"


export interface HomeLayoutProps = {
    children: React.ReactNode
}


const HomeLayout:FC<HomeLayoutProps>=({children})=>{
    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}