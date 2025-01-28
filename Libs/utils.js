export function render(arr, box, Component) {
    box.innerHTML = '';

    for (let item of arr) {
        const elem = Component(item);
        box.append(elem);
    };
};