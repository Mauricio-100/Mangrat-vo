import { state } from "../app.js";

document.getElementById("get-balance").onclick=async()=>{
  const res=await fetch("/user/balance",{
    headers:{"Authorization":"Bearer "+state.jwt}
  });
  const data=await res.json();
  document.getElementById("balance").innerText=`SC: ${data.SC} | SG: ${data.SG}`;
};

document.getElementById("convert-btn").onclick=async()=>{
  const amount=document.getElementById("amount").value;
  const res=await fetch("/user/convert",{
    method:"POST",
    headers:{
      "Authorization":"Bearer "+state.jwt,
      "Content-Type":"application/json"
    },
    body:JSON.stringify({amount})
  });
  const data=await res.json();
  alert("Conversion réussie: "+JSON.stringify(data));
};
