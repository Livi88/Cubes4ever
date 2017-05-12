'use strict'
var cofeeDatabase = $.getJSON('https://gist.githubusercontent.com/vanhelzing/1262fade5b44c1f65fb94e3d8bbe49b0/raw/1ff18545b238ca94c04d456a45b35e5866cf82cb/kavek_v4.json')

function KVKeszlet(){
    var objTBody = document.querySelector('TBody');
    objTBody.innerHTML = '';
    var objTRow;
    var objTData;
  
    for(var k in cofeeDatabase.responseJSON){
     document.getElementById('coffetable').innerHTML=''; 
    }
        for(var rowIndex=0; rowIndex<cofeeDatabase.responseJSON.length; rowIndex++){
            objTRow = document.createElement('TR');
                for(var columnIndex=0;columnIndex < 1; columnIndex++){
                    objTData = document.createElement('TD');
                    objTData.innerHTML = cofeeDatabase.responseJSON[k].neve;
                    objTRow.appendChild(objTData);
                }
                objTBody.appendChild(objTRow);
        }
}
function kaveKeresesBTN(){
    document.querySelector('#menudiv').style.display = "block";
    document.querySelector('#kereso').style.display = "block";
    document.querySelector('#lista').style.display = "none";
}

function kaveKeszletBTN(){
    document.querySelector('#menudiv').style.display = "block";
    document.querySelector('#kereso').style.display = "none";
    document.querySelector('#lista').style.display = "block";
}