const listeners = [];

// Helper function to add listeners and store references
function addListener(element, type, listener) {
    element.addEventListener(type, listener);
    listeners.push({ element, type, listener });
}

// Helper function to remove all stored listeners
function removeAllListeners() {
    listeners.forEach(({ element, type, listener }) => {
        element.removeEventListener(type, listener);
    });
    listeners.length = 0; // Clear the array
}

// Usage
const element = document.getElementById('myElement');

function handleClick(event) {
    console.log('Clicked');
}

function handleMouseOver(event) {
    console.log('Mouse Over');
}

addListener(element, 'click', handleClick);
addListener(element, 'mouseover', handleMouseOver);

// Later, remove all listeners
removeAllListeners();
