let counter = 0;
const inc = () => {
    counter += 1;
    change(counter);
}
const dec = () => {
    counter -= 1;
}
const change = (counter) => {
    inp = document.getElementById("count");
    inp.value = counter;
    counter % 7 ===0? inp.style.fontWeight = "bold" : inp.style.ontWeight = "normal";
    counter % 3 ===0?  inp.style.fontStyle = "italic" : inp.style.fontStyle = "normal";
    counter % 2 ===0? inp.style.color = "red" : inp.style.color = "black";

    console.log("test");
}