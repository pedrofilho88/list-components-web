import Part from "../core/Part"
import Button from "./Button"

interface TableProps {
    parts: Part
    setOption: () => void
}

export default function Table (props: TableProps){

    function renderData(){
        // return props.parts?.map((part, i) => {

            return(                
                <div >
                    <hr className="border-2 border-purple-500 rounded-md mb-1" /> 
                    
                    <div className={"w-full h-full border-2 border-solid border-slate-700 rounded-md"} >
                           <h3>Descrição do Produto:</h3>
                           <h3 className="font-medium" >{props.parts.getName()}</h3>                      
                    </div>

                    <div className="border-2 border-solid border-slate-700 rounded-md">
                            <span className={'text-left '}>Código 1:</span >
                            <span className={'text-left pl-2'}> {props.parts.getParnumber()} </span >                            
                    </div>
                    <div >
                            <span className={'text-left '}>Código 2:</span >
                            <span className={'text-left pl-2'}> {props.parts.getName()} </span >                            
                    </div>
                    <div className={"w-full"} >
                           <h3>Descrição do Técnico:</h3>
                           <h3 className="font-medium" >{props.parts.getDescription()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Modelo:</h3>
                           <h3 className="font-medium" >{props.parts.getModel()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <span>Localização:</span>
                           <span className="font-medium text-justify" > {props.parts.getLocation()} </span>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Descrição do Fabricante:</h3>
                           <h3 className="font-medium" >{props.parts.getFabricatordescription()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Part Number do Fabricante:</h3>
                           <h3 className="font-medium" >{props.parts.getParnumber()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Fabricante:</h3>
                           <h3 className="font-medium" >{props.parts.getManufacturer()}</h3> 
                                            
                    </div>
                    <div className=" flex  justify-end m-6 items-end" >
                        <Button onClick={() => {props.setOption()} }> VOLTAR</Button>
                    </div>
                      
                </div>
            )
        // }  )
    }
    
    return (
        <div className="text-xs w-full overflow-hidden rounded-md">
            {renderData()}
        </div>

    )
}
