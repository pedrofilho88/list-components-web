import { useState } from "react"


export default function CaptureImage(){
  
    const [source, setSource] = useState("");
    
    const handleCapture = (target: EventTarget & HTMLInputElement) => {
        if (target.files) {
          if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file);
            setSource(newUrl); 
          }
        }        
      };

    return (        
            < > 
            <input
            accept="image/*"
            className="hidden"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
            />                  
            { source ?
                <label htmlFor="icon-button-file">
                <div className="flex justify-center border">
                    <img src={source} alt={"snap"} className="flex items-start justify-start w-32 h-32"  ></img>
                </div> 
                </label>
                : 
                <label htmlFor="icon-button-file" >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 " viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 
                      2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                 </label>   
            }
            </>   
               

     )
}


