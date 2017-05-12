'use strict'
var cofeeDatabase = $.getJSON('https://gist.githubusercontent.com/vanhelzing/1262fade5b44c1f65fb94e3d8bbe49b0/raw/1ff18545b238ca94c04d456a45b35e5866cf82cb/kavek_v4.json')

var cnt = 0;

function Tablazat() {
    var myTableDiv = document.getElementById("idejonATablazat");
    myTableDiv.innerHTML = "";
    var table = document.createElement('TABLE');
    var tableHead = document.createElement('THEAD');
    table.setAttribute('id', 'kukacka');
    table.border = '1'
    table.appendChild(tableHead);
    var fejlec = ["Kávé fajták", "Származási ország", "Kávé erősség", "Kávé ára (100g)", "Egységár", "Készlet"];
    var tr = document.createElement('TR');
    tableHead.appendChild(tr);
    for (var i = 0; i < (fejlec.length) - 2; i++) {
        var th = document.createElement('TH');
        th.setAttribute("id", "thelem" + i);
        th.width = '100';
        th.appendChild(document.createTextNode(fejlec[i]));
        tr.appendChild(th);

    }
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    myTableDiv.appendChild(table);

    var thElem = document.getElementById("thelem3");
    thElem.onclick = CsokkNovValtasArak;


    var thElem2 = document.getElementById("thelem0");
    thElem2.onclick = CsokkNovValtasNev;

    var thElem3 = document.getElementById("thelem1");
    thElem3.onclick = CsokkNovValtasOrszag;

    var thElem4 = document.getElementById("thelem2")
    thElem4.onclick = CsokkNovValtasErosseg;

    /* var thTomb = document.querySelectorAll("th");
     console.log("ezt keresem " + thTomb[1]);*/
}

function TBodyFeltoltoFg(table, megjelenitendoKavekTombje) {
    var tableBody = table.querySelector('TBODY');
    tableBody.innerHTML = '';
    for (var i = 0; i < megjelenitendoKavekTombje.length; i++) {
        var tr = document.createElement('TR');
        for (var k in megjelenitendoKavekTombje[i]) {
            if (k == "keszleten") {} else {
                var td = document.createElement('TD')
                td.width = '100';
                td.appendChild(document.createTextNode(megjelenitendoKavekTombje[i][k]));
                tr.appendChild(td);
            }
        }
        tableBody.appendChild(tr);
    }
}

function AltalanosRendezoFx(miAlapjanKellRendezni, rendezesIranya) {
    for (var i = 0; i < cofeeDatabase.responseJSON.length - 1; i++) {
        for (var j = i + 1; j < cofeeDatabase.responseJSON.length; j++) {
            if (rendezesIranya == 'Ascending') {
                if (cofeeDatabase.responseJSON[i][miAlapjanKellRendezni] > cofeeDatabase.responseJSON[j][miAlapjanKellRendezni]) {
                    var temp = [cofeeDatabase.responseJSON[i], cofeeDatabase.responseJSON[j]];
                    cofeeDatabase.responseJSON[i] = temp[1];
                    cofeeDatabase.responseJSON[j] = temp[0];
                }
                //kavefajtak.sort(function(c, d){return c.miAlapjanKellRendezni - d.miAlapjanKellRendezni});
            } else {
                if (cofeeDatabase.responseJSON[i][miAlapjanKellRendezni] < cofeeDatabase.responseJSON[j][miAlapjanKellRendezni]) {
                    var temp = [cofeeDatabase.responseJSON[i], cofeeDatabase.responseJSON[j]];
                    cofeeDatabase.responseJSON[i] = temp[1];
                    cofeeDatabase.responseJSON[j] = temp[0];
                }
                // kavefajtak.sort(function(c, d){return d.miAlapjanKellRendezni - c.miAlapjanKellRendezni});
            }
        }
    }
}

function RendezesErossegSzerintCsokk() {
    AltalanosRendezoFx("erosseg", "Ascending");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function RendezesErossegSzerintNov() {
    AltalanosRendezoFx("erosseg", "");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function RendezesOrszagSzerintCsokk() {
    AltalanosRendezoFx("szarmazasiorszag", "Ascending");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function RendezesOrszagSzerintNov() {
    AltalanosRendezoFx("szarmazasiorszag", "");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function RendezesArakSzerintNov() {

    // kavefajtak.sort(function(a, b){return a.fogyAr - b.fogyAr});
    AltalanosRendezoFx("ara", "");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function RendezesArakSzerintCsokk() {

    // kavefajtak.sort(function(a, b){return b.fogyAr - a.fogyAr});
    AltalanosRendezoFx("ara", "Ascending");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function KaveNeveSzerintNov() {

    AltalanosRendezoFx("neve", "");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function KaveNeveSzerintCsokk() {

    AltalanosRendezoFx("neve", "Ascending");
    TBodyFeltoltoFg(document.getElementById('kukacka'), cofeeDatabase.responseJSON);
}

function CsokkNovValtasArak() {
    cnt++;
    console.log(cnt);
    if (cnt % 2 == 1) {
        RendezesArakSzerintNov();
    } else if (cnt % 2 == 0) {
        RendezesArakSzerintCsokk();
    }
}

function CsokkNovValtasNev() {
    cnt++;
    console.log(cnt);
    if (cnt % 2 == 1) {
        KaveNeveSzerintNov();
    } else if (cnt % 2 == 0) {
        KaveNeveSzerintCsokk();
    }
}

function CsokkNovValtasOrszag() {
    cnt++;
    console.log(cnt);
    if (cnt % 2 == 1) {
        RendezesOrszagSzerintNov();
    } else if (cnt % 2 == 0) {
        RendezesOrszagSzerintCsokk();
    }
}

function CsokkNovValtasErosseg() {
    cnt++;
    console.log(cnt);
    if (cnt % 2 == 1) {
        RendezesErossegSzerintNov();
    } else if (cnt % 2 == 0) {
        RendezesErossegSzerintCsokk();
    }
}

function Megjelenes() {

    document.getElementById("elsoGomb").className = "";
    //document.getElementById("masodikGomb").className = "lathatatlan";
    Tablazat();

}
