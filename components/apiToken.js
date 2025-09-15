import { state } from "../app.js";
import { saveState } from "../utils/storage.js";

document.getElementById("gen-token").onclick=async()=>{
  const res=await fetch("/user/api-token",{
    method:"POST",
    headers:{"Authorization":"Bearer "+state.jwt}
  });
  const data=await res.json();
  state.apiToken=data.token; saveState(state);
  document.getElementById("token-display").innerText="Token: "+data.token;
};
