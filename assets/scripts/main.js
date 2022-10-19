




function PriceCalc(){

    const Kmprice = 0.21;
    var RidePrice;
    let Km = document.getElementById("kmdafare").value;
    console.log(Km);
    let age = document.getElementById("clientage").value;
    console.log(age);

    switch(age){
        case age < 18:
            console.log("minorenni");
            RidePrice = (Km * Kmprice) * 0.2;
            console.log("costo corsa: ", RidePrice);
            break;
        case age > 65:
            console.log("anziani");
            RidePrice = (Km * Kmprice) * 0.4;
            console.log("costo corsa: ", RidePrice);
            break;
        
        default:
            RidePrice = Km * Kmprice;
            console.log("costo corsa: ", RidePrice);
            
    }

}