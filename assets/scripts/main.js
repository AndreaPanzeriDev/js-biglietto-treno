




function PriceCalc() {

    const Kmprice = 0.21;
    let Km = parseInt(document.getElementById("kmdafare").value);
    console.log(Km);
    let age = parseInt(document.getElementById("clientage").value);
    console.log(age);
    var RidePrice;

    if (age < 18) {
        console.log("minorenne");
        RidePrice = (Km * Kmprice) - (Km * Kmprice) * 0.2;
        console.log(RidePrice);
        document.getElementById('prezzo').innerHTML =
            `Il costo del tuo biglietto è: ${RidePrice.toFixed(2)} €`;
    } else if (age > 65) {
        console.log("anziani");
        RidePrice = (Km * Kmprice) - (Km * Kmprice) * 0.4;
        console.log(RidePrice);
        document.getElementById('prezzo').innerHTML =
            `Il costo del tuo biglietto è: ${RidePrice.toFixed(2)} €`;
    } else {
        RidePrice = Km * Kmprice;
        console.log(RidePrice);
        document.getElementById('prezzo').innerHTML =
            `Il costo del tuo biglietto è: ${RidePrice.toFixed(2)} €`;
    }

}