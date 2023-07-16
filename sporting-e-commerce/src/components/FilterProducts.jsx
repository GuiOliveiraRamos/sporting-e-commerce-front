import axios from "axios"


export default async function FilterProducts(rota) {
  try{
    return await axios.get(`${import.meta.env.VITE_API_URL}/${rota}/`)
  }catch(err){
    console.log("eita")
  }
}