
import Title from "./Title"

interface LayoutProps {
    title: string
    children: any
}

export default function Layout (props: LayoutProps) {
    return(
    
       
        <div className={`
            flex flex-col justify-center w-11/12 bg-white text-purple-800 text-sm rounded-md
            mt-14 mb-14 ml-4             

        `}>
            <Title > {props.title} </Title>
            <div className="px-1  " >
                {props.children}
            </div>

        </div>
        
    )
}