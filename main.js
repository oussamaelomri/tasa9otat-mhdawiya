document.body.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span")
    spanEl.style.top = yPos +"px";
    spanEl.style.left = xPos +"px";

    const size = Math.random() * 150;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    document.body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})