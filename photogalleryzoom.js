
"use strict";

var picturesArray = window.opener.picturesOrder;
var selectedPictures = picturesArray[2];
var figName = "images/IMG_0" + selectedPictures + ".jpg";

function pageSetup() {
    document.getElementsByTagName("img")[0].src = figName; 
    createEventListener();
}

function closeWin() {
    window.close();
}

function addFavoritePicture() {
    var arrangement = 5; 
   
    for (var i = 0; i < window.opener.picturesFavorites.length; i++) {
        
        if (window.opener.picturesFavorites[i] === 0) {
            arrangement = i;
           
            break;
        }
    }
    if (arrangement > 4) {
        alert("Please remove one favorite first. Only five are allowed.")
    }
    else {
        window.opener.picturesFavorites[arrangement] = selectedPictures;
        window.opener.document.getElementsByName("favorites")[i].src = "images/IMG_0" + selectedPictures + "sm.jpg";
        alert("Picture added to favorites successfully !");
    }
}

function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var addFavoritesDiv = document.getElementsByTagName("p")[1];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
        addFavoritesDiv.addEventListener("click", addFavoritePicture, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
        addFavoritesDiv.attachEvent("onclick", addFavoritePicture);
    }
}

window.onload = pageSetup;