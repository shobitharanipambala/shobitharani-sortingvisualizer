
const newArrayBtn = document.getElementById("newArray");
const bars = document.getElementById("bars");
const generateArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};
const createBars = () => {
    const array = generateArray();
    bars.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${array[i]}3px`;
        bars.appendChild(bar);
    }
};
newArrayBtn.addEventListener("click", createBars);
createBars();

