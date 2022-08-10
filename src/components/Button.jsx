// export const Button1 = () =>{
//     return <button className="bg-blue-500 p-3 m-2 text-white rounded-full py-2 px-5  " > Add to Cart </button>
// };

// export const Button2 = () =>{
//     return <button className="bg-red-600 p-3 m-2 text-white " > Login </button>
// };

// export const Button3 = () =>{
//     return <button className="bg-green-600 p-3 m-2 text-white" > Register </button>
// };

function Button ({label}) {
        return <button className=" m-2 bg-green border-2 border-red-500 py-2 px-5 rounded-full text-white-500 hover:bg-blue-500 
        hover:text-black-500 ">{label}</button>

} 

export default Button;