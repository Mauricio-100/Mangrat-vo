// Fonctions helpers pour fetch avec JWT
import { state } from "../app.js";

export async function apiGet(url){
  return fetch(url,{headers:{"Authorization":"Bearer "+state.jwt}});
}

export async function apiPost(url,body){
  return fetch(url,{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+state.jwt,
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body)
  });
}
