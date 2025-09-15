import { state } from "../app.js";

(async ()=>{
  const res=await fetch("/user/transactions",{
    headers:{"Authorization":"Bearer "+state.jwt}
  });
  const data=await res.json();
  const list=document.getElementById("transactions-list");
  data.forEach(t=>{
    const li=document.createElement("li");
    li.textContent=`${t.date} - ${t.type} - ${t.amount} SC`;
    list.appendChild(li);
  });
})();
