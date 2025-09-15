document.getElementById("send-btn").onclick = async ()=>{
  const msg=document.getElementById("chat-input").value;
  const res=await fetch("/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({message:msg})
  });
  const data=await res.json();
  document.getElementById("messages").innerHTML += `<p><b>Moi:</b> ${msg}</p>`;
  document.getElementById("messages").innerHTML += `<p><b>IA:</b> ${data.reply}</p>`;
};
