class Main {
    constructor() {
    }

    go() {
        console.log("go");
        let leftList = document.getElementById("left").value.split("\n");
        let rightList = document.getElementById("right").value.split("\n");
        console.log(leftList.join("\n"));
        console.log(rightList.join("\n"));
    }
}
let main = new Main();
