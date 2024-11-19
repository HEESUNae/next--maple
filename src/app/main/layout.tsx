import {ReactNode} from "react";
import {Header} from "@/views/header/header";

interface HomeLayoutProps {
    children: ReactNode;
}

export default function HomeLayout({children}:HomeLayoutProps){
    return (
        <>
            <Header/>
            {children}
        </>
    )
}