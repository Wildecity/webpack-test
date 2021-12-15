export function createText(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph
};