import { ORDER } from "./order.types"


const initial={
   message:"",
    data:[]
}
 export const orderReducer=(state=initial,{type,payload})=>{
    switch(type){
        case ORDER:{
            
            return{
                ...state,message:payload.message,data:payload.data
            }
        }
       
       
        default :return state

    }
 }