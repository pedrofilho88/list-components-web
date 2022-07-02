import { useState } from "react";
import CaptureImage from "./CaptureImage";
import Head from "./Head";
import Part from "../core/Part"
import Button from "./Button";

interface PartProps {
     part: Part
     setPart: (part: Part) => void
 }

export default function Form (props: PartProps ){
    
    const [name, setName] = useState(props.part?.getName());
    const [fabricatordescription, setFabricatordescription] = useState(props.part?.getFabricatordescription());
    const [partnumber, setPartnumber] = useState (props.part?.getParnumber());
    const [manufacturer, setManufacturer] = useState (props.part?.getManufacturer());
    const [location, setLocation] = useState(props.part?.getLocation());
    const [description, setDescription] = useState(props.part?.getDescription());
    const [model, setModel] = useState(props.part?.getModel());
    const [code1, setCode1] = useState(props.part?.getCode1());
    const [code2, setCode2] = useState(props.part?.getCode2());   
    
    function changeText(text: string) {
        text = text.toUpperCase();
    return text;   
    }

    return (
        < div className=" flex  flex-col m-0 justify-start items-start h-screen box-border" >
          {/* <Head/>  */}  
          < div className="font-semibold ml-3 mr-3 mt-20">Nome do Componente</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12 "
              placeholder="Nome da peça "
              onChange={  (e) => { setName(props.part.setName( changeText( e.target.value )))  }}
              value={name}
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Descrição do fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Descrição dada pelo fabricante"
              onChange={  (e) => { setFabricatordescription( props.part.setFabricatordescription( changeText( e.target.value ))) }}
              value={fabricatordescription}            
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Código do Fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Part Number do Fabricante"
              onChange={  (e) => { setPartnumber( props.part.setParnumber(changeText( e.target.value ))) }}
              value={partnumber}             
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Nome do Fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Digite o Nome do Fabricante"
              onChange={  (e) => { setManufacturer(props.part.setManufacturer(changeText( e.target.value ))) }}
              value={manufacturer}             
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Localização do Componente</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="QC, Operador, poço, cabina etc"
              onChange={  (e) => { setLocation(props.part.setLocation(changeText( e.target.value ))) }}
              value={location}           
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Descrição do Técnico (opcional) </ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Ex: chifrinho de porta"
              onChange={  (e) => { setDescription(props.part.setDescription(changeText( e.target.value ))) }}
              value={description}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Modelo do Equipamento</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Ex: Excel, GEN2 etc"
              onChange={  (e) => { setModel(props.part.setModel(changeText( e.target.value ))) }}
              value={model}             
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Código Principal</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Código Principal do componente"
              onChange={  (e) => { setCode1(props.part.setCode1(changeText( e.target.value ))) }}
              value={code1}        
          />
          < div className="font-semibold ml-3 mt-3 mr-3" >Código Secundário</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 w-11/12"
              placeholder="Outro Código (se existir)"
              onChange={  (e) => { setCode2(props.part.setCode2(changeText( e.target.value ))) }}
              value={code2}            
          />
          <div className="flex items-center justify-center ml-auto mr-auto my-12">
            <CaptureImage/>
            <Button onClick={ () =>  props.setPart(props.part) }> GRAVAR</Button>
          </div>
       </ div>
    )
    
}