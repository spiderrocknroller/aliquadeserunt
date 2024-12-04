function isOverCanvasUI(element) {
    const rect = element.getBoundingClientRect();
    const canvas = document.getElementById('canvas'); // replace with your canvas ID
    const canvasRect = canvas.getBoundingClientRect();

    if (rect.left >= canvasRect.left && rect.right <= canvasRect.right &&
        rect.top >= canvasRect.top && rect.bottom <= canvasRect.bottom) {
        return true;
    } else {
        return false;
    }
}
