let adam = new Human('adam','male',70);
let eva = new Human('eva','female', 48);
let apple1 = new Apple(2);
let apple2 = new Apple(10);
// let apple3 = new Apple(0);
function run() {
    while (!apple2.isEmpty()) {
        adam.eat(apple2);
        eva.eat(apple2);
    }
}
window.onload = run();