export function createCardElement(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add('card-text');
    return element;
}