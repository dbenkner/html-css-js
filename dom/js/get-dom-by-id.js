console.log("Ready...");
const button_click = (num) => {
    let txt = document.getElementById("bc40").value;
    console.warn(txt, num);
}
const loaded = () => {
    let inpCtrl = document.getElementById("bc40");
    let val = inpCtrl.value;
    console.log("input contains: ", val);
    inpCtrl.value = "Hello, Javascript world!";
    console.debug(inpCtrl.value);
}