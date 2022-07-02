import { useState } from "react";
import Button from "../components/Button";
import CaptureImage from "../components/CaptureImage";
import Form from "../components/Form";
import Head from "../components/Head";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Part from "../core/Part";

export default function Home() {
  const [option, setOption] = useState<"table" | "form">("form");
  const [name, setName] = useState("");
  const parts = new Part();
  const [part, setPart] = useState(parts);
  return (
    <div className="pb-60 bg-gradient-to-tr from-purple-500 via-orange-500 to-orange-500 max-w-full max-h-full">
    
      {option === "table" ? (
        <>
          <Layout title="Tabela de componentes">
          {/* <h1> {part.getName()}</h1>
          <h1> {part.getFabricatordescription()}</h1>
          <h1> {part.getParnumber()}</h1> */}
          <Table parts={part} setOption={ () => setOption("form")} />
          </Layout>
        </>
      ) : (
        <>
          
          <Form part={parts} setPart={ (e) => { setPart(e); setOption("table") }} />
          
        </>
      )}
      
    </div>
  );
}

