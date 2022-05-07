class Main {
    constructor() {
    }

    go() {
        console.log("go");
        const leftOri = [...new Set(document.getElementById("ori-left").value.split("\n").sort())];
        const rightOri = [...new Set(document.getElementById("ori-right").value.split("\n").sort())];

        let leftOnly = leftOri.filter(item => rightOri.indexOf(item) == -1);
        let rightOnly = rightOri.filter(item => leftOri.indexOf(item) == -1);

        document.getElementById("result-left").value = leftOnly.join("\n");
        document.getElementById("result-right").value = rightOnly.join("\n");
    }
}
let main = new Main();
