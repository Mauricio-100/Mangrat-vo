document.getElementById("pay-btn").onclick=async()=>{
  const amount=document.getElementById("pay-amount").value;
  const res=await fetch("/payment/create",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({amount})
  });
  const data=await res.json();
  window.location.href=data.checkoutUrl;
};
