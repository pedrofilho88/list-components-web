import { SetStateAction, useState } from "react";
import CaptureImage from "./CaptureImage";
import Head from "./Head";

export default function Form (){

    const [subCodigo, setSubcodigo] = useState(false);
    const [equipamento, setEquipamento] = useState("");
    const [novoFabricante, setNovoFabricante] = useState(false);
  
    function getText(text: SetStateAction<string>) {
    //   text = text.toUpperCase();    
      setEquipamento(text);    
    }

    return (
        < div className=" flex  flex-col justify-start items-start h-screen" >
          {/* <Head/>  */}
          < div className="font-semibold ml-3 mr-3 mt-20">Nome do Componente</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12 "
              placeholder="Nome da peça "
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Descrição do fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Descrição dada pelo fabricante"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Código do Fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Part Number do Fabricante"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Nome do Fabricante</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Digite o Nome do Fabricante"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Localização do Componente</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="QC, Operador, poço, cabina etc"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Descrição do Técnico</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Ex: chifrinho de porta"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Modelo do Equipamento</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Ex: Excel, GEN2 etc"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3">Código Principal</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 mr-3 w-11/12"
              placeholder="Código Principal do componente"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          < div className="font-semibold ml-3 mt-3 mr-3" >Código Secundário</ div>
          <input
              className="border-black pl-2 border-2 rounded-md ml-3 w-11/12"
              placeholder="Outro Código (se existir)"
              onChange={(event) => {getText(event.target.value) } }
              value={equipamento}              
          />
          <div className="flex items-center justify-center ml-auto mr-auto my-12">
            <CaptureImage/>
          </div>
       </ div>
    )
    
}