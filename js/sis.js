function sius() {
    var fields = document.getElementsByTagName('input');
    
    if ((fields[2].value != 0 || fields[3].value != 0)) {
        var list = document.getElementsByTagName('span');
        let minFuel, safeFuel, maxFuel;

        minFuel = (60 * +fields[0].value) / ((60 * +fields[2].value) + +fields[3].value);
        minFuel = Math.ceil(minFuel);
        minFuel *= +fields[1].value;
        minFuel = Math.round(minFuel);
        safeFuel = minFuel + +fields[1].value;
        safeFuel = Math.ceil(safeFuel);
        maxFuel = safeFuel + +fields[1].value;
        maxFuel = Math.round(maxFuel);

        list[0].innerHTML = minFuel;
        list[1].innerHTML = safeFuel;
        list[2].innerHTML = maxFuel;
    }
}
