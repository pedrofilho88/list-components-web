export default function Head (){
    return (
        <div className={`flex justify-start fixed top-2 left-2 right-2   bg-gradient-to-r from-gray-900 to-gray-600
            rounded-md
                
        `}  >
            <button 
                className="text-gray-100 font-bold bg-gray-600 rounded-full m-1 p-2 hover:bg-gray-500" 
                onClick={  () => window.alert("me clicou bestaiado")}                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </button>
        </div>
    )
}