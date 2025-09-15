import { state } from "../app.js";
import { saveState } from "../utils/storage.js";

document.getElementById("login-form").onsubmit = async (e)=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/auth/login", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  });
  const data = await res.json();
  if(data.token){
    state.jwt=data.token; saveState(state);
    alert("Connecté !");
  } else alert("Erreur login");
};

document.getElementById("register-form").onsubmit = async (e)=>{
  e.preventDefault();
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const res = await fetch("/auth/register", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  });
  const data = await res.json();
  if(data.success) alert("Compte créé !");
  else alert("Erreur inscription");
};
