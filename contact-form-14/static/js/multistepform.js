const nxtbutton = document.getElementById("nxt");
const prevbtn = document.getElementById("prev");
const btns = document.getElementById("btns");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

nxtbutton.addEventListener("click", modifyDisplay, false);
function modifyDisplay() {
    nxtbutton.classList.add("dnone");
    btns.classList.remove("dnone");
    form2.classList.remove("dnone");
    form1.classList.add("dnone");
} 

prevbtn.addEventListener("click", modifyDisplay2, false);
function modifyDisplay2() {
    btns.classList.add("dnone");
    nxtbutton.classList.remove("dnone");
    form1.classList.remove("dnone");
    form2.classList.add("dnone");
} 