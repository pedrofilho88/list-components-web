export default function Title(props) {
    return (
        <div className=" flex flex-col items-center justify-center " >
            <h1 className="px-4 py-2  text-2xl">
                {props.children}
            </h1>            
        </div>
    )
}