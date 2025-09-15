export function renderFooter(){
  fetch("./components/footer.html")
    .then(res=>res.text())
    .then(html=>{
      document.getElementById("footer").innerHTML = html;
      document.getElementById("about-btn").onclick = ()=>{
        const sec = document.getElementById("about-section");
        sec.style.display = sec.style.display==="none" ? "block":"none";
      };
    });
}
