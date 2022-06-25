import CaptureImage from '../components/CaptureImage'
import Form from '../components/Form'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Part from '../core/Part'

export default function Home() {

  const parts = [
    new Part("1", "chifrinho", "ponte de passagem", "axl34s", "outra", "mais", "qualquer","o que","vixi","acabou"),
    new Part("2", "az", "az de porta", "axl38s", "outra", "mais", "qualquer","o que","vixi","acabou"),
    new Part("3", "chaveta", "chaveta de porta", "axl40s",  "outra", "mais", "qualquer","o que","vixi","acabou"),
    new Part("4", "fecho", "fecho hidraulico", "axl50s",  "outra", "mais", "qualquer","o que","vixi","acabou"),
  ]

  return (    

      <div className='pb-60 bg-gradient-to-tr from-purple-500 via-orange-500 to-orange-500' >

     
     <Form/>      
           
    </div>
    
    
  )
}




{/* <div className={` 
    flex font-extrabold  justify-center items-center 
    bg-gradient-to-tr from-purple-500 via-orange-500 to-orange-500
    w-full h-full
    `}>
        <Head />  
        
        {/* <Layout  title="COMPONENTES" >
          <Table parts={parts} ></Table>
        </Layout> */}

{/* <label htmlFor="icon-button-file" className='mt-20 mb-10'>          
            <div
              color="primary"
              aria-label="upload picture"
              // component="span"              
            >
    <div className='flex mt-2 items-center justify-center'>
        <CaptureImage/>
    </div>
    </div>
    </label>
       
    </div> */}
