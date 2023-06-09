import axios from 'axios'
import { ORDER } from './order.types'


export const GETDATA=()=>async(dispatch)=>{
    let data=JSON.parse(localStorage.getItem('data'))
    let creds={
        "timeframe": "Today",
        // "orderStatus": "All",
        "restaurantIdData": [
          {
            "_id": data._id,
            "name": data.businessName
          }
        ],
        "brandId": data._id,
        "pageNumber": 1,
        "limit": 30,
        "fromDate": "",
        "toDate": ""
      }
    try{
        let response=await axios.post('https://apis.saveeat.in/api/v1/user/getOrderListForBrand',creds)
        //console.log(response.data)

        dispatch({type:ORDER,payload:response.data})
    }catch(e){
        console.log(e)
    }

}
