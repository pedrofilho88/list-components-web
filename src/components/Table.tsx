import Part from "../core/Part"

interface TableProps {
    parts: Part[]
}

export default function Table (props: TableProps){

    function renderData(){
        return props.parts?.map((part, i) => {

            return(                
                <>
                    <hr className="border-2 border-purple-500 rounded-md" /> 
                    <div className={"w-full"} >
                           <h3>Localização:</h3>
                           <h3 className="font-medium text-justify" >
                           Placa localizada na casa de maquinas que faz o acionamento do equipemanto por mais
                           que voce queira ele nao ira funcionar de jeito nenhum pelo jeito e assim que a coisa
                           toda funciona meu cabra vamos continuando para ver como vai ser a renderização no final
                           da tela
                           </h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Descrição do Produto:</h3>
                           <h3 className="font-medium" >{part.getName()}</h3>                      
                    </div>

                    <div >
                            <span className={'text-left '}>Código 1:</span >
                            <span className={'text-left pl-2'}> {part.getParnumber()} </span >                            
                    </div>
                    <div >
                            <span className={'text-left '}>Código 2:</span >
                            <span className={'text-left pl-2'}> {part.getName()} </span >                            
                    </div>
                    <div className={"w-full"} >
                           <h3>Descrição do Técnico:</h3>
                           <h3 className="font-medium" >{part.getDescription()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Modelo:</h3>
                           <h3 className="font-medium" >{part.getModel()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Descrição do Fabricante:</h3>
                           <h3 className="font-medium" >{part.getFabricatordescription()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Part Number do Fabricante:</h3>
                           <h3 className="font-medium" >{part.getParnumber()}</h3>                      
                    </div>
                    <div className={"w-full"} >
                           <h3>Fabricante:</h3>
                           <h3 className="font-medium" >{part.getManufacturer()}</h3> 
                                               
                    </div>
                </>
            )
        } )
    }
    
    return (
        <div className="text-xs w-full overflow-hidden rounded-md">
            {renderData()}
        </div>

    )
}
