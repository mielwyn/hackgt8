var whichBuilding;
var crosslandImages = [ "./Crossland/crossland0.png","./Crossland/crossland1.png","./Crossland/crossland2.png","./Crossland/crossland3.png",
                        "./Crossland/crossland4.png","./Crossland/crossland5.png","./Crossland/crossland6.png","./Crossland/crossland7.png"];
var priceImages = ["./Price/price0.png","./Price/price12.png", "./Price/price34.png"];                        
var culcImages = ["./Culc/culc1.png", "./Culc/culc2.png", "./Culc/culc3.png", "./Culc/culc4.png", "./Culc/culc5.png"];
function populateOccupancy(bld,flr)
{
    document.getElementById("occupancyResults").innerHTML = "";
    var occupancy;
    var url = 'http://'+location.host+'/mostrecentdata?building='+bld+'&floor='+flr;
    fetch(url).then(response => response.json()).then(rj => {
        occupancy = JSON.parse(JSON.stringify(rj))['occupancy'];
        console.log(occupancy);
        if (occupancy == "high" || occupancy == "medium" || occupancy == "low"){
            var occupancyText = document.getElementById("occupancyResults");
            var standard = document.createTextNode("The occupancy on this floor is " + occupancy.toUpperCase() + "!");
            occupancyText.appendChild(standard);
        }
        else if (occupancy == "no data"){
            var occupancyText = document.getElementById("occupancyResults");
            var standard = document.createTextNode("The occupancy of the floor is unknown.");
            occupancyText.appendChild(standard);
        }
    });

}

function defaultPage(){
    whichBuilding = "";

    document.getElementById("buildingImage").src = "";
    document.getElementById("ground").classList.add("hidden");
    document.getElementById("first").classList.add("hidden");
    document.getElementById("second").classList.add("hidden");
    document.getElementById("third").classList.add("hidden");
    document.getElementById("fourth").classList.add("hidden");
    document.getElementById("fifth").classList.add("hidden");
    document.getElementById("sixth").classList.add("hidden");
    document.getElementById("seventh").classList.add("hidden");
}
        
function showCulc(){
    whichBuilding = "culc";

    document.getElementById("buildingImage").src = "./Culc/culc.png";


    document.getElementById("ground").classList.add("hidden");

    document.getElementById("first").classList.remove("hidden");
    document.getElementById("second").classList.remove("hidden");
    document.getElementById("third").classList.remove("hidden");
    document.getElementById("fourth").classList.remove("hidden");
    document.getElementById("fifth").classList.remove("hidden");

    document.getElementById("sixth").classList.add("hidden");
    document.getElementById("seventh").classList.add("hidden");



}
function showPrice(){
    whichBuilding = "price";
    document.getElementById("buildingImage").src = "./Price/price.png";

    document.getElementById("ground").classList.remove("hidden");
    document.getElementById("first").classList.remove("hidden");
    document.getElementById("second").classList.remove("hidden");
    document.getElementById("third").classList.remove("hidden");
    document.getElementById("fourth").classList.remove("hidden");

    document.getElementById("fifth").classList.add("hidden");
    document.getElementById("sixth").classList.add("hidden");
    document.getElementById("seventh").classList.add("hidden");

}
function showCrossland(){
    whichBuilding = "crossland";
    document.getElementById("buildingImage").src = "./Crossland/crossland.png";

    document.getElementById("ground").classList.remove("hidden");
    document.getElementById("first").classList.remove("hidden");
    document.getElementById("second").classList.remove("hidden");
    document.getElementById("third").classList.remove("hidden");
    document.getElementById("fourth").classList.remove("hidden");
    document.getElementById("fifth").classList.remove("hidden");
    document.getElementById("sixth").classList.remove("hidden");
    document.getElementById("seventh").classList.remove("hidden");

}

function handleGround(){
    if (whichBuilding=="crossland"){
        populateOccupancy("chi","room");
        document.getElementById("buildingImage").src = crosslandImages[0];

    }
    else if (whichBuilding == "price"){
        populateOccupancy("price",0);

        document.getElementById("buildingImage").src = priceImages[0];

    }
 
}

function handleFirst(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",1);

        document.getElementById("buildingImage").src = crosslandImages[1];

    }
    else if (whichBuilding == "price"){
        populateOccupancy("price",1);
        document.getElementById("buildingImage").src = priceImages[1];

    }
    else if (whichBuilding == "culc"){
        populateOccupancy("culc",0);
        document.getElementById("buildingImage").src = culcImages[0];

    }
 
}

function handleSecond(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",2);
        document.getElementById("buildingImage").src = crosslandImages[2];

    }
    else if (whichBuilding == "price"){
        populateOccupancy("price",1);
        document.getElementById("buildingImage").src = priceImages[1];

    }
    else if (whichBuilding == "culc"){
        populateOccupancy("culc",1);
        document.getElementById("buildingImage").src = culcImages[1];

    }
 
}
function handleThird(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",3);
        document.getElementById("buildingImage").src = crosslandImages[3];

    }
    else if (whichBuilding == "price"){
        populateOccupancy("price",2);
        document.getElementById("buildingImage").src = priceImages[2];

    }
    else if (whichBuilding == "culc"){
        populateOccupancy("culc",2);
        document.getElementById("buildingImage").src = culcImages[2];

    }
 
}
function handleFourth(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",4);
        document.getElementById("buildingImage").src = crosslandImages[4];

    }
    else if (whichBuilding == "price"){
        populateOccupancy("price",2);
        document.getElementById("buildingImage").src = priceImages[2];

    }
    else if (whichBuilding == "culc"){
        populateOccupancy("culc",3);
        document.getElementById("buildingImage").src = culcImages[3];

    }
 
}
function handleFifth(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",5);
        document.getElementById("buildingImage").src = crosslandImages[5];

    }
    else if (whichBuilding == "culc"){
        populateOccupancy("culc",4);
        document.getElementById("buildingImage").src = culcImages[4];

    }

 
}
function handleSixth(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",6);
        document.getElementById("buildingImage").src = crosslandImages[6];

    }

 
}
function handleSeventh(){
    if (whichBuilding=="crossland"){
        populateOccupancy("crossland",7);
        document.getElementById("buildingImage").src = crosslandImages[7];

    }

 
}