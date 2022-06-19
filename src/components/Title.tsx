import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Title(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <div className=" flex flex-col items-center justify-center " >
            <h1 className="px-4 py-2  text-2xl">
                {props.children}
            </h1>            
        </div>
    )
}