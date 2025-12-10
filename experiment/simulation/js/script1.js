
let target_dict, new_instance_male, new_instance_female;
let forpositive = 0
let fornegative = 0
let total;
let total_Sunny = 0
let total_Overcast = 0
let total_Rain = 0
let total_Hot = 0
let total_Mild = 0
let total_Cool = 0
let total_High = 0
let total_Normal = 0
let total_Weak = 0
let total_Strong = 0
let for_sunny_positive = 0
let for_sunny_negative = 0
let for_Overcast_positive = 0
let for_Overcast_negative = 0
let for_rain_positive = 0
let for_rain_negative = 0
let for_hot_positive = 0
let for_hot_negative = 0
let for_mild_positive = 0
let for_mild_negative = 0
let for_cool_positive = 0
let for_cool_negative = 0
let for_high_positive = 0
let for_high_negative = 0
let for_normal_positive = 0
let for_normal_negative = 0
let for_weak_positive = 0
let for_weak_negative = 0
let for_strong_positive = 0
let for_strong_negative = 0
var serializedData = localStorage.getItem('objectToPass'); // Retrieve the serialized table data from localStorage
var tableData = JSON.parse(serializedData);
var table = document.getElementById('dataPointsTable');


let countin = 1
let likelihood = [0, 0, 0, 0, 0, 0]
let thficount = 0;
let tyre = 0;
let uncheck1 = document.getElementById("one")
let uncheck2 = document.getElementById("two")
let uncheck3 = document.getElementById("three")

let uncheck5 = document.getElementById("five")
let uncheck6 = document.getElementById("six")

// Reconstruct the table by iterating through the tableData array

function alerts(icon, text, title) {
    Swal.fire({
        icon: icon,
        html: text,
        title: title,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
}

function alerts2(icon, text, title) {
    Swal.fire({
        icon: icon,
        html: text,
        title: title,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            tosubmitadd();
        }
    });
}

total = tableData.length;
console.log(total)

var t1 = document.getElementsByClassName('totals')

for (var j = 0; j < t1.length; j++) {
    t1[j].innerHTML = total;

}

var t2 = document.getElementsByClassName('totalsIG')

for (var j = 0; j < t2.length; j++) {
    t2[j].innerHTML = total;

}

for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    if (rowData[5] == "Yes") {
        var row = table.insertRow(1);
        row.classList.add("tocheck")
        forpositive = forpositive + 1
    }
    else {
        var row = table.insertRow(-1);
        row.classList.add("tocheck")
        fornegative = fornegative + 1
    }
    // Iterate through each property of the row data object
    row[0] = i

    for (var columnName in rowData) {
        var cell = row.insertCell();

        cell.textContent = rowData[columnName];
        console.log(cell.textContent)
    }

}

var rl = document.getElementsByClassName('tocheck');
for (let i = 0; i < rl.length; i++) {
    rl[i].cells[0].innerHTML = i + 1
}



//total
for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    if (rowData[1] == "Sunny") {
        total_Sunny++;
        if (rowData[5] == "Yes") {
            for_sunny_positive = for_sunny_positive + 1;
        }
        else if (rowData[5] == "No") {
            for_sunny_negative = for_sunny_negative + 1;
        }
    }

    else if (rowData[1] == "Overcast") {
        {
            total_Overcast++;
            if (rowData[5] == "Yes") {
                for_Overcast_positive = for_Overcast_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_Overcast_negative = for_Overcast_negative + 1;
            }
        }
    }
    else if (rowData[1] == "Rain") {
        {
            total_Rain++;
            if (rowData[5] == "Yes") {
                for_rain_positive = for_rain_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_rain_negative = for_rain_negative + 1;
            }
        }
    }

}

//total temp attributes
for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    if (rowData[2] == "Hot") {
        total_Hot++;
        if (rowData[5] == "Yes") {
            for_hot_positive = for_hot_positive + 1;
        }
        else if (rowData[5] == "No") {
            for_hot_negative = for_hot_negative + 1;
        }
    }

    else if (rowData[2] == "Mild") {
        {
            total_Mild++;
            if (rowData[5] == "Yes") {
                for_mild_positive = for_mild_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_mild_negative = for_mild_negative + 1;
            }
        }
    }
    else if (rowData[2] == "Cool") {
        {
            total_Cool++;
            if (rowData[5] == "Yes") {
                for_cool_positive = for_cool_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_cool_negative = for_cool_negative + 1;
            }
        }
    }

}

//total humd attributes
for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    if (rowData[3] == "High") {
        total_High++;
        if (rowData[5] == "Yes") {
            for_high_positive = for_high_positive + 1;
        }
        else if (rowData[5] == "No") {
            for_high_negative = for_high_negative + 1;
        }
    }

    else if (rowData[3] == "Normal") {
        {
            total_Normal++;
            if (rowData[5] == "Yes") {
                for_normal_positive = for_normal_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_normal_negative = for_normal_negative + 1;
            }
        }
    }
}


//total wind attributes
for (var i = 0; i < tableData.length; i++) {
    var rowData = tableData[i];
    if (rowData[4] == "Weak") {
        total_Weak++;
        if (rowData[5] == "Yes") {
            for_weak_positive = for_weak_positive + 1;
        }
        else if (rowData[5] == "No") {
            for_weak_negative = for_weak_negative + 1;
        }
    }

    else if (rowData[4] == "Strong") {
        {
            total_Strong++;
            if (rowData[5] == "Yes") {
                for_strong_positive = for_strong_positive + 1;
            }
            else if (rowData[5] == "No") {
                for_strong_negative = for_strong_negative + 1;
            }
        }
    }
}

function copytable(a, b) {
    var source = document.getElementById(a);
    var destination = document.getElementById(b);
    var copy = source.cloneNode(true);
    copy.setAttribute('id', b);
    destination.parentNode.replaceChild(copy, destination);
    document.getElementById(b).style.display = "none"
}

copytable('dataPointsTable', 'copiedTable');

//second table rows created
function secondtableCreated() {
    var sTable = document.getElementById("secondtable")
    var sRows = sTable.rows;

    var outSpan = document.getElementById("outid");
    var tempSpan = document.getElementById("tempid");
    var humdSpan = document.getElementById("humdid");
    var windSpan = document.getElementById("windid");
    var rowi = 1;

    if ((total_Sunny == 0 && total_Overcast == 0) || (total_Overcast == 0 && total_Rain == 0) || (total_Rain == 0 && total_Sunny == 0)) {

        if (total_Sunny == 0 && total_Overcast == 0) {
            var cellt = sRows[1].insertCell(1);
            cellt.innerHTML = "RAIN"
            var tr = sRows[1].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Overcast == 0 && total_Rain == 0) {
            var cellt = sRows[1].insertCell(1);
            cellt.innerHTML = "SUNNY"
            var tr = sRows[1].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Rain == 0 && total_Sunny == 0) {
            var cellt = sRows[1].insertCell(1);
            cellt.innerHTML = "OVERCAST"
            var tr = sRows[1].insertCell(2)
            tr.classList.add("entropyid")
        }
        rowi++;
    }
    else if (total_Sunny == 0 || total_Overcast == 0 || total_Rain == 0) {
        outSpan.rowSpan = 2;
        if (total_Sunny == 0) {
            for (rowi = 1; rowi < 3; rowi++) {
                if (rowi == 1) {

                    var cellt = sRows[1].insertCell(1);
                    cellt.innerHTML = "OVERCAST"
                    var tr = sRows[1].insertCell(2)
                    tr.classList.add("entropyid")
                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "RAIN"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }

        }
        else if (total_Overcast == 0) {
            for (rowi = 1; rowi < 3; rowi++) {
                if (rowi == 1) {
                    var cellt = sRows[1].insertCell(1);
                    cellt.innerHTML = "SUNNY"
                    var tr = sRows[1].insertCell(2)
                    tr.classList.add("entropyid")
                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "RAIN"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }
        }
        else if (total_Rain == 0) {
            for (rowi = 1; rowi < 3; rowi++) {
                if (rowi == 1) {
                    var cellt = sRows[1].insertCell(1);
                    cellt.innerHTML = "SUNNY"
                    var tr = sRows[1].insertCell(2)
                    tr.classList.add("entropyid")

                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "OVERCAST"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }
        }
    }
    else if (total_Sunny != 0 && total_Overcast != 0 && total_Rain != 0) {
        outSpan.rowSpan = 3;
        for (rowi = 1; rowi < 4; rowi++) {
            if (rowi == 1) {

                var cellt = sRows[1].insertCell(1);
                cellt.innerHTML = "SUNNY"
                var tr = sRows[1].insertCell(2)
                tr.classList.add("entropyid")
            }
            else if (rowi == 2) {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "OVERCAST"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }
            else {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "RAIN"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }

        }
    }


    if ((total_Hot == 0 && total_Mild == 0) || (total_Mild == 0 && total_Cool == 0) || (total_Cool == 0 && total_Hot == 0)) {

        if (total_Hot == 0 && total_Mild == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "COOL"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Mild == 0 && total_Cool == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "HOT"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Cool == 0 && total_Hot == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "MILD"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        rowi++;
    }
    else if (total_Hot == 0 || total_Mild == 0 || total_Cool == 0) {
        tempSpan.rowSpan = 2;
        var x = rowi + 2;
        if (total_Hot == 0) {
            var countss = 0;
            for (rowi; rowi < x; rowi++) {
                countss++;
                if (countss == 1) {

                    var cellt = sRows[rowi].insertCell(1);
                    cellt.innerHTML = "MILD"
                    var tr = sRows[rowi].insertCell(2)
                    tr.classList.add("entropyid")
                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "COOL"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }

        }
        else if (total_Mild == 0) {
            var countss = 0;
            for (rowi; rowi < x; rowi++) {
                countss++;
                if (countss == 1) {
                    var cellt = sRows[rowi].insertCell(1);
                    cellt.innerHTML = "HOT"
                    var tr = sRows[rowi].insertCell(2)
                    tr.classList.add("entropyid")
                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "COOL"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }
        }
        else if (total_Cool == 0) {
            var countss = 0;
            for (rowi; rowi < x; rowi++) {
                ++countss;
                if (countss == 1) {
                    var cellt = sRows[rowi].insertCell(1);
                    cellt.innerHTML = "HOT"
                    var tr = sRows[rowi].insertCell(2)
                    tr.classList.add("entropyid")

                }
                else {
                    var rowt = sTable.insertRow(rowi);
                    var cellt = rowt.insertCell(0);
                    cellt.innerHTML = "MILD"
                    var tr = rowt.insertCell(1)
                    tr.classList.add("entropyid")
                }

            }
        }
    }
    else if (total_Hot != 0 && total_Mild != 0 && total_Cool != 0) {
        tempSpan.rowSpan = 3;
        var x = rowi + 3;
        var countss = 0;
        for (rowi; rowi < x; rowi++) {
            countss++;
            if (countss == 1) {

                var cellt = sRows[rowi].insertCell(1);
                cellt.innerHTML = "HOT"
                var tr = sRows[rowi].insertCell(2)
                tr.classList.add("entropyid")
            }
            else if (countss == 2) {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "MILD"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }
            else {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "COOL"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }

        }
    }

    if (total_High == 0 || total_Normal == 0) {

        if (total_Hot == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "NORMAL"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Normal == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "HIGH"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        rowi++;
    }
    else if (total_High != 0 && total_Normal != 0) {
        humdSpan.rowSpan = 2;
        var x = rowi + 2;
        var countss = 0;
        for (rowi; rowi < x; rowi++) {
            countss++;
            if (countss == 1) {

                var cellt = sRows[rowi].insertCell(1);
                cellt.innerHTML = "HIGH"
                var tr = sRows[rowi].insertCell(2)
                tr.classList.add("entropyid")
            }
            else {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "NORMAL"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }

        }
    }

    if (total_Weak == 0 || total_Strong == 0) {

        if (total_Weak == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "STRONG"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        else if (total_Strong == 0) {
            var cellt = sRows[rowi].insertCell(1);
            cellt.innerHTML = "WEAK"
            var tr = sRows[rowi].insertCell(2)
            tr.classList.add("entropyid")
        }
        rowi++;
    }
    else if (total_Weak != 0 && total_Strong != 0) {
        windSpan.rowSpan = 2;
        var x = rowi + 2;
        var countss = 0;
        for (rowi; rowi < x; rowi++) {
            countss++;
            if (countss == 1) {

                var cellt = sRows[rowi].insertCell(1);
                cellt.innerHTML = "WEAK"
                var tr = sRows[rowi].insertCell(2)
                tr.classList.add("entropyid")
            }
            else {
                var rowt = sTable.insertRow(rowi);
                var cellt = rowt.insertCell(0);
                cellt.innerHTML = "STRONG"
                var tr = rowt.insertCell(1)
                tr.classList.add("entropyid")
            }

        }
    }

}


//totalvalueTable created
function totalValueTableCreated() {
    var tTable = document.getElementById("totalValueTable")
    var tRows = tTable.rows;

    var out2Span = document.getElementById("outid2");
    var temp2Span = document.getElementById("tempid2");
    var humd2Span = document.getElementById("humdid2");
    var wind2Span = document.getElementById("windid2");
    var row2i = 1;

    if ((total_Sunny == 0 && total_Overcast == 0) || (total_Overcast == 0 && total_Rain == 0) || (total_Rain == 0 && total_Sunny == 0)) {

        if (total_Sunny == 0 && total_Overcast == 0) {
            tRows[1].insertCell(1).innerHTML = "RAIN"
            tRows[1].insertCell(2).innerHTML = total_Rain;

        }
        else if (total_Overcast == 0 && total_Rain == 0) {
            tRows[1].insertCell(1).innerHTML = "SUNNY"
            tRows[1].insertCell(2).innerHTML = total_Sunny;
        }
        else if (total_Rain == 0 && total_Sunny == 0) {
            tRows[1].insertCell(1).innerHTML = "OVERCAST"
            tRows[1].insertCell(2).innerHTML = total_Overcast;
        }
        row2i++;
    }
    else if (total_Sunny == 0 || total_Overcast == 0 || total_Rain == 0) {
        out2Span.rowSpan = 2;
        if (total_Sunny == 0) {
            for (row2i = 1; row2i < 3; row2i++) {
                if (row2i == 1) {

                    tRows[1].insertCell(1).innerHTML = "OVERCAST"
                    tRows[1].insertCell(2).innerHTML = total_Overcast;
                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "RAIN";
                    rowt.insertCell(1).innerHTML = total_Rain;
                }

            }

        }
        else if (total_Overcast == 0) {
            for (row2i = 1; row2i < 3; row2i++) {
                if (row2i == 1) {
                    tRows[1].insertCell(1).innerHTML = "SUNNY";
                    tRows[1].insertCell(2).innerHTML = total_Sunny;
                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "RAIN"
                    rowt.insertCell(1).innerHTML = total_Rain;
                }

            }
        }
        else if (total_Rain == 0) {
            for (row2i = 1; row2i < 3; row2i++) {
                if (row2i == 1) {
                    tRows[1].insertCell(1).innerHTML = "SUNNY"
                    tRows[1].insertCell(2).innerHTML = total_Sunny;
                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "OVERCAST"
                    rowt.insertCell(1).innerHTML = total_Overcast;
                }

            }
        }
    }
    else if (total_Sunny != 0 && total_Overcast != 0 && total_Rain != 0) {
        out2Span.rowSpan = 3;
        for (row2i = 1; row2i < 4; row2i++) {
            if (row2i == 1) {
                tRows[1].insertCell(1).innerHTML = "SUNNY"
                tRows[1].insertCell(2).innerHTML = total_Sunny;
            }
            else if (row2i == 2) {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "OVERCAST"
                rowt.insertCell(1).innerHTML = total_Overcast;
            }
            else {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "RAIN"
                rowt.insertCell(1).innerHTML = total_Rain;
            }

        }
    }


    if ((total_Hot == 0 && total_Mild == 0) || (total_Mild == 0 && total_Cool == 0) || (total_Cool == 0 && total_Hot == 0)) {

        if (total_Hot == 0 && total_Mild == 0) {
            tRows[row2i].insertCell(1).innerHTML = "COOL"
            tRows[row2i].insertCell(2).innerHTML = total_Cool;
        }
        else if (total_Mild == 0 && total_Cool == 0) {
            tRows[row2i].insertCell(1).innerHTML = "HOT"
            tRows[row2i].insertCell(2).innerHTML = total_Hot;
        }
        else if (total_Cool == 0 && total_Hot == 0) {
            tRows[row2i].insertCell(1).innerHTML = "MILD"
            tRows[row2i].insertCell(2).innerHTML = total_Mild;
        }
        row2i++;
    }
    else if (total_Hot == 0 || total_Mild == 0 || total_Cool == 0) {
        temp2Span.rowSpan = 2;
        var x = row2i + 2;
        if (total_Hot == 0) {
            var countss = 0;
            for (row2i; row2i < x; row2i++) {
                countss++;
                if (countss == 1) {
                    tRows[row2i].insertCell(1).innerHTML = "MILD"
                    tRows[row2i].insertCell(2).innerHTML = total_Mild;
                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "COOL"
                    rowt.insertCell(1).innerHTML = total_Cool;
                }

            }

        }
        else if (total_Mild == 0) {
            var countss = 0;
            for (row2i; row2i < x; row2i++) {
                countss++;
                if (countss == 1) {
                    tRows[row2i].insertCell(1).innerHTML = "HOT"
                    tRows[row2i].insertCell(2).innerHTML = total_Hot;
                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "COOL"
                    rowt.insertCell(1).innerHTML = total_Cool;
                }

            }
        }
        else if (total_Cool == 0) {
            var countss = 0;
            for (row2i; row2i < x; row2i++) {
                ++countss;
                if (countss == 1) {
                    tRows[row2i].insertCell(1).innerHTML = "HOT"
                    tRows[row2i].insertCell(2).innerHTML = total_Hot;

                }
                else {
                    var rowt = tTable.insertRow(row2i);
                    rowt.insertCell(0).innerHTML = "MILD"
                    rowt.insertCell(1).innerHTML = total_Mild;
                }

            }
        }
    }
    else if (total_Hot != 0 && total_Mild != 0 && total_Cool != 0) {
        temp2Span.rowSpan = 3;
        var x = row2i + 3;
        var countss = 0;
        for (row2i; row2i < x; row2i++) {
            countss++;
            if (countss == 1) {

                tRows[row2i].insertCell(1).innerHTML = "HOT"
                tRows[row2i].insertCell(2).innerHTML = total_Hot;
            }
            else if (countss == 2) {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "MILD"
                rowt.insertCell(1).innerHTML = total_Mild;

            }
            else {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "COOL"
                rowt.insertCell(1).innerHTML = total_Cool;
            }

        }
    }

    if (total_High == 0 || total_Normal == 0) {

        if (total_Hot == 0) {
            tRows[row2i].insertCell(1).innerHTML = "NORMAL"
            tRows[row2i].insertCell(2).innerHTML = total_Normal;
        }
        else if (total_Normal == 0) {
            tRows[row2i].insertCell(1).innerHTML = "HIGH"
            tRows[row2i].insertCell(2).innerHTML = total_High;
        }
        row2i++;
    }
    else if (total_High != 0 && total_Normal != 0) {
        humd2Span.rowSpan = 2;
        var x = row2i + 2;
        var countss = 0;
        for (row2i; row2i < x; row2i++) {
            countss++;
            if (countss == 1) {

                tRows[row2i].insertCell(1).innerHTML = "HIGH"
                tRows[row2i].insertCell(2).innerHTML = total_High;
            }
            else {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "NORMAL"
                rowt.insertCell(1).innerHTML = total_Normal;
            }

        }
    }

    if (total_Weak == 0 || total_Strong == 0) {

        if (total_Weak == 0) {
            tRows[row2i].insertCell(1).innerHTML = "STRONG"
            tRows[row2i].insertCell(2).innerHTML = total_Strong;
        }
        else if (total_Strong == 0) {
            tRows[row2i].insertCell(1).innerHTML = "WEAK"
            tRows[row2i].insertCell(2).innerHTML = total_Weak;
        }
        row2i++;
    }
    else if (total_Weak != 0 && total_Strong != 0) {
        wind2Span.rowSpan = 2;
        var x = row2i + 2;
        var countss = 0;
        for (row2i; row2i < x; row2i++) {
            countss++;
            if (countss == 1) {

                tRows[row2i].insertCell(1).innerHTML = "WEAK"
                tRows[row2i].insertCell(2).innerHTML = total_Weak;
            }
            else {
                var rowt = tTable.insertRow(row2i);
                rowt.insertCell(0).innerHTML = "STRONG"
                rowt.insertCell(1).innerHTML = total_Strong;
            }

        }
    }
}


secondtableCreated();
totalValueTableCreated();

alerts('info', `The target 'PLAY TENNIS' has <b style="color:#0070C0">${forpositive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${fornegative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the dataset i.e. H(D)')


let addlike = 0;
let countsubval = 0;


function checkMissing(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13) {
    let countyn = 0;
    let c = ''
    let e = ''
    if (isNaN(temp_p1) == true) {
        c = c + "YES "
        temp_1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_1.style.border = ""
    }
    if (isNaN(temp_p2) == true) {
        c = c + "YES "
        temp_3.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_3.style.border = ""
    }

    if (isNaN(temp_n1) == true) {
        c = c + "NO "
        temp_11.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_11.style.border = ''
    }
    if (isNaN(temp_n2) == true) {
        c = c + "NO "
        temp_13.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_13.style.border = ''
    }

    if (countyn < 4) {
        c = "Enter value in " + c + "field."
        e = "MISSING VALUE"
    }
    if (countyn == 4) {
        c = "Enter values in all the fields."
        e = "MISSING VALUES"
    }

    Swal.fire({
        icon: 'error',
        title: e,
        text: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
    return;
}

function checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, forpositive, fornegative) {
    let countyn = 0;
    let c = ''
    let g = ''
    if (temp_p1 != forpositive) {
        temp_1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_1.style.border = ""
    }
    if (temp_p2 != forpositive) {
        temp_3.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_3.style.border = ""
    }

    if (temp_n1 != fornegative) {
        temp_11.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_11.style.border = ""
    }
    if (temp_n2 != fornegative) {
        temp_13.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_13.style.border = ""
    }


    if (countyn < 4) {
        c = "The value entered in higlighted box is incorrect.<br>Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUE!!'
    }
    if (countyn == 4) {
        c = "All the entered values are incorrect.<br> Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUES!!'
    }

    Swal.fire({
        icon: 'error',
        title: g,
        html: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
    return;
}

function checkMissingIG1(temp_v12, temp_12, temp_E, temp_E1) {
    let countyn = 0;
    let e = ''
    let c = ''


    if (isNaN(temp_v12) == true) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }


    if (isNaN(temp_E) == true) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }
    if (countyn < 2) {
        c = "First, enter the value in the highlighted box, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUE!!"
    }
    if (countyn == 2) {
        c = "First, enter values in all the highlighted fields, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUES!!"
    }

    Swal.fire({
        icon: 'error',
        title: e,
        html: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
    return;
}

function checkMissingIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1) {
    let countyn = 0;
    let c = ''
    let e = ''



    if (isNaN(temp_v12) == true) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }


    if (isNaN(temp_v22) == true) {
        temp_22.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_22.style.border = ""
    }


    if (isNaN(temp_E) == true) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }
    if (countyn < 3) {
        c = "First, enter the value in the highlighted box, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUE!!"
    }
    if (countyn == 3) {
        c = "First, enter values in all the highlighted fields, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUES!!!"
    }

    Swal.fire({
        icon: 'error',
        title: e,
        text: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
    return;
}

function checkMissingIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1) {
    let countyn = 0;
    let e = ''
    let c = ''


    if (isNaN(temp_v12) == true) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }


    if (isNaN(temp_v22) == true) {
        temp_22.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_22.style.border = ""
    }



    if (isNaN(temp_v32) == true) {
        temp_32.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_32.style.border = ''
    }
    if (isNaN(temp_E) == true) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }
    if (countyn < 4) {
        c = "First, enter the value in the highlighted box, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUE!!"
    }
    if (countyn == 4) {
        c = "First, enter values in all the highlighted fields, and then click on the <b style='color:#00668c'>SUBMIT</b> button."
        e = "MISSING VALUES!!"
    }

    Swal.fire({
        icon: 'error',
        title: e,
        html: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
    return;
}

function checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, x) {
    let countyn = 0;
    let c = ''
    let g = ''

    if (temp_v12 != Number(x)) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }
    if (temp_E != Number(entropyValue)) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }

    if (countyn < 2) {
        c = 'The value entered in higlighted box is incorrect.<br>Please enter the correct values with the help of the tables provided on the left side.'
        g = 'INCORRECT VALUE!!'
    }
    if (countyn == 2) {
        c = 'All the entered values are incorrect.<br> Please enter the correct values with the help of the tables provided on the left side.'
        g = 'INCORRECT VALUES!!'
    }
    Swal.fire({
        icon: 'error',
        title: g,
        html: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
}

function checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, x, y) {
    let countyn = 0;
    let c = ''
    let g = ''

    if (temp_v12 != Number(x)) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }

    if (temp_v22 != Number(y)) {
        temp_22.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_22.style.border = ""
    }

    if (temp_E != Number(entropyValue)) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }

    if (countyn < 3) {
        c = "The value entered in higlighted box is incorrect.<br>Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUE!!'
    }
    if (countyn == 3) {
        c = "All the entered values are incorrect.<br> Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUES!!'
    }
    Swal.fire({
        icon: 'error',
        title: g,
        html: c,

        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
}

function checkInvalidIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1, entropyValue, x, y, z) {
    let countyn = 0;
    let c = ''
    let g = ''

    if (temp_v12 != Number(x)) {
        temp_12.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_12.style.border = ""
    }

    if (temp_v22 != Number(y)) {
        temp_22.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_22.style.border = ""
    }

    if (temp_v32 != Number(z)) {
        temp_32.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_32.style.border = ""
    }
    if (temp_E != Number(entropyValue)) {
        temp_E1.style.border = "2px solid red"
        countyn = countyn + 1
    }
    else {
        temp_E1.style.border = ""
    }

    if (countyn < 4) {
        c = "The value entered in higlighted box is incorrect.<br>Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUE!!'
    }
    if (countyn == 4) {
        c = "All the entered values are incorrect.<br> Please enter the correct values with the help of the tables provided on the left side."
        g = 'INCORRECT VALUES!!'
    }
    Swal.fire({
        icon: 'error',
        title: g,
        html: c,
        allowOutsideClick: false,
        target: '.container',
        customClass: {                      // <------ customClass is an object!
            container: "position-absolute",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
    });
}



function displaySunny(table1, rowCount, temp3) {
    if (for_sunny_positive == for_sunny_negative || for_sunny_positive == 0 || for_sunny_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_sunny_positive != 0 && for_sunny_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>sunny</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>sunny</i></sub>) = 1';
            html = `The attribute 'SUNNY' has <b style="color:#0070C0">${for_sunny_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_sunny_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>sunny</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>sunny</i></sub>) = 0';
            html = `The attribute 'SUNNY' has <b style="color:#0070C0">${for_sunny_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_sunny_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Overcast == 0 && total_Rain == 0 && total_Hot == 0 && total_Mild == 0) {
                    submitCount = submitCount + 4;
                    displayCool(table1, rowCount, temp3);
                }
                else if (total_Overcast == 0 && total_Rain == 0 && total_Hot == 0) {
                    submitCount = submitCount + 3;
                    displayMild(table1, rowCount, temp3);
                }

                else if (total_Overcast == 0 && total_Rain == 0) {
                    submitCount = submitCount + 2;
                    displayHot(table1, rowCount, temp3);
                }

                else if (total_Overcast == 0) {
                    submitCount++;
                    displayRain(table1, rowCount, temp3);
                }
                else {
                    displayOvercast(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')

        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Sunny;

        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">sunny</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[1].innerHTML;
            if (value == "Sunny") {
                table1.rows[i].cells[1].style.border = "2px solid #00668c";
            }
            alerts('info', `The attribute 'SUNNY' has <b style="color:#0070C0">${for_sunny_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_sunny_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Sunny attribute.')
        }
    }

}

function displayOvercast(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {

        table1.rows[i].cells[1].style.border = "";
    }
    if (for_Overcast_positive == for_Overcast_negative || for_Overcast_positive == 0 || for_Overcast_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_Overcast_positive != 0 && for_Overcast_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>overcast</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>overcast</i></sub>) = 1';
            html = `The attribute 'OVERCAST' has <b style="color:#0070C0">${for_Overcast_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_Overcast_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>overcast</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>overcast</i></sub>) = 0';
            html = `The attribute 'OVERCAST' has <b style="color:#0070C0">${for_Overcast_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_Overcast_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Rain == 0 && total_Hot == 0 && total_Mild == 0) {
                    submitCount = submitCount + 3;
                    displayCool(table1, rowCount, temp3);
                }
                else if (total_Rain == 0 && total_Hot == 0) {
                    submitCount = submitCount + 2;
                    displayMild(table1, rowCount, temp3);
                }
                else if (total_Rain == 0) {
                    submitCount = submitCount + 1;
                    displayHot(table1, rowCount, temp3);
                }
                else {
                    displayRain(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Overcast;
        }
        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">overcast</i></mn></msub><mi>)</mi> =</mrow>';


        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[1].innerHTML;
            if (value == "Overcast") {
                table1.rows[i].cells[1].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'OVERCAST' has <b style="color:#0070C0">${for_Overcast_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_Overcast_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Overcast attribute.')
    }

}

function displayRain(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {

        table1.rows[i].cells[1].style.border = "";
    }
    if (for_rain_positive == for_rain_negative || for_rain_positive == 0 || for_rain_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_rain_positive != 0 && for_rain_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>rain</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>rain</i></sub>) = 1';
            html = `The attribute 'RAIN' has <b style="color:#0070C0">${for_rain_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_rain_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>rain</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>rain</i></sub>) = 0';
            html = `The attribute 'RAIN' has <b style="color:#0070C0">${for_rain_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_rain_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Hot == 0 && total_Mild == 0) {
                    submitCount = submitCount + 2;
                    displayCool(table1, rowCount, temp3);
                }
                else if (total_Hot == 0) {
                    submitCount++;
                    displayMild(table1, rowCount, temp3);
                }
                else {
                    displayHot(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Rain;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">rain</i></mn></msub><mi>)</mi> =</mrow>';


        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[1].innerHTML;
            if (value == "Rain") {
                table1.rows[i].cells[1].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'RAIN' has <b style="color:#0070C0">${for_rain_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_rain_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Rain attribute.')
    }

}

function displayHot(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[1].style.border = "";
        table1.rows[i].cells[2].style.border = "";
    }
    if (for_hot_positive == for_hot_negative || for_hot_positive == 0 || for_hot_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_hot_positive != 0 && for_hot_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>hot</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>hot</i></sub>) = 1';
            html = `The attribute 'HOT' has <b style="color:#0070C0">${for_hot_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_hot_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>hot</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>hot</i></sub>) = 0';
            html = `The attribute 'HOT' has <b style="color:#0070C0">${for_hot_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_hot_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Mild == 0 && total_Cool == 0 && total_High == 0) {
                    submitCount = submitCount + 3;
                    displayNormal(table1, rowCount, temp3);
                }
                else if (total_Mild == 0 && total_Cool == 0) {
                    submitCount = submitCount + 2;
                    displayHigh(table1, rowCount, temp3);
                }
                else if (total_Mild == 0) {
                    submitCount++;
                    displayCool(table1, rowCount, temp3);
                }
                else {

                    displayMild(table1, rowCount, temp3);


                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Hot;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">hot</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[2].innerHTML;
            if (value == "Hot") {
                table1.rows[i].cells[2].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'HOT' has <b style="color:#0070C0">${for_hot_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_hot_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Hot attribute.')

    }

}

function displayMild(table1, rowCount, temp3) {

    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[1].style.border = "";
        table1.rows[i].cells[2].style.border = "";
    }

    if (for_mild_positive == for_mild_negative || for_mild_positive == 0 || for_mild_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_mild_positive != 0 && for_mild_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>mild</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>mild</i></sub>) = 1';
            html = `The attribute 'MILD' has <b style="color:#0070C0">${for_mild_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_mild_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>mild</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>mild</i></sub>) = 0';
            html = `The attribute 'MILD' has <b style="color:#0070C0">${for_mild_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_mild_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Cool == 0 && total_High == 0) {
                    submitCount = submitCount + 2;
                    displayNormal(table1, rowCount, temp3);
                }
                else if (total_Cool == 0) {
                    submitCount++;
                    displayHigh(table1, rowCount, temp3);
                }
                else {
                    displayCool(table1, rowCount, temp3);
                }
            }
        });
    }
    else {

        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Mild;
        }
        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[2].innerHTML;
            if (value == "Mild") {
                table1.rows[i].cells[2].style.border = "2px solid #00668c";
            }
        }
        document.getElementById('addind').style.display = "block";
        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">mild</i></mn></msub><mi>)</mi> =</mrow>';
        alerts('info', `The attribute 'MILD' has <b style="color:#0070C0">${for_mild_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_mild_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Mild attribute.')
    }



}

function displayCool(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[1].style.border = "";
        table1.rows[i].cells[2].style.border = "";
    }
    if (for_cool_positive == for_cool_negative || for_cool_positive == 0 || for_cool_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_cool_positive != 0 && for_cool_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>cool</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>cool</i></sub>) = 1';
            html = `The attribute 'COOL' has <b style="color:#0070C0">${for_cool_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_cool_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>cool</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>cool</i></sub>) = 0';
            html = `The attribute 'COOL' has <b style="color:#0070C0">${for_cool_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_cool_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_High == 0) {

                    submitCount++;
                    displayNormal(table1, rowCount, temp3);
                }
                else {
                    displayHigh(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Cool;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">cool</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[2].innerHTML;
            if (value == "Cool") {
                table1.rows[i].cells[2].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'COOL' has <b style="color:#0070C0">${for_cool_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_cool_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Cool attribute.')

    }

}

function displayHigh(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[2].style.border = "";
        table1.rows[i].cells[3].style.border = "";
    }
    if (for_high_positive == for_high_negative || for_high_positive == 0 || for_high_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_high_positive != 0 && for_high_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>high</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>high</i></sub>) = 1';
            html = `The attribute 'HIGH' has <b style="color:#0070C0">${for_high_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_high_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>high</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>high</i></sub>) = 0';
            html = `The attribute 'HIGH' has <b style="color:#0070C0">${for_high_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_high_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Normal == 0 && total_Weak == 0) {
                    submitCount = submitCount + 2;
                    displayStrong(table1, rowCount, temp3);
                }
                else if (total_Normal == 0) {
                    submitCount++;
                    displayWeak(table1, rowCount, temp3);
                }
                else {
                    displayNormal(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_High;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">high</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[3].innerHTML;
            if (value == "High") {
                table1.rows[i].cells[3].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'HIGH' has <b style="color:#0070C0">${for_high_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_high_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the High attribute.')

    }

}

function displayNormal(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[2].style.border = "";
        table1.rows[i].cells[3].style.border = "";
    }
    if (for_normal_positive == for_normal_negative || for_normal_positive == 0 || for_normal_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_normal_positive != 0 && for_normal_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>normal</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>normal</i></sub>) = 1';
            html = `The attribute 'NORMAL' has <b style="color:#0070C0">${for_normal_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_normal_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>normal</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>normal</i></sub>) = 0';
            html = `The attribute 'NORMAL' has <b style="color:#0070C0">${for_normal_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_normal_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Weak == 0) {
                    submitCount++;
                    displayStrong(table1, rowCount, temp3);
                }
                else {
                    displayWeak(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Normal;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">normal</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[3].innerHTML;
            if (value == "Normal") {
                table1.rows[i].cells[3].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'NORMAL' has <b style="color:#0070C0">${for_normal_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_normal_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Normal attribute.')

    }

}

function displayWeak(table1, rowCount, temp3) {

    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[3].style.border = "";
        table1.rows[i].cells[4].style.border = "";
    }
    if (for_weak_positive == for_weak_negative || for_weak_positive == 0 || for_weak_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_weak_positive != 0 && for_weak_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>weak</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>weak</i></sub>) = 1';
            html = `The attribute 'WEAK' has <b style="color:#0070C0">${for_weak_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_weak_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>weak</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>weak</i></sub>) = 0';
            html = `The attribute 'WEAK' has <b style="color:#0070C0">${for_weak_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_weak_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (total_Strong == 0) {
                    submitCount++;
                    document.getElementById("nexttotable").disabled = false
                    document.getElementById("submittotable").disabled = true
                    document.getElementById('addind').style.display = "none";
                    alerts('success', 'Click on the <b style="color:#0070C0">NEXT</b> button.');
                    document.getElementById('addind').style.display = "none";
                    for (var i = 1; i < rowCount; i++) {
                        table1.rows[i].cells[4].style.border = "";
                    }
                }
                else {
                    alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
                    displayStrong(table1, rowCount, temp3);
                }
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Weak;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">weak</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[4].innerHTML;
            if (value == "Weak") {
                table1.rows[i].cells[4].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'WEAK' has <b style="color:#0070C0">${for_weak_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_weak_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Weak attribute.')

    }

}

function displayStrong(table1, rowCount, temp3) {
    for (var i = 1; i < rowCount; i++) {
        table1.rows[i].cells[3].style.border = "";
        table1.rows[i].cells[4].style.border = "";
    }
    if (for_strong_positive == for_strong_negative || for_strong_positive == 0 || for_strong_negative == 0) {
        let td = document.getElementsByClassName("entropyid");
        if (for_strong_positive != 0 && for_strong_negative != 0) {
            td[Eindex].innerHTML = 1;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>strong</i></sub>) = ' + '</b>' + 1;
            title = 'H(D<sub><i>strong</i></sub>) = 1';
            html = `The attribute 'STRONG' has <b style="color:#0070C0">${for_strong_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_strong_negative}</b> as <b>NO</b>.<br>Since both values are equal, the entropy will be <b>1</b>.`
        }
        else {
            td[Eindex].innerHTML = 0;
            temp_result.innerHTML = '<b>' + 'H(D<sub><i>strong</i></sub>) = ' + '</b>' + 0;
            title = 'H(D<sub><i>strong</i></sub>) = 0';
            html = `The attribute 'STRONG' has <b style="color:#0070C0">${for_strong_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_strong_negative}</b> as <b>NO</b>.<br>Since one of the values is 0, the entropy will be <b>0</b>.`
        }
        Eindex++;
        submitCount++;

        Swal.fire({
            icon: 'info',
            html: html,
            title: title,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                alerts('success', 'Click on the <b style="color:#0070C0">NEXT</b> button.');
                submitCount++;
                document.getElementById('addind').style.display = "none";
                for (var i = 1; i < rowCount; i++) {
                    table1.rows[i].cells[4].style.border = "";
                }
                let temp5 = document.getElementById("nexttotable")
                temp5.disabled = false

                let temp6 = document.getElementById("submittotable")
                temp6.disabled = true
            }
        });
    }
    else {
        var t = document.getElementsByClassName('totals')
        for (var j = 0; j < t.length; j++) {
            t[j].innerHTML = total_Strong;
        }

        temp3.innerHTML = '<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">strong</i></mn></msub><mi>)</mi> =</mrow>';

        for (var i = 1; i < rowCount; i++) {
            var value = table1.rows[i].cells[4].innerHTML;
            if (value == "Strong") {
                table1.rows[i].cells[4].style.border = "2px solid #00668c";
            }
        }
        alerts('info', `The attribute 'STRONG' has <b style="color:#0070C0">${for_strong_positive}</b> instances as <b>YES</b> and <b style="color:#0070C0">${for_strong_negative}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy for the Strong attribute.')

    }

}



var submitCount = 0;
var entropyValue; var Eindex = 0; let temp_result = document.getElementById("result");
function tosubmitadd() {

    let table1 = document.getElementById('dataPointsTable');
    var rowCount = table.rows.length;

    let temp_p1 = parseInt(document.getElementById("pos1").value)
    let temp_p2 = parseInt(document.getElementById("pos2").value)


    let temp_1 = document.getElementById("pos1");
    let temp_3 = document.getElementById("pos2");

    let temp_n1 = parseInt(document.getElementById("neg1").value)
    let temp_n2 = parseInt(document.getElementById("neg2").value)

    let temp_11 = document.getElementById("neg1");
    let temp_13 = document.getElementById("neg2");

    let temp3 = document.getElementById("heading");


    //  let temp_result= document.getElementById("result");
    let td = document.getElementsByClassName("entropyid")


    if (isNaN(temp_p1) == false && isNaN(temp_p2) == false &&
        isNaN(temp_n1) == false && isNaN(temp_n2) == false) {
        //total
        if (submitCount == 0) {

            if (temp_p1 == forpositive && temp_p2 == forpositive && temp_n1 == fornegative && temp_n2 == fornegative) {


                let x = forpositive / total;
                let y = fornegative / total;

                if (forpositive == 0 || fornegative == 0) {
                    z = 0;
                }
                else if (forpositive == fornegative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                entropyValue = z;
                temp_result.innerHTML = '<b>' + 'H(D) = ' + '</b>' + z;


                document.getElementById('addind').style.display = "none";

            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, forpositive, fornegative);
                return;
            }

            document.getElementById('addind').style.display = "block";

            if (total_Sunny == 0 && total_Overcast == 0) {
                submitCount = submitCount + 2;

                displayRain(table1, rowCount, temp3);
            }

            else if (total_Sunny == 0) {
                submitCount++;
                displayOvercast(table1, rowCount, temp3);
            }

            else {
                displaySunny(table1, rowCount, temp3);
            }
            submitCount++;
            resetValue();
            return;
        }

        //sunny
        if (submitCount == 1) {
            if (temp_p1 == for_sunny_positive && temp_p2 == for_sunny_positive &&
                temp_n1 == for_sunny_negative && temp_n2 == for_sunny_negative
            ) {
                let x = for_sunny_positive / total_Sunny;
                let y = for_sunny_negative / total_Sunny;

                if (for_sunny_positive == 0 || for_sunny_negative == 0) {
                    z = 0;
                }
                else if (for_sunny_positive == for_sunny_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }

                td[Eindex].innerHTML = z;
                Eindex++;

                temp_result.innerHTML = '<b>' + 'H(D<sub><i>sunny</i></sub>) = ' + '</b>' + z;


            }

            //for incorrect values
            else {

                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_sunny_positive, for_sunny_negative)
                return;
            }


            document.getElementById('addind').style.display = "block";

            if (total_Overcast == 0 && total_Rain == 0 && total_Hot == 0 && total_Mild == 0) {
                submitCount = submitCount + 4;
                displayCool(table1, rowCount, temp3);
            }
            else if (total_Overcast == 0 && total_Rain == 0 && total_Hot == 0) {
                submitCount = submitCount + 3;
                displayMild(table1, rowCount, temp3);
            }

            else if (total_Overcast == 0 && total_Rain == 0) {
                submitCount = submitCount + 2;
                displayHot(table1, rowCount, temp3);
            }

            else if (total_Overcast == 0) {
                submitCount++;
                displayRain(table1, rowCount, temp3);
            }
            else {
                displayOvercast(table1, rowCount, temp3);
            }
            submitCount++;
            resetValue();
            return;
        }

        //overcast
        if (submitCount == 2) {

            if (temp_p1 == for_Overcast_positive && temp_p2 == for_Overcast_positive &&
                temp_n1 == for_Overcast_negative && temp_n2 == for_Overcast_negative) {
                let x = for_Overcast_positive / total_Overcast;
                let y = for_Overcast_negative / total_Overcast;

                if (for_Overcast_positive == 0 || for_Overcast_negative == 0) {
                    z = 0;
                }
                else if (for_Overcast_positive == for_Overcast_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }

                td[Eindex].innerHTML = z;
                Eindex++;

                temp_result.innerHTML = '<b>' + 'H(D<sub><i>overcast</i></sub>) = ' + '</b>' + z;



            }

            //for incorrect values
            else {

                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_Overcast_positive, for_Overcast_negative);
                return;
            }



            document.getElementById('addind').style.display = "block";
            if (total_Rain == 0 && total_Hot == 0 && total_Mild == 0) {
                submitCount = submitCount + 3;
                displayCool(table1, rowCount, temp3);
            }
            else if (total_Rain == 0 && total_Hot == 0) {
                submitCount = submitCount + 2;
                displayMild(table1, rowCount, temp3);
            }
            else if (total_Rain == 0) {
                submitCount = submitCount + 1;
                displayHot(table1, rowCount, temp3);
            }
            else {
                displayRain(table1, rowCount, temp3);
            }
            submitCount++;
            resetValue();
            return;
        }

        //rain
        if (submitCount == 3) {

            if (temp_p1 == for_rain_positive && temp_p2 == for_rain_positive &&
                temp_n1 == for_rain_negative && temp_n2 == for_rain_negative) {


                let x = for_rain_positive / total_Rain;
                let y = for_rain_negative / total_Rain;

                if (for_rain_positive == 0 || for_rain_negative == 0) {
                    z = 0;
                }
                else if (for_rain_positive == for_rain_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;

                temp_result.innerHTML = '<b>' + 'H(D<sub><i>rain</i></sub>) = ' + '</b>' + z;


                document.getElementById('addind').style.display = "none";

            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_rain_positive, for_rain_negative);
                return;
            }

            document.getElementById('addind').style.display = "block";

            if (total_Hot == 0 && total_Mild == 0) {
                submitCount = submitCount + 2;
                displayCool(table1, rowCount, temp3);
            }
            else if (total_Hot == 0) {
                submitCount++;
                displayMild(table1, rowCount, temp3);
            }
            else {
                displayHot(table1, rowCount, temp3);
            }
            submitCount++;
            resetValue();
            return;
        }

        //hot
        if (submitCount == 4) {

            if (temp_p1 == for_hot_positive && temp_p2 == for_hot_positive &&
                temp_n1 == for_hot_negative && temp_n2 == for_hot_negative) {


                let x = for_hot_positive / total_Hot;
                let y = for_hot_negative / total_Hot;

                if (for_hot_positive == 0 || for_hot_negative == 0) {
                    z = 0;
                }
                else if (for_hot_positive == for_hot_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>hot</i></sub>) = ' + '</b>' + z;



            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_hot_positive, for_hot_negative)
                return;
            }



            if (total_Mild == 0 && total_Cool == 0 && total_High == 0) {
                submitCount = submitCount + 3;
                displayNormal(table1, rowCount, temp3);
            }
            else if (total_Mild == 0 && total_Cool == 0) {
                submitCount = submitCount + 2;
                displayHigh(table1, rowCount, temp3);
            }
            else if (total_Mild == 0) {
                submitCount++;
                displayCool(table1, rowCount, temp3);
            }
            else {
                displayMild(table1, rowCount, temp3);

            }

            submitCount++;
            resetValue();
            return;
        }

        //mild
        if (submitCount == 5) {
            if (for_mild_positive != for_mild_negative) {
                if (temp_p1 == for_mild_positive && temp_p2 == for_mild_positive &&
                    temp_n1 == for_mild_negative && temp_n2 == for_mild_negative) {


                    let x = for_mild_positive / total_Mild;
                    let y = for_mild_negative / total_Mild;

                    if (for_mild_positive == 0 || for_mild_negative == 0) {
                        z = 0;
                    }
                    else if (for_mild_positive == for_mild_negative) {
                        z = 1;
                    }
                    else {
                        z = - x * Math.log2(x) - y * Math.log2(y);
                        z = z.toFixed(2);
                    }

                    td[Eindex].innerHTML = z;
                    Eindex++;

                    temp_result.innerHTML = '<b>' + 'H(D<sub><i>mild</i></sub>) = ' + '</b>' + z;




                }

                //for incorrect values
                else {
                    checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_mild_positive, for_mild_negative);
                    return;
                }


                document.getElementById('addind').style.display = "block";
            }


            if (total_Cool == 0 && total_High == 0) {
                submitCount = submitCount + 2;
                displayNormal(table1, rowCount, temp3);
            }
            else if (total_Cool == 0) {
                submitCount++;
                displayHigh(table1, rowCount, temp3);
            }
            else {
                displayCool(table1, rowCount, temp3);
            }

            submitCount++;
            resetValue();
            return;
        }

        //cool
        if (submitCount == 6) {

            if (temp_p1 == for_cool_positive && temp_p2 == for_cool_positive &&
                temp_n1 == for_cool_negative && temp_n2 == for_cool_negative) {


                let x = for_cool_positive / total_Cool;
                let y = for_cool_negative / total_Cool;

                if (for_cool_positive == 0 || for_cool_negative == 0) {
                    z = 0;
                }
                else if (for_cool_positive == for_cool_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>cool</i></sub>) = ' + '</b>' + z;



            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_cool_positive, for_cool_negative);
                return;
            }

            document.getElementById('addind').style.display = "block";

            if (total_High == 0) {

                submitCount++;
                displayNormal(table1, rowCount, temp3);
            }
            else {
                displayHigh(table1, rowCount, temp3);
            }

            submitCount++;
            resetValue();
            return;
        }

        //High
        if (submitCount == 7) {

            if (temp_p1 == for_high_positive && temp_p2 == for_high_positive &&
                temp_n1 == for_high_negative && temp_n2 == for_high_negative) {


                let x = for_high_positive / total_High;
                let y = for_high_negative / total_High;

                if (for_high_positive == 0 || for_high_negative == 0) {
                    z = 0;
                }
                else if (for_high_positive == for_high_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>high</i></sub>) = ' + '</b>' + z;




            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_high_positive, for_high_negative);
                return;
            }


            document.getElementById('addind').style.display = "block";

            if (total_Normal == 0 && total_Weak == 0) {
                submitCount = submitCount + 2;
                displayStrong(table1, rowCount, temp3);
            }
            else if (total_Normal == 0) {
                submitCount++;
                displayWeak(table1, rowCount, temp3);
            }
            else {
                displayNormal(table1, rowCount, temp3);
            }

            submitCount++;
            resetValue();
            return;
        }

        //Normal
        if (submitCount == 8) {

            if (temp_p1 == for_normal_positive && temp_p2 == for_normal_positive &&
                temp_n1 == for_normal_negative && temp_n2 == for_normal_negative) {


                let x = for_normal_positive / total_Normal;
                let y = for_normal_negative / total_Normal;

                if (for_normal_positive == 0 || for_normal_negative == 0) {
                    z = 0;
                }
                else if (for_normal_positive == for_normal_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>normal</i></sub>) = ' + '</b>' + z;




            }

            //for incorrect values
            else {

                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_normal_positive, for_normal_negative);
                return;
            }


            document.getElementById('addind').style.display = "block";

            if (total_Weak == 0) {
                submitCount++;
                displayStrong(table1, rowCount, temp3);
            }
            else {
                displayWeak(table1, rowCount, temp3);
            }

            submitCount++;
            resetValue();
            return;
        }

        //Weak
        if (submitCount == 9) {

            if (temp_p1 == for_weak_positive && temp_p2 == for_weak_positive &&
                temp_n1 == for_weak_negative && temp_n2 == for_weak_negative) {


                let x = for_weak_positive / total_Weak;
                let y = for_weak_negative / total_Weak;

                if (for_weak_positive == 0 || for_weak_negative == 0) {
                    z = 0;
                }
                else if (for_weak_positive == for_weak_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>weak</i></sub>) = ' + '</b>' + z;




            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_weak_positive, for_weak_negative);
                return;
            }


            document.getElementById('addind').style.display = "block";

            if (total_Strong == 0) {
                submitCount++;
                document.getElementById("nexttotable").disabled = false
                document.getElementById("submittotable").disabled = true
                document.getElementById('addind').style.display = "none";
                alerts('success', 'Click on the <b style="color:#0070C0">NEXT</b> button.');
                document.getElementById('addind').style.display = "none";
                for (var i = 1; i < rowCount; i++) {
                    table1.rows[i].cells[4].style.border = "";
                }
            }
            else {

                displayStrong(table1, rowCount, temp3);
            }

            submitCount++;
            resetValue();
            return;
        }

        //Strong
        if (submitCount == 10) {

            if (temp_p1 == for_strong_positive && temp_p2 == for_strong_positive &&
                temp_n1 == for_strong_negative && temp_n2 == for_strong_negative) {


                let x = for_strong_positive / total_Strong;
                let y = for_strong_negative / total_Strong;

                if (for_strong_positive == 0 || for_strong_negative == 0) {
                    z = 0;
                }
                else if (for_strong_positive == for_strong_negative) {
                    z = 1;
                }
                else {
                    z = - x * Math.log2(x) - y * Math.log2(y);
                    z = z.toFixed(2);
                }
                td[Eindex].innerHTML = z;
                Eindex++;
                temp_result.innerHTML = '<b>' + 'H(D<sub><i>strong</i></sub>) = ' + '</b>' + z;

                let temp5 = document.getElementById("nexttotable")
                temp5.disabled = false

                let temp6 = document.getElementById("submittotable")
                temp6.disabled = true




            }

            //for incorrect values
            else {
                checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, for_strong_positive, for_strong_negative);
                return;
            }

            alerts('success', 'Click on the <b style="color:#0070C0">NEXT</b> button.');
            submitCount++;
            document.getElementById('addind').style.display = "none";
            for (var i = 1; i < rowCount; i++) {
                table1.rows[i].cells[4].style.border = "";
            }
            resetValue();
            return;
        }

    }

    //for missing values
    else {
        checkMissing(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13)
        return;
    }

}

function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}

var IG_count = 0;
var j = 0;
var IG = []; var m;

async function submitIGValue() {
    let temp_E = document.getElementById("totalE").value;


    let temp_v12 = document.getElementById("total_V12").value;
    let temp_v22 = document.getElementById("total_V22").value;
    let temp_v32 = document.getElementById("total_V32").value;

    let temp_E1 = document.getElementById("totalE");
    let temp_11 = document.getElementById("total_V11");
    let temp_12 = document.getElementById("total_V12");
    let temp_21 = document.getElementById("total_V21");
    let temp_22 = document.getElementById("total_V22");
    let temp_31 = document.getElementById("total_V31");
    let temp_32 = document.getElementById("total_V32");

    let temp5 = document.getElementById("heading2");

    let temp_result = document.getElementById("result");
    temp_result.style.display = "block";
    let td = document.getElementsByClassName("entropyid");

    var h2 = document.getElementById("h2");
    var h3 = document.getElementById("h3");

    var Gtable = document.getElementById("gaintable");
    var Gtable2 = document.getElementById("gaintable2");

    if (IG_count == 0) {
        if (h3.style.display == "none" && h2.style.display == "none") {
            if (isNaN(temp_v12) == false && isNaN(temp_E) == false) {
                if (total_Sunny == 0 && total_Overcast == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Rain / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";

                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
                else if (total_Overcast == 0 && total_Rain == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Sunny / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";

                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
                else if (total_Sunny == 0 && total_Rain == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Overcast / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";

                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML)
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG1(temp_v12, temp_12, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> =' + '</b>';
            j++;
            IG.push(res);
        }


        else if (h3.style.display == "none") {
            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_E) == false) {
                if (total_Sunny == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Overcast / total;
                        let y = total_Rain / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                        return;
                    }
                }
                else if (total_Overcast == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Sunny / total;
                        let y = total_Rain / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);

                        return;
                    }
                }
                else if (total_Rain == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Sunny / total;
                        let y = total_Overcast / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> =' + '</b>';
            j = j + 2;
            IG.push(res);
        }

        else {

            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_v32) == false && isNaN(temp_E) == false) {
                if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_v32 == Number(td[j + 2].innerHTML) && temp_E == Number(entropyValue)) {
                    let x = total_Sunny / total;
                    let y = total_Overcast / total;
                    let z = total_Rain / total;
                    res = entropyValue - x * temp_v12 - y * temp_v22 - z * temp_v32;
                    res = res.toFixed(2);
                    console.log(res)
                    temp_result.innerHTML = '<b>' + '<i>Gain(D,out.)</i> = ' + '</b>' + res;
                    document.getElementById('IG_id').style.display = "none";

                    alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
                    document.getElementById('IG_id').style.display = "block";
                    IG_count++;
                    resetIGValue();
                    temp5.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> =' + '</b>';
                    j = j + 3;
                    IG.push(res);

                }
                else {
                    //incorrect values
                    checkInvalidIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML, td[j + 2].innerHTML)

                    return;
                }
            }

            else {
                //missing values
                checkMissingIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1);
                return;
            }

        }

        if (total_Hot == 0 && total_Mild == 0 || total_Mild == 0 && total_Cool == 0 || total_Hot == 0 && total_Cool == 0) {
            h2.style.display = "none";
            h3.style.display = "none";
            if (total_Hot == 0 && total_Mild == 0) {
                temp_11.textContent = total_Cool;
                temp_12.placeholder = "H(C)";
            }
            else if (total_Mild == 0 && total_Cool == 0) {
                temp_11.textContent = total_Hot;
                temp_12.placeholder = "H(H)";
            }
            else if (total_Hot == 0 && total_Cool == 0) {
                temp_11.textContent = total_Mild;
                temp_12.placeholder = "H(M)";
            }
        }
        else if (total_Hot == 0 || total_Mild == 0 || total_Cool == 0) {
            h2.style.display = "";
            h3.style.display = "none";
            if (total_Hot == 0) {

                temp_12.placeholder = "H(M)";

                temp_22.placeholder = "H(C)";
                temp_11.textContent = total_Mild;
                temp_21.textContent = total_Cool;
            }
            else if (total_Mild == 0) {

                temp_12.placeholder = "H(H)";

                temp_22.placeholder = "H(C)";
                temp_11.textContent = total_Hot;
                temp_21.textContent = total_Cool;
            }
            else if (total_Cool == 0) {

                temp_12.placeholder = "H(H)";

                temp_22.placeholder = "H(M)";
                temp_11.textContent = total_Hot;
                temp_21.textContent = total_Mild;
            }
        }
        else {
            h1.style.display = "";
            h2.style.display = "";
            h3.style.display = "";

            temp_12.placeholder = "H(H)";

            temp_22.placeholder = "H(M)";

            temp_32.placeholder = "H(C)";
            temp_11.textContent = total_Hot;
            temp_21.textContent = total_Mild;
            temp_31.textContent = total_Cool;
        }

        var row = Gtable.insertRow(-1);
        var cell0 = row.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row.insertCell(1);
        cell1.innerHTML = 'Outlook';
        var cell2 = row.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        var row2 = Gtable2.insertRow(-1);
        var cell0 = row2.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row2.insertCell(1);
        cell1.innerHTML = 'Outlook';
        var cell2 = row2.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        return;
    }

    if (IG_count == 1) {

        if (h3.style.display == "none" && h2.style.display == "none") {
            if (isNaN(temp_v12) == false && isNaN(temp_E) == false) {
                if (total_Hot == 0 && total_Mild == 0) {

                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Cool / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
                else if (total_Mild == 0 && total_Cool == 0) {

                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Hot / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);

                        return;
                    }
                }
                else if (total_Hot == 0 && total_Cool == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Mild / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else { //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG1(temp_v12, temp_12, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> =' + '</b>';
            j++;
            IG.push(res);
        }


        else if (h3.style.display == "none") {
            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_E) == false) {
                if (total_High == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Mild / total;
                        let y = total_Cool / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                        return;
                    }
                }
                else if (total_Mild == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Hot / total;
                        let y = total_Cool / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                        //incorrect

                        return;
                    }
                }
                else if (total_Cool == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Hot / total;
                        let y = total_Mild / total;
                        res = entropyValue - x * temp_v12 - y * temp_v22;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> =' + '</b>';
            j = j + 2;
            IG.push(res);
        }

        else {
            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_v32) == false && isNaN(temp_E) == false) {
                if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_v32 == Number(td[j + 2].innerHTML) && temp_E == Number(entropyValue)) {
                    let x = total_Hot / total;
                    let y = total_Mild / total;
                    let z = total_Cool / total;
                    res = entropyValue - x * temp_v12 - y * temp_v22 - z * temp_v32;
                    res = res.toFixed(2);
                    temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                    document.getElementById('IG_id').style.display = "none";
                }
                else {
                    //incorrect
                    checkInvalidIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML, td[j + 2].innerHTML)
                    return;
                }
            }
            else {
                //missing values
                checkMissingIG3(temp_v12, temp_12, temp_v22, temp_22, temp_v32, temp_32, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> =' + '</b>';
            j = j + 3;
            IG.push(res);
        }

        if (total_High == 0 || total_Normal == 0) {
            h2.style.display = "none";
            h3.style.display = "none";
            if (total_High == 0) {

                temp_12.placeholder = "H(N)";
                temp_11.textContent = total_Normal;
            }
            else if (total_Normal == 0) {

                temp_12.placeholder = "H(H)";
                temp_11.textContent = total_High;
            }
        }
        else {
            h2.style.display = "";
            h3.style.display = "none";

            temp_12.placeholder = "H(H)";
            temp_22.placeholder = "H(N)";
            temp_11.textContent = total_High;
            temp_21.textContent = total_Normal;
        }

        var row = Gtable.insertRow(-1);
        var cell0 = row.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row.insertCell(1);
        cell1.innerHTML = 'Temperature';
        var cell2 = row.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        var row2 = Gtable2.insertRow(-1);
        var cell0 = row2.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row2.insertCell(1);
        cell1.innerHTML = 'Temperature';
        var cell2 = row2.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        return;
    }

    if (IG_count == 2) {


        if (h2.style.display == "none") {

            if (isNaN(temp_v12) == false && isNaN(temp_E) == false) {
                if (total_High == 0) {
                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Normal / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);
                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }

                else if (total_Normal == 0) {

                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_High / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG1(temp_v12, temp_12, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Wind)</i> =' + '</b>';
            j++;
            IG.push(res);
        }


        else {
            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_E) == false) {
                if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                    let x = total_High / total;
                    let y = total_Normal / total;
                    res = entropyValue - x * temp_v12 - y * temp_v22;
                    res = res.toFixed(2);

                    temp_result.innerHTML = '<b>' + '<i>Gain(D,Hd.)</i> = ' + '</b>' + res;
                    document.getElementById('IG_id').style.display = "none";
                }
                else {
                    //incorrect
                    checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                    return;
                }
            }
            else {
                //missing values
                checkMissingIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1);
                return;
            }
            alerts('success', 'Enter the values and click on the <b style="color:#0070C0">SUBMIT</b> button.');
            document.getElementById('IG_id').style.display = "block";
            IG_count++;
            resetIGValue();
            temp5.innerHTML = '<b>' + '<i>Gain(D,Wind)</i> =' + '</b>';
            j = j + 2;
            IG.push(res);
        }
        if (total_Weak == 0 || total_Strong == 0) {
            h2.style.display = "none";
            h3.style.display = "none";
            if (total_Weak == 0) {

                temp_12.placeholder = "H(S)";
                temp_11.textContent = total_Strong;
            }
            else if (total_Strong == 0) {

                temp_12.placeholder = "H(W)";
                temp_11.textContent = total_Weak;
            }
        }
        else {
            h2.style.display = "";
            h3.style.display = "none";

            temp_12.placeholder = "H(W)";
            temp_22.placeholder = "H(S)";
            temp_11.textContent = total_Weak;
            temp_21.textContent = total_Strong;
        }
        var row = Gtable.insertRow(-1);
        var cell0 = row.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row.insertCell(1);
        cell1.innerHTML = 'Humidity';
        var cell2 = row.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        var row2 = Gtable2.insertRow(-1);
        var cell0 = row2.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row2.insertCell(1);
        cell1.innerHTML = 'Humidity';
        var cell2 = row2.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];
        return;

    }

    if (IG_count == 3) {

        if (h2.style.display == "none") {
            if (isNaN(temp_v12) == false && isNaN(temp_E) == false) {
                if (total_Weak == 0) {

                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Strong / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Wind)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }

                else if (total_Strong == 0) {

                    if (temp_v12 == Number(td[j].innerHTML) && temp_E == Number(entropyValue)) {
                        let x = total_Weak / total;
                        res = entropyValue - x * temp_v12;
                        res = res.toFixed(2);

                        temp_result.innerHTML = '<b>' + '<i>Gain(D,Wind)</i> = ' + '</b>' + res;
                        document.getElementById('IG_id').style.display = "none";
                    }
                    else {
                        //incorrect
                        checkInvalidIG1(temp_v12, temp_12, temp_E, temp_E1, entropyValue, td[j].innerHTML);
                        return;
                    }
                }
            }
            else {
                //missing values
                checkMissingIG1(temp_v12, temp_12, temp_E, temp_E1);
                return;
            }
            document.getElementById('IG_id').style.display = "none";
            IG_count++;
            resetIGValue();
            IG.push(res);
        }


        else {
            if (isNaN(temp_v12) == false && isNaN(temp_v22) == false && isNaN(temp_E) == false) {
                if (temp_v12 == Number(td[j].innerHTML) && temp_v22 == Number(td[j + 1].innerHTML) && temp_E == Number(entropyValue)) {
                    let x = total_Weak / total;
                    let y = total_Strong / total;
                    res = entropyValue - x * temp_v12 - y * temp_v22;
                    res = res.toFixed(2);
                    temp_result.innerHTML = '<b>' + '<i>Gain(D,Tp.)</i> = ' + '</b>' + res;
                    document.getElementById('IG_id').style.display = "none";
                }
                else {
                    //incorrect
                    checkInvalidIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1, entropyValue, td[j].innerHTML, td[j + 1].innerHTML);
                    return;
                }
            }
            else {
                //missing values
                checkMissingIG2(temp_v12, temp_12, temp_v22, temp_22, temp_E, temp_E1);
                return;
            }

            IG_count++;
            resetIGValue();
            IG.push(res);
        }
        await waitforme(500);


        document.getElementById("submitIG").disabled = true;


        var row = Gtable.insertRow(-1);
        var cell0 = row.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row.insertCell(1);
        cell1.innerHTML = 'Wind';
        var cell2 = row.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        var row2 = Gtable2.insertRow(-1);
        var cell0 = row2.insertCell(0);
        cell0.innerHTML = IG_count;
        var cell1 = row2.insertCell(1);
        cell1.innerHTML = 'Wind';
        var cell2 = row2.insertCell(2);
        cell2.innerHTML = IG[IG_count - 1];

        document.getElementById("gaintable").style.display = 'block'
        document.getElementById("result").style.display = "none"
        m = Math.max(...IG);
        console.log('m is : ' + m);
        await waitforme(3000);

        if (m == 0) {
            document.getElementById("resetIGtable").disabled = true
            document.getElementById("nextbt").disabled = true

            Swal.fire({
                html: 'It happens when an attribute has constant values within each subset,<br> making it ineffective for making distinctions in the dataset.<br>Try by taking another dataset.',
                icon: "warning",
                title: 'Information Gain=0!!!',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK, Go to CREATE!',
                customClass: {
                    container: "position-absolute",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";
                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false, // Prevent closing by pressing the escape key
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "ID3.html"
                }
            });
        }
        else {
            Swal.fire({
                html: `The root node is the one with the highest Information Gain value. i.e. <b style='color:#0070C0'>${Math.max(...IG)}</b>`,
                icon: "info",
                title: 'Root Node Found!!!',
                confirmButtonText: "OK",
                customClass: {
                    container: "position-absolute",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                },
                target: '.container',

                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false, // Prevent closing by pressing the escape key
            }).then((result) => {
                if (result.isConfirmed) {


                    document.getElementById("gaintable").style.display = 'none'
                    let tempcalhed = document.getElementById("calculation")
                    tempcalhed.innerHTML = "DECISION TREE";

                    document.getElementById("OrganiseChart-simple").style.display = "block";
                    drawTree();

                }
            });
        }

    }
    return;
}

function tonextIG() {

    document.getElementById("result").style.display = "none"
    let tempcalhed = document.getElementById("calculation")
    tempcalhed.innerHTML = "INFORMATION GAIN"
    document.getElementById("trainToTest").innerHTML = "OBSERVATION TABLE";
    const temp = document.getElementById("firsttable")
    temp.style.display = ""
    document.getElementById('tablesContainer').style.display = "none";

    let tempb = document.getElementById('fidel')
    tempb.style.display = ""

    document.getElementById("dataPointsTable").style.display = "none";

    let temp2 = document.getElementById("divcedshow")
    temp2.style.display = 'flex'

    document.getElementById('IG_id').style.display = "";

    let temp8 = document.getElementById("hidediv1")
    temp8.style.display = "none"
    let temp9 = document.getElementById("showdiv1")
    temp9.style.display = "flex";

    let temp_11 = document.getElementById("total_V11");
    let temp_12 = document.getElementById("total_V12");
    let temp_21 = document.getElementById("total_V21");
    let temp_22 = document.getElementById("total_V22");
    let temp_31 = document.getElementById("total_V31");

    alerts('info', 'Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.', 'Calculate the Information Gain.');

    if (total_Sunny == 0 && total_Overcast == 0 || total_Overcast == 0 && total_Rain == 0 || total_Sunny == 0 && total_Rain == 0) {
        document.getElementById("h2").style.display = "none";
        document.getElementById("h3").style.display = "none";
        if (total_Sunny == 0 && total_Overcast == 0) {

            temp_12.placeholder = "H(R)";
            temp_11.textContent = total_Rain;
        }
        else if (total_Overcast == 0 && total_Rain == 0) {

            temp_12.placeholder = "H(S)";
            temp_11.textContent = total_Sunny;
        }
        else if (total_Sunny == 0 && total_Rain == 0) {

            temp_12.placeholder = "H(O)";
            temp_11.textContent = total_Overcast;
        }
    }
    else if (total_Sunny == 0 || total_Overcast == 0 || total_Rain == 0) {
        document.getElementById("h3").style.display = "none";
        if (total_Sunny == 0) {

            temp_12.placeholder = "H(O)";

            temp_22.placeholder = "H(R)";
            temp_11.textContent = total_Overcast;
            temp_21.textContent = total_Rain;
        }
        else if (total_Overcast == 0) {

            temp_12.placeholder = "H(S)";

            temp_22.placeholder = "H(R)";
            temp_11.textContent = total_Sunny;
            temp_21.textContent = total_Rain;
        }
        else if (total_Rain == 0) {

            temp_12.placeholder = "H(S)";

            temp_22.placeholder = "H(O)";
            temp_11.textContent = total_Sunny;
            temp_21.textContent = total_Overcast;
        }
    }
    else {
        temp_11.textContent = total_Sunny;
        temp_21.textContent = total_Overcast;
        temp_31.textContent = total_Rain;
    }

}

function tonextIG2() {



    document.getElementById("calculation").innerHTML = "ENTROPY & INFORMATION GAIN";

    document.getElementById("hidediv1").style.display = "none"
    document.getElementById("showdiv1").style.display = "none"
    document.getElementById("showdiv2").style.display = "flex"


    document.getElementById("heading").innerHTML = `<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">${node.toLowerCase()}</i></mn></msub><mi>)</mi> =</mrow>`
    document.getElementById("OrganiseChart-simple").style.display = "none";

    let temp3 = document.getElementById("dataPointsTable")
    temp3.style.display = 'none'
    let temp4 = document.getElementById("secondtable")
    temp4.style.display = 'none'
    document.getElementById("gaintable").style.display = 'none'
    let temp5 = document.getElementById("tablesContainer")
    temp5.appendChild(temp4)

    document.getElementById("divcedshow").style.display = 'flex'

    document.getElementById("wtab").style.display = "none"

    document.getElementById("finde").disabled = false;

    document.getElementById("divcshow").style.display = "none";
    document.getElementById("totalValueTable").style.display = "none";
    document.getElementById("firsttable").style.marginTop = "20px";

    document.getElementById("copiedTable").style.display = "inline-table";
    document.getElementById("copiedTable").style.height = "auto";
    document.getElementById('addind').style.display = "block";
    document.getElementById('addind').style.marginTop = "140px";


    creatE();
    alerts('info', `The target 'PLAY TENNIS' has <b style="color:#0070C0">${forpositive2}</b> instances as <b>YES</b> and <b style="color:#0070C0">${fornegative2}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy!!');

}

function tonextIG3() {

    document.getElementById('finds').disabled = false;
    document.getElementById("calculation").innerHTML = "ENTROPY & INFORMATION GAIN";

    document.getElementById("hidediv1").style.display = "none"
    document.getElementById("showdiv1").style.display = "none"
    document.getElementById("showdiv2").style.display = "flex"

    document.getElementById("b1").style.display = "block";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "block";
    document.getElementById("b5").style.display = "none";

    document.getElementById("nextbt2").disabled = true;

    let temp_1 = document.getElementById("pos1");
    let temp_2 = document.getElementById("pos2");

    let temp_11 = document.getElementById("neg1");
    let temp_12 = document.getElementById("neg2");


    temp_1.value = ''
    temp_2.value = ''

    temp_1.style.border = ""
    temp_2.style.border = ""

    temp_11.value = ''
    temp_12.value = ''


    temp_11.style.border = ""
    temp_12.style.border = ""

    console.log(node);

    document.getElementById("heading").innerHTML = `<mrow><msub><mi>H(D</mi><mn><i style="font-size:16px">${node.toLowerCase()}</i></mn></msub><mi>)</mi> =</mrow>`
    document.getElementById("OrganiseChart-simple").style.display = "none";

    let temp3 = document.getElementById("dataPointsTable")
    temp3.style.display = 'none'
    let temp4 = document.getElementById("secondtable")
    temp4.style.display = 'none'
    document.getElementById("gaintable").style.display = 'none'
    let temp5 = document.getElementById("tablesContainer")
    temp5.appendChild(temp4)

    document.getElementById("divcedshow").style.display = 'flex'

    document.getElementById("wtab").style.display = "none"

    document.getElementById("divcshow").style.display = "none";
    document.getElementById("totalValueTable").style.display = "none";
    document.getElementById("firsttable").style.marginTop = "20px";

    document.getElementById("copiedTable").style.display = "inline-table";
    document.getElementById("copiedTable").style.height = "auto";
    document.getElementById('addind').style.display = "block";
    document.getElementById('addind').style.marginTop = "140px";

    document.getElementById('finde').disabled = false;


    var table1 = document.getElementById("copiedTable");
    var rowCount = table1.rows.length;

    console.log(rowCount)
    var columnCount = 0;

    if (table1.rows.length > 0) {
        // Assuming all rows have the same number of cells
        columnCount = table1.rows[0].cells.length;
    }

    console.log('columnCount: ' + columnCount)
    //clears previous data

    if (columnCount - 2 == 1) {
        var table = document.getElementById("copiedTable2");
        // Empty the table by removing all rows except the header row
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Add two new rows
        var newRow1 = table.insertRow(1);
        v1 = newRow1.insertCell(0);
        v1.id = "v1";

    }

    else if (columnCount - 2 == 2) {
        var table = document.getElementById("copiedTable2");
        // Empty the table by removing all rows except the header row
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Add two new rows
        var newRow1 = table.insertRow(1);
        v1 = newRow1.insertCell(0);
        v1.id = "v1";

        // Add two new rows
        var newRow2 = table.insertRow(2);
        v2 = newRow2.insertCell(0);
        v2.id = "v2";
    }

    else if (columnCount - 2 == 3) {
        var table = document.getElementById("copiedTable2");
        // Empty the table by removing all rows except the header row
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Add one new rows
        var newRow1 = table.insertRow(1);
        v1 = newRow1.insertCell(0);
        v1.id = "v1";

        // Add two new rows
        var newRow2 = table.insertRow(2);
        v2 = newRow2.insertCell(0);
        v2.id = "v2";

        // Add two new rows
        var newRow3 = table.insertRow(3);
        v3 = newRow3.insertCell(0);
        v3.id = "v3";

    }


    E2index = 0;
    IGindex = 0; row2ii = 1;

    creatE();
    alerts('info', `The target 'PLAY TENNIS' has <b style="color:#0070C0">${forpositive2}</b> instances as <b>YES</b> and <b style="color:#0070C0">${fornegative2}</b> as <b>NO</b>.<br>Enter the required values into the equation and click the <b style="color:#0070C0">SUBMIT</b> button.`, 'Calculate the Entropy!!')

}

function tonexttAnalysis() {


    let temp9 = document.getElementById("tab-2")
    temp9.style.color = "#FFC000"
    temp9.style.backgroundColor = "#004E86"
    temp9.style.fontWeight = "normal"
    document.getElementById('calimg').src = "images/calculator.png"


    let temp10 = document.getElementById("tab-3")
    temp10.style.color = "#004E86"
    temp10.style.backgroundColor = "#ffd964"
    temp10.style.fontWeight = "bold"
    let anai = document.getElementById('anaimg')
    anai.src = "images/tree1.png"

    document.getElementById("cont").style.display = 'none'

    document.getElementById('showdiv2').style.display = 'none'
    let temp = document.getElementById("finalhide")
    temp.style.display = 'none'
    let temp2 = document.getElementById("finalhide2")
    temp2.style.display = 'none'

    let temp3 = document.getElementById('finale1')
    temp3.style.height = "fit-content"
    temp3.style.width = "50%"

    let temp4 = document.getElementById('dataPointsTable')

    let temp5 = document.getElementById("finale2")
    temp5.style.width = "50%"
    temp5.style.height = "fit-content"
    temp5.style.display = "flex"
    temp5.style.flexDirection = "column"

    let temp1715 = document.getElementById("myModal")
    temp1715.style.paddingTop = "60px"
    temp1715.style.height = "610px"
    let newtemp = document.getElementById("box")
    newtemp.style.height = "672px"

    temp4.style.display = ''
    temp4.style.height = "482.5px"
    temp4.style.width = "100%";
    temp3.innerHTML = `<header id="trainToTest" class="header-box">DATASET</header>`
    temp3.appendChild(temp4);

    let tempx = document.getElementById("fortarget")
    tempx.style.height = "596px";
    tempx.style.marginLeft = "10px"

    let chart = document.getElementsByClassName('chart');
    chart[0].style.height = '564px';
    chart[0].style.width = '458px';


    temp5.appendChild(tempx)
    let temp6 = document.getElementById("finalshow")
    temp6.style.display = ""
    temp6.style.margin = "5px"
    let temp7 = document.getElementById('print')
    let temp8 = document.getElementById('retb')
    temp8.style.display = "flex"

    document.getElementById('OrganiseChart-simple').style.display = 'none'
}

function toPlot() {
    document.getElementById('OrganiseChart-simple').style.display = 'block'
    traverse_node(simple_chart_config.nodeStructure, 0);
    document.getElementById('plot').disabled = true
    document.getElementById('print').disabled = false
}

function toreset2_2() {
    if (tyre == 1) {
        let temp = (document.getElementById(`${'hinm' + countin}`))
        let temp2 = (document.getElementById(`${'winm' + countin}`))
        let temp3 = (document.getElementById(`${'fsinm' + countin}`))

        temp.value = ''
        temp2.value = ''
        temp3.value = ''

        temp.style.border = ""
        temp2.style.border = ""
        temp3.style.border = ""

        uncheck5.checked = false
        uncheck6.checked = false
        let temp10 = document.getElementById("forformule")
        temp10.innerHTML = ""

    }
    if (tyre == 2) {
        let temp4 = (document.getElementById(`${'hinf' + countin}`))
        let temp5 = (document.getElementById(`${'winf' + countin}`))
        let temp6 = (document.getElementById(`${'fsinf' + countin}`))
        temp4.value = ''
        temp5.value = ''
        temp6.value = ''

        temp4.style.border = ""
        temp5.style.border = ""
        temp6.style.border = ""

        uncheck5.checked = false
        uncheck6.checked = false
        let temp10 = document.getElementById("forformule")
        temp10.innerHTML = ""

    }
    if (tyre == 3) {
        countin = countin - 1
        let divte = document.getElementById('divte')

        if (countin == 1) {
            divte.innerHTML = `<b>NEW INSTANCE</b> = {<span style="color: #00668c">HEIGHT: ${rowii[1].innerText}</span>, WEIGHT : ${rowii[2].innerText}, FOOT SIZE : ${rowii[3].innerText}, GENDER : ${rowii[4].innerText}}<br><br>Here, x = ${target_dict[countin - 1]}`
        }
        if (countin == 2) {
            divte.innerHTML = `<b>NEW INSTANCE</b> = {HEIGHT : ${rowii[1].innerText}, <span style="color: #00668c">WEIGHT : ${rowii[2].innerText}</span>, FOOT SIZE : ${rowii[3].innerText}, GENDER : ${rowii[4].innerText}}<br><br>Here, x = ${target_dict[countin - 1]}`
        }
        if (countin == 3) {
            divte.innerHTML = `<b>NEW INSTANCE</b> = {HEIGHT : ${rowii[1].innerText}, WEIGHT : ${rowii[2].innerText}, <span style="color: #00668c">FOOT SIZE : ${rowii[3].innerText}</span> , GENDER : ${rowii[4].innerText}}<br><br>Here, x = ${target_dict[countin - 1]}`
        }

        let temps = document.getElementById("submittotable")
        temps.disabled = false
        temps.style.cursor = "pointer"
        let tempn = document.getElementById("nexttotable")
        tempn.disabled = true
        tempn.style.cursor = "not-allowed"


        let temp6 = document.getElementById("malefemalediv")
        temp6.id = "dynamicdiv"

        temp6.innerHTML = `<div id=malefemalediv style="display: flex; align-items: center; justify-content: center; margin:0 auto; height: 160px; flex-direction: column;">
    <div id=malediv style="font-weight: bold; "> P(${eval('item' + countin)}∣MALE) = <math style="font-weight: bold; font-size: 25px; ">
                                <mfrac>
                                  <mrow>
                                   <msup><mi>e</mi><mn>-(x - μ)² / (2σ²)</mn></msup>
                                        
                                  </mrow>
                                 <msqrt>
    <mi>(2πσ²)</mi>
  </msqrt>
                                </mfrac>
                            </math> ;
                            <input id="${'hinm' + countin}" type=number placeholder="x" min="0" style='width:35px;text-align: center;'>  <input min="0" id="${'winm' + countin}" type=number style='width:35px;text-align: center;' placeholder="μ"> <input min="0" id="${'fsinm' + countin}" type=number style='width:35px;text-align: center;' placeholder="σ²">
                            
                            </div>
                            <div id=femalediv style="display: flex; align-items: center; justify-content: center; margin:0 auto; height: 160px; font-weight: bold; ">
    <div> P(${eval('item' + countin)}∣FEMALE) = <math style="font-weight: bold; font-size: 25px; ">
                                <mfrac>
                                  <mrow>
                                   <msup><mi>e</mi><mn>-(x - μ)² / (2σ²)</mn></msup>
                                        
                                  </mrow>
                                 <msqrt>
    <mi>(2πσ²)</mi>
  </msqrt>
                                </mfrac>
                            </math> ;
                            <input min="0" id="${'hinf' + countin}" disabled=true type=number placeholder="x" disabled=true style='width:35px;text-align: center;cursor:not-allowed;'>  <input min="0" id="${'winf' + countin}" type=number disabled=true style='width:35px;text-align: center;cursor:not-allowed;' placeholder="μ"> <input min="0" id="${'fsinf' + countin}" disabled=true type=number style='width:35px;text-align: center;cursor:not-allowed;' placeholder="σ²">
                            
                            </div>
                            </div>`
        if (countsubval == 1 || countsubval == 2) {
            countsubval = 1;
        }
        else if (countsubval == 3 || countsubval == 4) {
            countsubval = 3;
        }

        else if (countsubval == 5 || countsubval == 6) {
            countsubval = 5;
        }



        let temp4 = document.getElementById("secondtable")
        let sectd = temp4.getElementsByTagName("td")
        for (let i = 0; i < sectd.length; i++) {
            sectd[i].style.color = "white"
        }
        if (countsubval == 1) {
            let sectd = temp4.getElementsByTagName("td")
            sectd[4].style.color = '#00668c'
            sectd[5].style.color = '#00668c'
            sectd[6].style.color = '#00668c'
            sectd[7].style.color = '#00668c'
        }
        else if (countsubval == 3) {
            let sectd = temp4.getElementsByTagName("td")
            sectd[11].style.color = '#00668c'
            sectd[12].style.color = '#00668c'
            sectd[13].style.color = '#00668c'
            sectd[14].style.color = '#00668c'
        }
        else if (countsubval == 5) {
            let sectd = temp4.getElementsByTagName("td")
            sectd[18].style.color = '#00668c'
            sectd[19].style.color = '#00668c'
            sectd[20].style.color = '#00668c'
            sectd[21].style.color = '#00668c'
        }
    }

    let temp001 = document.getElementById("forformule")
    temp001.innerHTML = ""

    uncheck5.checked = false
    uncheck6.checked = false
}

//entropy reset
function toreset() {

    window.location.reload();

}


function resetValue() {
    let temp_1 = document.getElementById("pos1");
    let temp_2 = document.getElementById("pos2");

    let temp_11 = document.getElementById("neg1");
    let temp_12 = document.getElementById("neg2");


    temp_1.value = ''
    temp_2.value = ''

    temp_1.style.border = ""
    temp_2.style.border = ""

    temp_11.value = ''
    temp_12.value = ''


    temp_11.style.border = ""
    temp_12.style.border = ""

}

function resetIGValue() {
    let temp_1 = document.getElementById("totalE");

    let temp_11 = document.getElementById("total_V11");
    let temp_12 = document.getElementById("total_V12");
    let temp_21 = document.getElementById("total_V21");
    let temp_22 = document.getElementById("total_V22");
    let temp_31 = document.getElementById("total_V31");
    let temp_32 = document.getElementById("total_V32");

    temp_1.value = ''
    temp_11.value = ''
    temp_12.value = ''
    temp_21.value = ''
    temp_22.value = ''
    temp_31.value = ''
    temp_32.value = ''

    temp_1.style.border = ""
    temp_11.style.border = ""
    temp_12.style.border = ""
    temp_21.style.border = ""
    temp_22.style.border = ""
    temp_31.style.border = ""
    temp_32.style.border = ""

}


function toreset_2() {

    resetIGValue();
    document.getElementById("forformule").innerHTML = ""
    document.getElementById("divcshow").innerHTML = ""
    document.getElementById("totalValueTable").style.display = "none";
    document.getElementById("secondtable").style.display = "none";

    document.getElementById("gaintable2").style.display = "none";
    document.getElementById("tablesContainer").style.display = "none";
    document.getElementById("wtab").style.marginTop = ""

    initialize();
    uncheck1.checked = false
    uncheck2.checked = false
    uncheck3.checked = false


    uncheck5.checked = false
    uncheck6.checked = false

    IG_count = 0;
    IG = [];
    j = 0;

    tonextIG()
    document.getElementById("submitIG").disabled = false;
    document.getElementById("nextbt").disabled = true;

    document.getElementById("OrganiseChart-simple").style.display = "none";

    var table = document.getElementById("gaintable");
    var rowCount = table.rows.length;
    // Loop through each row and delete it
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    copytable('dataPointsTable', 'copiedTable');
}

function toreset3() {
    let temp_1 = document.getElementById("pos1");
    let temp_2 = document.getElementById("pos2");

    let temp_11 = document.getElementById("neg1");
    let temp_12 = document.getElementById("neg2");


    temp_1.value = ''
    temp_2.value = ''

    temp_1.style.border = ""
    temp_2.style.border = ""

    temp_11.value = ''
    temp_12.value = ''


    temp_11.style.border = ""
    temp_12.style.border = ""

    document.getElementById("forformule").innerHTML = ""
    uncheck5.checked = false
    uncheck6.checked = false
}

function toreset4() {
    document.getElementById('finde').disabled = false;
    document.getElementById('findg').disabled = true;
    var table = document.getElementById("copiedTable2")
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");

        // Empty the 2nd and 4th column (index 1 and 3)
        console.log(cells.length)
        if (cells.length == 2) {
            cells[1].innerHTML = "";

        }
        else if (cells.length == 4) {
            cells[2].innerHTML = "";
            cells[3].innerHTML = "";
        }
        // Or you can remove the content entirely:
        // cells[1].innerHTML = "";
        // cells[3].innerHTML = "";
    }
    E2index = 0;
}


function addEntropyValue() {
    document.getElementById('tablesContainer').style.display = "none";
    document.getElementById("totalValueTable").style.display = "none";
    document.getElementById("secondtable").style.display = "none";
    document.getElementById("wtab").style.marginTop = "5px"
    let temp21 = document.getElementById("divcshow")
    temp21.style.display = "block"
    temp21.innerHTML = `<div style="display:flex;color:#00668c;justify-content: space-around;width: 100%;flex-direction: column;align-items: center;margin-top:200px">
<div style="font-weight: bold; font-size: 25px;">H(D) = ${entropyValue}</div>                
</div>`

}


function addEntropyTable() {

    document.getElementById('tablesContainer').style.display = "block";
    document.getElementById('tablesContainer').style.height = "50%";
    document.getElementById('tablesContainer').style.overflowY = 'visible';
    document.getElementById("totalValueTable").style.display = "none";
    document.getElementById("divcshow").style.display = "none";
    document.getElementById("wtab").style.marginTop = "-278px"
    const temp2 = document.getElementById("secondtable")
    temp2.style.display = ""
    temp2.style.marginTop = "47px"
}

function addtotalset() {
    document.getElementById('tablesContainer').style.display = "block";
    document.getElementById("divcshow").style.display = "none";
    const temp1 = document.getElementById("secondtable")
    temp1.style.display = "none"
    document.getElementById("wtab").style.marginTop = "-278px"
    document.getElementById("totalValueTable").style.display = "";
    document.getElementById("totalValueTable").style.marginTop = "47px"
}

function addIGValue() {
    document.getElementById("gaintable2").style.display = "block";
    document.getElementById("dataPointsTable").style.display = "none"
    document.getElementById("wtab3").style.marginTop = "-315px"
}
function adddataset() {

    document.getElementById("gaintable2").style.display = "none";
    document.getElementById("wtab3").style.marginTop = "-265px";
    document.getElementById("dataPointsTable").style.display = "block";
    document.getElementById("dataPointsTable").style.marginTop = "24px";
}

var root;
function drawTree() {

    var table = document.getElementById("gaintable");
    var rowCount = table.rows.length;

    for (i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var cells = row.cells;

        if (cells[2].innerHTML == m) {
            root = cells[1].innerHTML
        }

    }

    if (root == 'Outlook') {

        if ((total_Sunny == 0 && total_Overcast == 0) || (total_Overcast == 0 && total_Rain == 0) || (total_Sunny == 0 && total_Rain == 0)) {
            if (total_Sunny == 0 && total_Overcast == 0) {
                drawChart1('Outlook', 'Rain', for_rain_positive, for_rain_negative);
            }
            else if (total_Overcast == 0 && total_Rain == 0) {
                drawChart1('Outlook', 'Sunny', for_sunny_positive, for_sunny_negative);
            }
            else {
                drawChart1('Outlook', 'Overcast', for_Overcast_positive, for_Overcast_negative);
            }

        }
        else if (total_Sunny == 0 || total_Overcast == 0 || total_Rain == 0) {
            if (total_Sunny == 0) {

                drawChart2('Outlook', 'Overcast', 'Rain', for_Overcast_positive, for_Overcast_negative, for_rain_positive, for_rain_negative);
            }
            else if (total_Overcast == 0) {

                drawChart2('Outlook', 'Sunny', 'Rain', for_sunny_positive, for_sunny_negative, for_rain_positive, for_rain_negative);
            }
            else {

                drawChart2('Outlook', 'Sunny', 'Overcast', for_sunny_positive, for_sunny_negative, for_Overcast_positive, for_Overcast_negative);
            }

        }
        else {
            drawChart3('Outlook', 'Sunny', 'Overcast', 'Rain', for_sunny_positive, for_sunny_negative, for_Overcast_positive, for_Overcast_negative, for_rain_positive, for_rain_negative);
        }

    }
    else if (root == 'Temperature') {

        if ((total_Hot == 0 && total_Mild == 0) || (total_Mild == 0 && total_Cool == 0) || (total_Hot == 0 && total_Cool == 0)) {
            if (total_Hot == 0 && total_Mild == 0) {

                drawChart1('Temperature', 'Cool', for_cool_positive, for_cool_negative);

            }
            else if (total_Mild == 0 && total_Cool == 0) {

                drawChart1('Temperature', 'Hot', for_hot_positive, for_hot_negative);
            }
            else {
                drawChart1('Temperature', 'Mild', for_mild_positive, for_mild_negative);
            }
        }
        else if (total_Hot == 0 || total_Mild == 0 || total_Cool == 0) {
            if (total_Hot == 0) {
                drawChart2('Temperature', 'Mild', 'Cool', for_mild_positive, for_mild_negative, for_cool_positive, for_cool_negative);

            }
            else if (total_Mild == 0) {
                drawChart2('Temperature', 'Hot', 'Cool', for_hot_positive, for_hot_negative, for_cool_positive, for_cool_negative);
            }
            else {
                drawChart2('Temperature', 'Hot', 'Mild', for_hot_positive, for_hot_negative, for_mild_positive, for_mild_negative);
            }

        }
        else {
            drawChart3('Temperature', 'Hot', 'Mild', 'Cool', for_hot_positive, for_hot_negative, for_mild_positive, for_mild_negative, for_cool_positive, for_cool_negative);
        }
    }
    else if (root == 'Humidity') {

        if (total_High == 0 || total_Normal == 0) {
            if (total_High == 0) {

                drawChart1('Humidity', 'Normal', for_normal_positive, for_normal_negative);

            }
            else {
                drawChart1('Humidity', 'High', for_high_positive, for_high_negative);
            }

        }
        else {
            drawChart2('Humidity', 'High', 'Normal', for_high_positive, for_high_negative, for_normal_positive, for_normal_negative);
        }
    }
    else if (root == 'Wind') {

        if (total_Weak == 0 || total_Strong == 0) {
            if (total_Weak == 0) {
                drawChart1('Wind', 'Strong', for_strong_positive, for_strong_negative);
            }
            else {

                drawChart1('Wind', 'Weak', for_weak_positive, for_weak_negative);
            }

        }
        else {
            drawChart2('Wind', 'Weak', 'Strong', for_weak_positive, for_weak_negative, for_strong_positive, for_strong_negative);
        }
    }
}

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function (match) {
        return match.toUpperCase();
    });
}


function drawTree2() {

    var table = document.getElementById("copiedTable2");
    var rowCount = table.rows.length;
    console.log('row count:' + rowCount)

    for (i = 1; i < rowCount;) {
        var row = table.rows[i];
        var span = table.rows[i].cells[0].rowSpan;
        console.log('span:' + span)
        var cells = row.cells;


        console.log(cells[3].innerHTML)
        if (cells[3].innerHTML == m) {
            root = (cells[0].innerHTML)
            root = toTitleCase(root);
            console.log(root)

            break;
        }

        else {
            i = i + span;
        }

    }

    console.log('New root:' + root)
    table.style.display = 'none';
    document.getElementById("result").style.display = 'none';
    document.getElementById("OrganiseChart-simple").style.marginTop = "-20px";
    document.getElementById("OrganiseChart-simple").style.display = "block";


    if (root == 'Outlook') {

        if ((total_Sunny2 == 0 && total_Overcast2 == 0) || (total_Overcast2 == 0 && total_Rain2 == 0) || (total_Sunny2 == 0 && total_Rain2 == 0)) {
            if (total_Sunny2 == 0 && total_Overcast2 == 0) {
                drawGrandChild1(root, 'Rain', for_rain_positive2, for_rain_negative2);
            }
            else if (total_Overcast2 == 0 && total_Rain2 == 0) {
                drawGrandChild1(root, 'Sunny', for_sunny_positive2, for_sunny_negative2);
            }
            else {
                drawGrandChild1(root, 'Overcast', for_Overcast_positive2, for_Overcast_negative2);
            }

        }
        else if (total_Sunny2 == 0 || total_Overcast2 == 0 || total_Rain2 == 0) {
            if (total_Sunny2 == 0) {
                drawGrandChild2(root, 'Overcast', 'Rain', for_Overcast_positive2, for_Overcast_negative2, for_rain_positive2, for_rain_negative2);
            }
            else if (total_Overcast2 == 0) {
                drawGrandChild2(root, 'Sunny', 'Rain', for_sunny_positive2, for_sunny_negative2, for_rain_positive2, for_rain_negative2);
            }
            else {
                drawGrandChild2(root, 'Sunny', 'Overcast', for_sunny_positive2, for_sunny_negative2, for_Overcast_positive2, for_Overcast_negative2);
            }
        }
        else {

            drawGrandChild3(root, 'Sunny', 'Overcast', 'Rain', for_sunny_positive2, for_sunny_negative2, for_Overcast_positive2, for_Overcast_negative2, for_rain_positive2, for_rain_negative2);

        }

    }
    else if (root == 'Temperature') {

        if ((total_Hot2 == 0 && total_Mild2 == 0) || (total_Mild2 == 0 && total_Cool2 == 0) || (total_Hot2 == 0 && total_Cool2 == 0)) {
            if (total_Hot2 == 0 && total_Mild2 == 0) {
                drawGrandChild1(root, 'Cool', for_cool_positive2, for_cool_negative2);
            }
            else if (total_Mild2 == 0 && total_Cool2 == 0) {
                drawGrandChild1(root, 'Hot', for_hot_positive2, for_hot_negative2);
            }
            else {
                drawGrandChild1(root, 'Mild', for_mild_positive2, for_mild_negative2);
            }
        }
        else if (total_Hot2 == 0 || total_Mild2 == 0 || total_Cool2 == 0) {
            if (total_Hot2 == 0 && total_Mild2 != 0) {
                drawGrandChild2(root, 'Mild', 'Cool', for_mild_positive2, for_mild_negative2, for_cool_positive2, for_cool_negative2);
            }
            else if (total_Mild2 == 0 && total_Hot2 != 0) {
                drawGrandChild2(root, 'Hot', 'Cool', for_hot_positive2, for_hot_negative2, for_cool_positive2, for_cool_negative2);
            }
            else {
                drawGrandChild2(root, 'Hot', 'Mild', for_hot_positive2, for_hot_negative2, for_mild_positive2, for_mild_negative2);
            }

        }
        else {
            drawGrandChild3(root, 'Hot', 'Mild', 'Cool', for_hot_positive2, for_hot_negative2, for_mild_positive2, for_mild_negative2, for_cool_positive2, for_cool_negative2);
        }
    }
    else if (root == 'Humidity') {

        if (total_High2 == 0 || total_Normal2 == 0) {
            if (total_High2 == 0 && total_Normal2 != 0) {
                drawGrandChild1(root, 'Normal', for_normal_positive2, for_normal_negative2);
            }
            else if (total_Normal2 == 0 && total_High2 != 0) {
                drawGrandChild1(root, 'High', for_high_positive2, for_high_negative2);
            }

        }
        else {
            drawGrandChild2(root, 'High', 'Normal', for_high_positive2, for_high_negative2, for_normal_positive2, for_normal_negative2);

        }
    }
    else if (root == 'Wind') {

        if (total_Weak2 == 0 || total_Strong2 == 0) {
            if (total_Weak2 == 0 && total_Strong2 != 0) {
                drawGrandChild1(root, 'Strong', for_strong_positive2, for_strong_negative2);
            }
            else {
                drawGrandChild1(root, 'Weak', for_weak_positive2, for_weak_negative2);
            }

        }
        else {

            drawGrandChild2(root, 'Weak', 'Strong', for_weak_positive2, for_weak_negative2, for_strong_positive2, for_strong_negative2);
        }
    }
}

var simple_chart_config;
async function drawChart1(root, x, pos, neg) {
    simple_chart_config = {
        chart: {
            container: "#OrganiseChart-simple",
            animateOnInit: true,
            animation: {
                nodeAnimation: "easeInOutQuart", // Animation easing function for nodes
                nodeSpeed: 500, // Animation speed for nodes in milliseconds
                connectorsSpeed: 500 // Animation speed for connectors in milliseconds
            },
        },

        nodeStructure: {
            text: {
                name: root,
                title: "+" + pos + ', -' + neg
            },
            children: [

                {
                    text: { name: x },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                }

            ]
        }
    };


    new Treant(simple_chart_config);
    traverse_title(simple_chart_config.nodeStructure, 0)
    await waitforme(1500);
    alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
    document.getElementById("nextbt").disabled = false;
    var temp2 = document.getElementById('resetIGtable')
    temp2.onclick = function () { resetTree(simple_chart_config) }
}

async function drawChart2(root, x, y, pos1, neg1, pos2, neg2) {
    simple_chart_config = {
        chart: {
            container: "#OrganiseChart-simple",
            animateOnInit: true,
            animation: {
                nodeAnimation: "easeInOutQuart", // Animation easing function for nodes
                nodeSpeed: 500, // Animation speed for nodes in milliseconds
                connectorsSpeed: 500 // Animation speed for connectors in milliseconds
            },
        },

        nodeStructure: {
            text: { name: root },
            children: [
                {
                    text: {
                        name: x,
                        title: "+" + pos1 + ', -' + neg1
                    },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                },
                {
                    text: {
                        name: y,
                        title: "+" + pos2 + ', -' + neg2
                    },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                }
            ]
        }
    };

    new Treant(simple_chart_config);
    traverse_title(simple_chart_config.nodeStructure, 0)
    await waitforme(1500);
    alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
    document.getElementById("nextbt").disabled = false;
    var temp2 = document.getElementById('resetIGtable')
    temp2.onclick = function () { resetTree(simple_chart_config) }
}

async function drawChart3(root, x, y, z, pos1, neg1, pos2, neg2, pos3, neg3) {
    simple_chart_config = {
        chart: {
            container: "#OrganiseChart-simple",

            animateOnInit: true,
            animation: {
                nodeAnimation: "easeInOutQuart", // Animation easing function for nodes
                nodeSpeed: 500, // Animation speed for nodes in milliseconds
                connectorsSpeed: 500 // Animation speed for connectors in milliseconds
            },
        },

        nodeStructure: {
            text: { name: root },
            children: [
                {
                    text: {
                        name: x,
                        title: "+" + pos1 + ', -' + neg1
                    },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                },
                {
                    text: {
                        name: y,
                        title: "+" + pos2 + ', -' + neg2
                    },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                },
                {
                    text: {
                        name: z,
                        title: "+" + pos3 + ', -' + neg3
                    },
                    HTMLclass: "nodeC",
                    children: [] // No grandchildren initially
                }
            ]
        }
    };


    new Treant(simple_chart_config);
    traverse_title(simple_chart_config.nodeStructure, 0);
    await waitforme(1500);
    alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
    document.getElementById("nextbt").disabled = false;
    var temp2 = document.getElementById('resetIGtable')
    temp2.onclick = function () { resetTree(simple_chart_config) }
}


var childCount;
// Function to count children for each node
function countChildren(node) {
    if (!node.children) return 0;
    return node.children.length;
}

// Function to traverse the decision tree and count children for each node
function traverseAndCount(node) {
    childCount = countChildren(node);
    console.log("Node:", node.text.name, "Children Count:", childCount);
}

var flagDraw;
async function drawGrandChild1(root, child, pos, neg) {

    flagDraw = 0;

    function calculateNodeLevelAndChildNumber(node, level, parentChildNumber) {
        // Check if the node has children
        if (node.children) {

            //   var nonEmptyChildCount = node.children.filter(child => child.children && child.children.length > 0).length;
            for (var index = 0; index < node.children.length; index++) {

                var child = node.children[index];
                traverseAndCount(child)

                // Calculate the level of the child node (current level + 1)
                var childLevel = level + 1;

                // Calculate the child number of the child node
                var childNumber = index + 1;

                // Access the name, level, and child number of the child node
                var childName = child.text.name;

                var childNameTitle = child.text.title;


                console.log(childNameTitle)
                if (child.text.title) {
                    if (childNameTitle.includes("0")) {
                        // do nothing
                    }
                    else if (childCount == 0 && flagDraw == 0) {
                        child.children.push({
                            text: {
                                name: root,
                            },
                            children: []
                        },
                        );

                        child.children[0].children.push(
                            {
                                text: {
                                    name: child,
                                    title: "+" + pos + ', -' + neg
                                },
                                HTMLclass: "nodeC",
                                children: []
                            }
                        );
                        new Treant(simple_chart_config);
                        index = node.children.length; flagDraw = 1;

                    }

                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    // Recursively calculate the level and child number of the child node's children
                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }

                else {
                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }

            }
        }
    }
    // Call the function to calculate the level and child number of each node starting from the root node
    calculateNodeLevelAndChildNumber(simple_chart_config.nodeStructure, 0, 0);


    traverse(simple_chart_config.nodeStructure);

    if (noChild == titleZero) {
        var temp = document.getElementById('nextbt2')
        temp.onclick = function () { tonexttAnalysis(); }
        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'No further splitting required!!');
        document.getElementById("nextbt2").disabled = false;
    }
    else {

        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
        document.getElementById("nextbt2").disabled = false;
        traverse_title(simple_chart_config.nodeStructure, 0)
    }

    var temp2 = document.getElementById('reset4')
    temp2.disabled = false;
    temp2.onclick = function () { resetTree(simple_chart_config) }
}

async function drawGrandChild2(root, child1, child2, pos1, neg1, pos2, neg2) {
    flagDraw = 0;
    function calculateNodeLevelAndChildNumber(node, level, parentChildNumber) {
        // Check if the node has children
        if (node.children) {

            //   var nonEmptyChildCount = node.children.filter(child => child.children && child.children.length > 0).length;
            for (var index = 0; index < node.children.length; index++) {
                var child = node.children[index];
                traverseAndCount(child)

                // Calculate the level of the child node (current level + 1)
                var childLevel = level + 1;

                // Calculate the child number of the child node
                var childNumber = index + 1;

                // Access the name, level, and child number of the child node
                var childName = child.text.name;

                var childNameTitle = child.text.title;

                console.log(childNameTitle)
                if (child.text.title) {
                    if (childNameTitle.includes("0")) {
                        // do nothing
                    }
                    else if (childCount == 0 && flagDraw == 0) {
                        flagDraw = 1;
                        child.children.push({
                            text: {
                                name: root,
                            },
                            children: []
                        },
                        );

                        child.children[0].children.push(
                            {
                                text: {
                                    name: child1,
                                    title: "+" + pos1 + ', -' + neg1
                                },
                                HTMLclass: "nodeC",
                                children: []
                            },
                            {
                                text: {
                                    name: child2,
                                    title: "+" + pos2 + ', -' + neg2
                                },
                                HTMLclass: "nodeC",
                                children: []
                            },
                        );
                        new Treant(simple_chart_config);
                        index = node.children.length;

                        console.log('index: ', index)
                        console.log('flagDraw: ', flagDraw)
                        return;
                    }

                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    // Recursively calculate the level and child number of the child node's children
                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }

                else {
                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }

            }
        }
    }
    // Call the function to calculate the level and child number of each node starting from the root node
    calculateNodeLevelAndChildNumber(simple_chart_config.nodeStructure, 0, 0);


    traverse(simple_chart_config.nodeStructure);

    if (noChild == titleZero) {
        var temp = document.getElementById('nextbt2')
        temp.onclick = function () { tonexttAnalysis(); }
        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'No further splitting required!!');
        document.getElementById("nextbt2").disabled = false;
    }
    else {

        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
        document.getElementById("nextbt2").disabled = false;
        traverse_title(simple_chart_config.nodeStructure, 0)
    }
    var temp2 = document.getElementById('reset4')
    temp2.disabled = false;
    temp2.onclick = function () {
        resetTree(simple_chart_config);
    }
}

async function drawGrandChild3(root, child1, child2, child3, pos1, neg1, pos2, neg2, pos3, neg3) {
    flagDraw = 0;
    function calculateNodeLevelAndChildNumber(node, level, parentChildNumber) {
        // Check if the node has children
        if (node.children) {

            //   var nonEmptyChildCount = node.children.filter(child => child.children && child.children.length > 0).length;
            for (var index = 0; index < node.children.length; index++) {

                var child = node.children[index];
                traverseAndCount(child)

                // Calculate the level of the child node (current level + 1)
                var childLevel = level + 1;

                // Calculate the child number of the child node
                var childNumber = index + 1;

                // Access the name, level, and child number of the child node
                var childName = child.text.name;

                var childNameTitle = child.text.title;


                console.log(childNameTitle)
                if (child.text.title) {
                    if (childNameTitle.includes("0")) {
                        // do nothing

                    }
                    else if (childCount == 0 && flagDraw == 0) {
                        child.children.push({
                            text: {
                                name: root,
                            },
                            children: []
                        },
                        );

                        child.children[0].children.push(
                            {
                                text: {
                                    name: child1,
                                    title: "+" + pos1 + ', -' + neg1
                                },
                                HTMLclass: "nodeC",
                                children: []
                            },
                            {
                                text: {
                                    name: child2,
                                    title: "+" + pos2 + ', -' + neg2
                                },
                                HTMLclass: "nodeC",
                                children: []
                            },
                            {
                                text: {
                                    name: child3,
                                    title: "+" + pos3 + ', -' + neg3
                                },
                                HTMLclass: "nodeC",
                                children: []
                            },
                        );
                        new Treant(simple_chart_config);
                        index = node.children.length; flagDraw = 1;

                    }

                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    // Recursively calculate the level and child number of the child node's children
                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }

                else {
                    console.log("Node:", childName, "Level:", childLevel, "Child Number:", childNumber, "Non-empty Child Count:", childCount);

                    if (flagDraw == 0)
                        calculateNodeLevelAndChildNumber(child, childLevel, childNumber);
                }


            }
        }
    }
    // Call the function to calculate the level and child number of each node starting from the root node
    calculateNodeLevelAndChildNumber(simple_chart_config.nodeStructure, 0, 0);

    new Treant(simple_chart_config);
    traverse(simple_chart_config.nodeStructure);

    if (noChild == titleZero) {
        var temp = document.getElementById('nextbt2')
        temp.onclick = function () { tonexttAnalysis(); }
        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'No further splitting required!!');
        document.getElementById("nextbt2").disabled = false;
    }
    else {
        traverse_title(simple_chart_config.nodeStructure, 0)
        await waitforme(1500);
        alerts('info', 'Now, click on <b style="color:#0070C0">NEXT</b> button.', 'Split further!!');
        document.getElementById("nextbt2").disabled = false;
    }
    var temp2 = document.getElementById('reset4')
    temp2.onclick = function () { resetTree(simple_chart_config) }
}

var noChild; var titleZero;
function traverse(node) {
    noChild = 0; titleZero = 0;
    var childCount = countChildren(node);
    console.log("Node:", node.text.name, "Children Count:", childCount);
    if (childCount == 0) {
        noChild++;
        if (node.text.title) {

            if (node.text.title.includes("0")) {
                titleZero++;
                console.log("Error: Node title contains '0'");
                // Exit the function if the title contains "0"
            }
        }
    }
    if (node.children) {
        node.children.forEach(function (child) {
            traverse(child);
        });
    }
}

// Function to find the parent node of a given child node
function findParentNode(root, childNodeName) {
    // Check if the current root node has children
    if (root.children && root.children.length > 0) {
        // Iterate through the children
        for (var i = 0; i < root.children.length; i++) {
            var child = root.children[i];
            // Check if the child node matches the target child node
            if (child.text.name === childNodeName) {
                return root; // Return the parent node
            }
            // Recursively search in the subtree of the current child
            var parent = findParentNode(child, childNodeName);
            if (parent) {
                return parent; // If found, return the parent node
            }
        }
    }
    return null; // Return null if not found
}

// Function to check if a grandparent exists for a given node
function hasGrandparent(node) {
    if (!node || !node.parent) {
        return false; // No parent, hence no grandparent
    }
    return !!node.parent.parent; // Check if grandparent exists
}

var flags;
function traverse_title(node, level) {
    flags = 0;
    var childCount = countChildren(node);
    console.log("Node:", node.text.name, "Children Count:", childCount);
    if (node.text.title && childCount == 0) {
        if (node.text.title.includes("0")) {

        }
        else {
            if (hasGrandparent(childNodeName) || level == 1) {
                if (level == 1) {
                    flag = [1, 1, 1, 1]
                }

                copytable('dataPointsTable', 'copiedTable');
            }


            var childNodeName = node.text.name;
            var parentNode = findParentNode(simple_chart_config.nodeStructure, childNodeName);
            if (parentNode) {
                console.log("Parent of", childNodeName, "is", parentNode.text.name);
                root = parentNode.text.name;
                flags = 1;
                makeTable(node.text.name, parentNode.text.name.toUpperCase())
            } else {
                console.log("No parent found for", childNodeName);
            }

        }

    }


    if (node.children) {
        node.children.forEach(function (child) {
            var childLevel = level + 1;
            if (flags == 0) {
                traverse_title(child, childLevel);
            }

            else {
                return;
            }

        });
        return;
    }


}


function traverse_node(node, level) {
    var childCount = countChildren(node);
    // var childLevel = level;
    console.log("Node:", node.text.name, "Children Count:", childCount);
    if (childCount != 0) {
        if (node.text.title) {
            // node.text.title='';
            new Treant(simple_chart_config);
        }

    }
    else if (childCount == 0) {
        if (node.text.title) {
            if (node.text.title.includes("-0")) {

                node.children.push({
                    text: {
                        name: 'Yes',
                    },
                    HTMLclass: "nodeC",
                    children: []
                },
                );
                new Treant(simple_chart_config);
                console.log("Error: Node title contains '-0'");

            }
            else if (node.text.title.includes("+0")) {

                node.children.push({
                    text: {
                        name: 'No',
                    },
                    HTMLclass: "nodeC",
                    children: []
                },
                );

                new Treant(simple_chart_config, level);
                console.log("Error: Node title contains '+0'");
            }
        }
    }
    if (node.children) {
        node.children.forEach(function (child) {
            var childLevel = level + 1;
            traverse_node(child, childLevel);
        });
    }
}

// Function to reset the tree
function resetTree(simple_chart_config) {
    // Remove existing tree container if it exists
    var existingTreeContainer = document.getElementById("OrganiseChart-simple");
    if (existingTreeContainer) {
        var rect = existingTreeContainer.getBoundingClientRect();
        existingTreeContainer.parentNode.removeChild(existingTreeContainer);
    }

    // Create a new container for the tree
    var newTreeContainer = document.createElement("div");
    newTreeContainer.id = "OrganiseChart-simple";
    newTreeContainer.className = "chart";
    //newTreeContainer.style.marginTop='-140px';
    newTreeContainer.style.position = "absolute";
    newTreeContainer.style.left = rect.left + "px";
    newTreeContainer.style.top = rect.top + "px";
    document.body.appendChild(newTreeContainer);

    // Initialize Treant.js with the new data and container
    new Treant(simple_chart_config);
}

var node;
function makeTable(nodes, roots) {
    node = nodes;
    console.log(nodes, root)
    var table = document.getElementById("copiedTable");
    var rowCount = table.rows.length;

    console.log(rowCount)
    var columnCount = 0;

    if (table.rows.length > 0) {
        // Assuming all rows have the same number of cells
        columnCount = table.rows[0].cells.length;
    }

    console.log('columnCount: ' + columnCount)
    var index = 0;
    for (i = 0; i < columnCount - 1; i++) {
        var row = table.rows[0];
        var cells = row.cells;

        if (cells[i].innerHTML == roots) {
            index = i
        }
    }

    for (i = 1; i < rowCount; i++) {

        var row = table.rows[i];
        var cells = row.cells;

        if (cells[index].innerHTML !== nodes) {
            row.remove();
            i--;
            rowCount--;
        }
    }

    var rowCount2 = table.rows.length;
    console.log(rowCount2)
    for (i = 0; i < rowCount2; i++) {
        var row = table.rows[i];
        var cells = row.cells;
        cells[index].remove();
        if (i != 0) {
            cells[0].innerHTML = i;
        }
    }

    totals(root);

}


let forpositive2 = 0
let fornegative2 = 0
let total_Sunny2 = 0
let total_Overcast2 = 0
let total_Rain2 = 0
let total_Hot2 = 0
let total_Mild2 = 0
let total_Cool2 = 0
let total_High2 = 0
let total_Normal2 = 0
let total_Weak2 = 0
let total_Strong2 = 0
let for_sunny_positive2 = 0
let for_sunny_negative2 = 0
let for_Overcast_positive2 = 0
let for_Overcast_negative2 = 0
let for_rain_positive2 = 0
let for_rain_negative2 = 0
let for_hot_positive2 = 0
let for_hot_negative2 = 0
let for_mild_positive2 = 0
let for_mild_negative2 = 0
let for_cool_positive2 = 0
let for_cool_negative2 = 0
let for_high_positive2 = 0
let for_high_negative2 = 0
let for_normal_positive2 = 0
let for_normal_negative2 = 0
let for_weak_positive2 = 0
let for_weak_negative2 = 0
let for_strong_positive2 = 0
let for_strong_negative2 = 0
let total21 = 0;

function initialize() {
    forpositive2 = 0
    fornegative2 = 0
    total_Sunny2 = 0
    total_Overcast2 = 0
    total_Rain2 = 0
    total_Hot2 = 0
    total_Mild2 = 0
    total_Cool2 = 0
    total_High2 = 0
    total_Normal2 = 0
    total_Weak2 = 0
    total_Strong2 = 0
    for_sunny_positive2 = 0
    for_sunny_negative2 = 0
    for_Overcast_positive2 = 0
    for_Overcast_negative2 = 0
    for_rain_positive2 = 0
    for_rain_negative2 = 0
    for_hot_positive2 = 0
    for_hot_negative2 = 0
    for_mild_positive2 = 0
    for_mild_negative2 = 0
    for_cool_positive2 = 0
    for_cool_negative2 = 0
    for_high_positive2 = 0
    for_high_negative2 = 0
    for_normal_positive2 = 0
    for_normal_negative2 = 0
    for_weak_positive2 = 0
    for_weak_negative2 = 0
    for_strong_positive2 = 0
    for_strong_negative2 = 0
    total21 = 0;
}


function totals(root) {
    initialize();
    var table = document.getElementById("copiedTable");
    var rowCount = table.rows.length;
    total21 = rowCount - 1;


    var columnCount = 0;

    if (table.rows.length > 0) {
        // Assuming all rows have the same number of cells
        columnCount = table.rows[0].cells.length;
    }

    console.log('columnCount: ' + columnCount)

    for (var i = 0; i < rowCount; i++) {
        var rowData = table.rows[i];
        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
            forpositive2 = forpositive2 + 1
        }
        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
            fornegative2 = fornegative2 + 1
        }
    }

    if (root == 'Outlook') {

        var x = 0; var y = 0; var z = 0;
        for (a = 1; a < columnCount; a++) {
            var rowData = table.rows[0];
            if (rowData.cells[a].innerHTML == 'TEMPERATURE') {
                x = a;
            }
            else if (rowData.cells[a].innerHTML == 'HUMIDITY') {
                y = a;
            }
            else if (rowData.cells[a].innerHTML == 'WIND') {
                z = a;
            }

        }
        console.log(x, y, z)

        //total temp attributes
        if (x != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];

                if (rowData.cells[x].innerHTML == "Hot") {
                    total_Hot2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_hot_positive2 = for_hot_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_hot_negative2 = for_hot_negative2 + 1;
                    }
                }

                else if (rowData.cells[x].innerHTML == "Mild") {
                    {
                        total_Mild2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_mild_positive2 = for_mild_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_mild_negative2 = for_mild_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[x].innerHTML == "Cool") {
                    {
                        total_Cool2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_cool_positive2 = for_cool_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_cool_negative2 = for_cool_negative2 + 1;
                        }
                    }
                }
            }
        }



        //total humd attributes
        if (y != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[y].innerHTML == "High") {
                    total_High2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_high_positive2 = for_high_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_high_negative2 = for_high_negative2 + 1;
                    }
                }

                else if (rowData.cells[y].innerHTML == "Normal") {
                    {
                        total_Normal2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_normal_positive2 = for_normal_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_normal_negative2 = for_normal_negative2 + 1;
                        }
                    }
                }
            }
        }



        //total wind attributes
        if (z != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[z].innerHTML == "Weak") {
                    total_Weak2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_weak_positive2 = for_weak_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_weak_negative2 = for_weak_negative2 + 1;
                    }
                }

                else if (rowData.cells[z].innerHTML == "Strong") {
                    {
                        total_Strong2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_strong_positive2 = for_strong_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_strong_negative2 = for_strong_negative2 + 1;
                        }
                    }
                }
            }
        }

        console.log(total_Weak2, for_strong_positive2, for_strong_negative2)

    }
    else if (root == 'Temperature') {
        var x = 0; var y = 0; var z = 0;
        for (a = 1; a < columnCount; a++) {
            var rowData = table.rows[0];
            if (rowData.cells[a].innerHTML == 'OUTLOOK') {
                x = a;
            }
            else if (rowData.cells[a].innerHTML == 'HUMIDITY') {
                y = a;
            }
            else if (rowData.cells[a].innerHTML == 'WIND') {
                z = a;
            }

        }
        console.log(x, y, z)
        if (x != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[x].innerHTML == "Sunny") {
                    total_Sunny2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_sunny_positive2 = for_sunny_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_sunny_negative2 = for_sunny_negative2 + 1;
                    }

                }

                else if (rowData.cells[x].innerHTML == "Overcast") {
                    {
                        total_Overcast2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_Overcast_positive2 = for_Overcast_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_Overcast_negative2 = for_Overcast_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[x].innerHTML == "Rain") {
                    {
                        total_Rain2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_rain_positive2 = for_rain_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_rain_negative2 = for_rain_negative2 + 1;
                        }
                    }
                }
            }

        }

        //total humd attributes
        if (y != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[y].innerHTML == "High") {
                    total_High2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_high_positive2 = for_high_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_high_negative2 = for_high_negative2 + 1;
                    }
                }

                else if (rowData.cells[y].innerHTML == "Normal") {
                    {
                        total_Normal2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_normal_positive2 = for_normal_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_normal_negative2 = for_normal_negative2 + 1;
                        }
                    }
                }
            }

        }

        //total wind attributes
        if (z != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[z].innerHTML == "Weak") {
                    total_Weak2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_weak_positive2 = for_weak_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_weak_negative2 = for_weak_negative2 + 1;
                    }
                }

                else if (rowData.cells[z].innerHTML == "Strong") {
                    {
                        total_Strong2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_strong_positive2 = for_strong_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_strong_negative2 = for_strong_negative2 + 1;
                        }
                    }
                }
            }
        }


    }
    else if (root == 'Humidity') {
        var x = 0; var y = 0; var z = 0;
        for (a = 1; a < columnCount; a++) {
            var rowData = table.rows[0];
            if (rowData.cells[a].innerHTML == 'OUTLOOK') {
                x = a;
            }
            else if (rowData.cells[a].innerHTML == 'TEMPERATURE') {
                y = a;
            }
            else if (rowData.cells[a].innerHTML == 'WIND') {
                z = a;
            }

        }
        console.log(x, y, z)
        //outlook
        if (x != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[x].innerHTML == "Sunny") {
                    total_Sunny2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_sunny_positive2 = for_sunny_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_sunny_negative2 = for_sunny_negative2 + 1;
                    }
                }

                else if (rowData.cells[x].innerHTML == "Overcast") {
                    {
                        total_Overcast2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_Overcast_positive2 = for_Overcast_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_Overcast_negative2 = for_Overcast_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[x].innerHTML == "Rain") {
                    {
                        total_Rain2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_rain_positive2 = for_rain_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_rain_negative2 = for_rain_negative2 + 1;
                        }
                    }
                }
            }

        }


        //total temp attributes
        if (y != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[y].innerHTML == "Hot") {
                    total_Hot2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_hot_positive2 = for_hot_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_hot_negative2 = for_hot_negative2 + 1;
                    }
                }

                else if (rowData.cells[y].innerHTML == "Mild") {
                    {
                        total_Mild2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_mild_positive2 = for_mild_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_mild_negative2 = for_mild_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[y].innerHTML == "Cool") {
                    {
                        total_Cool2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_cool_positive2 = for_cool_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_cool_negative2 = for_cool_negative2 + 1;
                        }
                    }
                }

            }
        }



        //total wind attributes
        if (z != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[z].innerHTML == "Weak") {
                    total_Weak2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_weak_positive2 = for_weak_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_weak_negative2 = for_weak_negative2 + 1;
                    }
                }

                else if (rowData.cells[z].innerHTML == "Strong") {
                    {
                        total_Strong2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_strong_positive2 = for_strong_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_strong_negative2 = for_strong_negative2 + 1;
                        }
                    }
                }
            }
        }


    }
    else if (root == 'Wind') {

        var x = 0; var y = 0; var z = 0;
        for (a = 1; a < columnCount; a++) {
            var rowData = table.rows[0];
            if (rowData.cells[a].innerHTML == 'OUTLOOK') {
                x = a;
            }
            else if (rowData.cells[a].innerHTML == 'TEMPERATURE') {
                y = a;
            }
            else if (rowData.cells[a].innerHTML == 'HUMIDITY') {
                z = a;
            }

        }
        console.log(x, y, z)

        //outlook
        if (x != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];


                if (rowData.cells[x].innerHTML == "Sunny") {
                    total_Sunny2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_sunny_positive2 = for_sunny_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_sunny_negative2 = for_sunny_negative2 + 1;
                    }
                }

                else if (rowData.cells[x].innerHTML == "Overcast") {
                    {
                        total_Overcast2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_Overcast_positive2 = for_Overcast_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_Overcast_negative2 = for_Overcast_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[x].innerHTML == "Rain") {
                    {
                        total_Rain2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_rain_positive2 = for_rain_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_rain_negative2 = for_rain_negative2 + 1;
                        }
                    }
                }

            }

        }

        //total temp attributes
        if (y != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[y].innerHTML == "Hot") {
                    total_Hot2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_hot_positive2 = for_hot_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_hot_negative2 = for_hot_negative2 + 1;
                    }
                }

                else if (rowData.cells[y].innerHTML == "Mild") {
                    {
                        total_Mild2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_mild_positive2 = for_mild_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_mild_negative2 = for_mild_negative2 + 1;
                        }
                    }
                }
                else if (rowData.cells[y].innerHTML == "Cool") {
                    {
                        total_Cool2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_cool_positive2 = for_cool_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_cool_negative2 = for_cool_negative2 + 1;
                        }
                    }
                }

            }

        }

        //total humd attributes
        if (z != 0) {
            for (var i = 0; i < rowCount; i++) {
                var rowData = table.rows[i];
                if (rowData.cells[z].innerHTML == "High") {
                    total_High2++;
                    if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                        for_high_positive2 = for_high_positive2 + 1;
                    }
                    else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                        for_high_negative2 = for_high_negative2 + 1;
                    }
                }

                else if (rowData.cells[z].innerHTML == "Normal") {
                    {
                        total_Normal2++;
                        if (rowData.cells[columnCount - 1].innerHTML == "Yes") {
                            for_normal_positive2 = for_normal_positive2 + 1;
                        }
                        else if (rowData.cells[columnCount - 1].innerHTML == "No") {
                            for_normal_negative2 = for_normal_negative2 + 1;
                        }
                    }
                }
            }

        }

    }
    var t = document.getElementsByClassName('totals')

    for (var j = 0; j < t.length; j++) {
        t[j].innerHTML = total21;
    }
}

var row2ii = 1; var flag = [1, 1, 1, 1];
function creatE() {

    var tTable = document.getElementById("copiedTable2")
    var tRows = tTable.rows;

    var v1Span = document.getElementById("v1");
    var v2Span = document.getElementById("v2");
    var v3Span = document.getElementById("v3");


    if (root == 'Temperature') {
        if (flag[1] == 1 && flag[2] == 1 && flag[3] == 1) {
            v1Span.innerHTML = 'OUTLOOK';
            insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
            v2Span.innerHTML = 'HUMIDITY';
            insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            v3Span.innerHTML = 'WIND';
            insertInCopyTableWind(tRows, row2ii, v3Span, tTable);
        }
        else if (flag[1] == 1 && flag[2] == 1 && flag[3] == 0 || flag[2] == 1 && flag[3] == 1 && flag[1] == 0 || flag[1] == 1 && flag[3] == 1 && flag[2] == 0) {
            if (flag[1] == 1 && flag[2] == 1 && flag[3] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
                v2Span.innerHTML = 'HUMIDITY';
                insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[2] == 1 && flag[3] == 1 && flag[1] == 0) {
                v1Span.innerHTML = 'HUMIDITY';
                insertInCopyTableHumidity(tRows, row2ii, v1Span, tTable);
                v2Span.innerHTML = 'WIND';
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[1] == 1 && flag[3] == 1 && flag[2] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
                v2Span.innerHTML = 'WIND';
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
        }
        else if (flag[1] == 1 && flag[2] == 0 && flag[3] == 0 || flag[1] == 0 && flag[2] == 1 && flag[3] == 0 || flag[1] == 0 && flag[2] == 0 && flag[3] == 1) {
            if (flag[1] == 1) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[2] == 1) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[3] == 1) {
                v1Span.innerHTML = 'WIND';
                insertInCopyTableWind(tRows, row2ii, v1Span, tTable);
            }
        }

        flag[0] = 0;

    }

    else if (root == 'Outlook') {
        if (flag[0] == 1 && flag[2] == 1 && flag[3] == 1) {
            v1Span.innerHTML = 'TEMPERATURE';
            v2Span.innerHTML = 'HUMIDITY';
            v3Span.innerHTML = 'WIND';
            insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable)
            insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            insertInCopyTableWind(tRows, row2ii, v3Span, tTable);
        }
        else if (flag[0] == 1 && flag[2] == 1 && flag[3] == 0 || flag[2] == 1 && flag[3] == 1 && flag[0] == 0 || flag[0] == 1 && flag[3] == 1 && flag[2] == 0) {
            if (flag[0] == 1 && flag[2] == 1 && flag[3] == 0) {
                v1Span.innerHTML = 'TEMPERATURE';
                v2Span.innerHTML = 'HUMIDITY';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable)
                insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[2] == 1 && flag[3] == 1 && flag[0] == 0) {

                v1Span.innerHTML = 'HUMIDITY';
                v2Span.innerHTML = 'WIND';

                insertInCopyTableHumidity(tRows, row2ii, v1Span, tTable);
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[0] == 1 && flag[3] == 1 && flag[2] == 0) {
                v1Span.innerHTML = 'TEMPERATURE';
                v2Span.innerHTML = 'WIND';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable)
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
        }
        else if (flag[0] == 1 && flag[2] == 0 && flag[3] == 0 || flag[0] == 0 && flag[2] == 1 && flag[3] == 0 || flag[0] == 0 && flag[2] == 0 && flag[3] == 1) {
            if (flag[0] == 1) {
                v1Span.innerHTML = 'TEMPERATURE';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[2] == 1) {
                v1Span.innerHTML = 'HUMIDITY';
                insertInCopyTableHumidity(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[3] == 1) {
                v1Span.innerHTML = 'WIND';
                insertInCopyTableWind(tRows, row2ii, v1Span, tTable);
            }
        }

        flag[1] = 0;

    }
    else if (root == 'Humidity') {
        if (flag[0] == 1 && flag[1] == 1 && flag[3] == 1) {
            v1Span.innerHTML = 'OUTLOOK';
            v2Span.innerHTML = 'TEMPERATURE';
            v3Span.innerHTML = 'WIND';
            insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
            insertInCopyTableTemperature(tRows, row2ii, v2Span, tTable);
            insertInCopyTableWind(tRows, row2ii, v3Span, tTable);
        }
        else if (flag[0] == 1 && flag[1] == 1 && flag[3] == 0 || flag[1] == 1 && flag[3] == 1 && flag[0] == 0 || flag[0] == 1 && flag[3] == 1 && flag[1] == 0) {
            if (flag[0] == 1 && flag[1] == 1 && flag[3] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                v2Span.innerHTML = 'TEMPERATURE';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
                insertInCopyTableTemperature(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[1] == 1 && flag[3] == 1 && flag[0] == 0) {
                v1Span.innerHTML = 'TEMPERATURE';
                v2Span.innerHTML = 'WIND';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable);
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[0] == 1 && flag[3] == 1 && flag[1] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                v2Span.innerHTML = 'WIND';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable);
                insertInCopyTableWind(tRows, row2ii, v2Span, tTable);
            }
        }
        else if (flag[0] == 1 && flag[1] == 0 && flag[3] == 0 || flag[0] == 0 && flag[1] == 1 && flag[3] == 0 || flag[0] == 0 && flag[1] == 0 && flag[3] == 1) {
            if (flag[0] == 1) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
            }
            else if (flag[1] == 1) {
                v1Span.innerHTML = 'TEMPERATURE';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[3] == 1) {
                v1Span.innerHTML = 'WIND';
                insertInCopyTableWind(tRows, row2ii, v1Span, tTable);
            }
        }

        flag[2] = 0;
    }
    else if (root == 'Wind') {
        if (flag[0] == 1 && flag[1] == 1 && flag[2] == 1) {
            v1Span.innerHTML = 'OUTLOOK';
            v2Span.innerHTML = 'TEMPERATURE';
            v3Span.innerHTML = 'HUMIDITY';
            insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
            insertInCopyTableTemperature(tRows, row2ii, v2Span, tTable);
            insertInCopyTableHumidity(tRows, row2ii, v3Span, tTable);
        }
        else if (flag[0] == 1 && flag[1] == 1 && flag[2] == 0 || flag[1] == 1 && flag[2] == 1 && flag[0] == 0 || flag[0] == 1 && flag[2] == 1 && flag[1] == 0) {
            if (flag[0] == 1 && flag[1] == 1 && flag[2] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                v2Span.innerHTML = 'TEMPERATURE';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
                insertInCopyTableTemperature(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[1] == 1 && flag[2] == 1 && flag[0] == 0) {
                v1Span.innerHTML = 'TEMPERATURE';
                v2Span.innerHTML = 'HUMIDITY';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable);
                insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            }
            else if (flag[0] == 1 && flag[2] == 1 && flag[1] == 0) {
                v1Span.innerHTML = 'OUTLOOK';
                v2Span.innerHTML = 'HUMIDITY';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
                insertInCopyTableHumidity(tRows, row2ii, v2Span, tTable);
            }
        }
        else if (flag[0] == 1 && flag[1] == 0 && flag[2] == 0 || flag[0] == 0 && flag[1] == 1 && flag[2] == 0 || flag[0] == 0 && flag[1] == 0 && flag[2] == 1) {
            if (flag[0] == 1) {
                v1Span.innerHTML = 'OUTLOOK';
                insertInCopyTableOutlook(tRows, row2ii, v1Span, tTable)
            }
            else if (flag[1] == 1) {
                v1Span.innerHTML = 'TEMPERATURE';
                insertInCopyTableTemperature(tRows, row2ii, v1Span, tTable);
            }
            else if (flag[2] == 1) {
                v1Span.innerHTML = 'HUMIDITY';
                insertInCopyTableHumidity(tRows, row2ii, v1Span, tTable);
            }
        }

        flag[3] = 0;
    }

}



function insertInCopyTableOutlook(tRows, x, v1Span, tTable) {
    if ((total_Sunny2 == 0 && total_Overcast2 == 0) || (total_Overcast2 == 0 && total_Rain2 == 0) || (total_Rain2 == 0 && total_Sunny2 == 0)) {
        if (total_Sunny2 == 0 && total_Overcast2 == 0) {
            tRows[1].insertCell(1).innerHTML = "RAIN";
        }
        else if (total_Overcast2 == 0 && total_Rain2 == 0) {
            tRows[1].insertCell(1).innerHTML = "SUNNY";
        }
        else if (total_Rain2 == 0 && total_Sunny2 == 0) {
            tRows[1].insertCell(1).innerHTML = "OVERCAST";
        }
        tRows[1].insertCell(2).classList.add("tocheck2")
        tRows[1].insertCell(3).classList.add("tocheck3")

        x++
        row2ii = x;
    }
    else if (total_Sunny2 == 0 || total_Overcast2 == 0 || total_Rain2 == 0) {
        v1Span.rowSpan = 2;
        if (total_Sunny2 == 0) {
            for (x = 1; x < 3; x++) {
                if (x == 1) {
                    tRows[1].insertCell(1).innerHTML = "OVERCAST"
                    tRows[1].insertCell(2).classList.add("tocheck2")
                    c = tRows[1].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2
                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "RAIN";
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }

        }
        else if (total_Overcast2 == 0) {
            for (x = 1; x < 3; x++) {
                if (x == 1) {
                    tRows[1].insertCell(1).innerHTML = "SUNNY";
                    tRows[1].insertCell(2).classList.add("tocheck2")
                    c = tRows[1].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2
                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "RAIN"
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }

        }
        else if (total_Rain2 == 0) {
            for (x = 1; x < 3; x++) {
                if (x == 1) {
                    tRows[1].insertCell(1).innerHTML = "SUNNY"
                    tRows[1].insertCell(2).classList.add("tocheck2")
                    c = tRows[1].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2
                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "OVERCAST"
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }
        }
        row2ii = x;
    }
    else if (total_Sunny2 != 0 && total_Overcast2 != 0 && total_Rain2 != 0) {
        v1Span.rowSpan = 3;
        for (x = 1; x < 4; x++) {
            if (x == 1) {
                tRows[1].insertCell(1).innerHTML = "SUNNY"
                tRows[1].insertCell(2).classList.add("tocheck2")
                c = tRows[1].insertCell(3)
                c.classList.add("tocheck3")
                c.rowSpan = 3
            }
            else if (x == 2) {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "OVERCAST"
                rowt.insertCell(1).classList.add("tocheck2")
            }
            else {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "RAIN"
                rowt.insertCell(1).classList.add("tocheck2")
            }

        }
        row2ii = x;
    }
}
function insertInCopyTableTemperature(tRows, x, v1Span, tTable) {
    if ((total_Hot2 == 0 && total_Mild2 == 0) || (total_Mild2 == 0 && total_Cool2 == 0) || (total_Cool2 == 0 && total_Hot2 == 0)) {
        if (total_Hot2 == 0 && total_Mild2 == 0) {
            tRows[x].insertCell(1).innerHTML = "COOL"
        }
        else if (total_Mild2 == 0 && total_Cool2 == 0) {
            tRows[x].insertCell(1).innerHTML = "HOT"
        }
        else if (total_Cool2 == 0 && total_Hot2 == 0) {
            tRows[x].insertCell(1).innerHTML = "MILD"

        }
        tRows[x].insertCell(2).classList.add("tocheck2")
        tRows[x].insertCell(3).classList.add("tocheck3")
        x++
        row2ii = x;
    }
    else if (total_Hot2 == 0 || total_Mild2 == 0 || total_Cool2 == 0) {
        v1Span.rowSpan = 2;
        var y = x + 2;
        if (total_Hot2 == 0) {
            var countss = 0;
            for (x; x < y; x++) {
                countss++;
                if (countss == 1) {
                    tRows[x].insertCell(1).innerHTML = "MILD"
                    tRows[x].insertCell(2).classList.add("tocheck2")
                    c = tRows[x].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2
                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "COOL"
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }

        }
        else if (total_Mild2 == 0) {
            var countss = 0;
            for (x; x < y; x++) {
                countss++;
                if (countss == 1) {
                    tRows[x].insertCell(1).innerHTML = "HOT"
                    tRows[x].insertCell(2).classList.add("tocheck2")
                    c = tRows[x].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2
                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "COOL"
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }
        }
        else if (total_Cool2 == 0) {
            var countss = 0;
            for (x; x < y; x++) {
                ++countss;
                if (countss == 1) {
                    tRows[x].insertCell(1).innerHTML = "HOT"
                    tRows[x].insertCell(2).classList.add("tocheck2")
                    c = tRows[x].insertCell(3)
                    c.classList.add("tocheck3")
                    c.rowSpan = 2

                }
                else {
                    var rowt = tTable.insertRow(x);
                    rowt.insertCell(0).innerHTML = "MILD"
                    rowt.insertCell(1).classList.add("tocheck2")
                }

            }
        }
        row2ii = x;
    }
    else if (total_Hot2 != 0 && total_Mild2 != 0 && total_Cool2 != 0) {
        v1Span.rowSpan = 3;
        var y = x + 3;
        var countss = 0;
        for (x; x < y; x++) {
            countss++;
            if (countss == 1) {

                tRows[x].insertCell(1).innerHTML = "HOT"
                tRows[x].insertCell(2).classList.add("tocheck2")
                c = tRows[x].insertCell(3)
                c.classList.add("tocheck3")
                c.rowSpan = 3
            }
            else if (countss == 2) {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "MILD"
                rowt.insertCell(1).classList.add("tocheck2")

            }
            else {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "COOL"
                rowt.insertCell(1).classList.add("tocheck2")
            }

        }
        row2ii = x;
    }
}
function insertInCopyTableHumidity(tRows, x, v2Span, tTable) {
    if (total_High2 == 0 || total_Normal2 == 0) {
        if (total_High2 == 0) {
            tRows[x].insertCell(1).innerHTML = "NORMAL"
            tRows[x].insertCell(2).classList.add("tocheck2")
        }
        else if (total_Normal2 == 0) {
            tRows[x].insertCell(1).innerHTML = "HIGH"
            tRows[x].insertCell(2).classList.add("tocheck2")
        }
        tRows[x].insertCell(3).classList.add("tocheck3")
        x++;
        row2ii = x;
    }
    else if (total_High2 != 0 && total_Normal2 != 0) {
        v2Span.rowSpan = 2;
        var y = x + 2;
        var countss = 0;
        for (x; x < y; x++) {
            countss++;
            if (countss == 1) {

                tRows[x].insertCell(1).innerHTML = "HIGH"
                tRows[x].insertCell(2).classList.add("tocheck2")
                c = tRows[x].insertCell(3)
                c.classList.add("tocheck3")
                c.rowSpan = 2
            }
            else {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "NORMAL"
                rowt.insertCell(1).classList.add("tocheck2")
            }

        }
        row2ii = x;
    }
}

function insertInCopyTableWind(tRows, x, v3Span, tTable) {
    if (total_Weak2 == 0 || total_Strong2 == 0) {
        if (total_Weak2 == 0) {
            tRows[x].insertCell(1).innerHTML = "STRONG"
            tRows[x].insertCell(2).classList.add("tocheck2")
        }
        else if (total_Strong2 == 0) {
            tRows[x].insertCell(1).innerHTML = "WEAK"
            tRows[x].insertCell(2).classList.add("tocheck2")
        }
        tRows[x].insertCell(3).classList.add("tocheck3")
        x++;
        row2ii = x;
    }
    else if (total_Weak2 != 0 && total_Strong2 != 0) {
        v3Span.rowSpan = 2;
        var y = x + 2;
        var countss = 0;
        for (x; x < y; x++) {
            countss++;
            if (countss == 1) {

                tRows[x].insertCell(1).innerHTML = "WEAK"
                tRows[x].insertCell(2).classList.add("tocheck2")
                c = tRows[x].insertCell(3)
                c.classList.add("tocheck3")
                c.rowSpan = 2
            }
            else {
                var rowt = tTable.insertRow(x);
                rowt.insertCell(0).innerHTML = "STRONG"
                rowt.insertCell(1).classList.add("tocheck2")
            }

        }
        row2ii = x;
    }
}

var tableEntropy;
async function findS() {

    let temp_p1 = parseInt(document.getElementById("pos1").value)
    let temp_p2 = parseInt(document.getElementById("pos2").value)
    let temp_n1 = parseInt(document.getElementById("neg1").value)
    let temp_n2 = parseInt(document.getElementById("neg2").value)

    let temp_1 = document.getElementById("pos1");
    let temp_3 = document.getElementById("pos2");
    let temp_11 = document.getElementById("neg1");
    let temp_13 = document.getElementById("neg2");

    let temp_result = document.getElementById("result");


    if (temp_p1 == forpositive2 && temp_p2 == forpositive2 && temp_n1 == fornegative2 && temp_n2 == fornegative2) {


        let x = forpositive / total21;
        let y = fornegative / total21;

        if (forpositive2 == 0 || fornegative2 == 0) {
            tableEntropy = 0;
        }
        else if (forpositive2 == fornegative2) {
            tableEntropy = 1;
        }
        else {
            tableEntropy = - x * Math.log2(x) - y * Math.log2(y);
            tableEntropy = tableEntropy.toFixed(2);
        }
        entropyValue = tableEntropy;
        temp_result.style.marginTop = "10px"
        temp_result.style.display = "block"
        temp_result.innerHTML = 'H(D<sub><i>' + node + '</i></sub>) = ' + tableEntropy;

        document.getElementById('addind').style.display = "none";
        document.getElementById('finds').disabled = true
        await waitforme(1000);
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "block";
        document.getElementById("b3").style.display = "block";
        document.getElementById("b4").style.display = "none";
        document.getElementById("b5").style.display = "block";
        var temp2 = document.getElementById('reset4')
        temp2.disabled = false;
        temp2.onclick = function () { toreset4() }
        document.getElementById("copiedTable2").style.display = "block";

        document.getElementById("copiedTable2").style.margin = "auto";
        document.getElementById("copiedTable2").style.width = "auto";
        document.getElementById("copiedTable2").style.marginTop = "50px";
        document.getElementById("copiedTable2").style.position = 'absolute';
    }

    //for incorrect values
    else {
        checkInvalid(temp_p1, temp_p2, temp_n1, temp_n2, temp_1, temp_3, temp_11, temp_13, forpositive2, fornegative2);
        return;
    }

    alerts('info', 'Click on the <b style="color:#0070C0">Entropy</b> button.', 'Now, calculate the Entropy for every attribute!!');
}


var E2index = 0;
var tdE;
function findEntropy() {

    tdE = document.getElementsByClassName("tocheck2");

    if (root == 'Outlook') {
        //total temp attributes

        if (total_Hot2 != 0) {
            evaluate(for_hot_positive2, for_hot_negative2, total_Hot2);
        }

        if (total_Mild2 != 0) {
            evaluate(for_mild_positive2, for_mild_negative2, total_Mild2);
        }
        if (total_Cool2 != 0) {
            evaluate(for_cool_positive2, for_cool_negative2, total_Cool2);
        }

        //total humd attributes

        if (total_High2 != 0) {
            evaluate(for_high_positive2, for_high_negative2, total_High2);
        }
        if (total_Normal2 != 0) {
            evaluate(for_normal_positive2, for_normal_negative2, total_Normal2);
        }

        //total wind attributes

        if (total_Weak2 != 0) {
            evaluate(for_weak_positive2, for_weak_negative2, total_Weak2);
        }
        if (total_Strong2 != 0) {
            evaluate(for_strong_positive2, for_strong_negative2, total_Strong2);
        }

    }
    else if (root == 'Temperature') {

        if (total_Sunny2 != 0) {
            evaluate(for_sunny_positive2, for_sunny_negative2, total_Sunny2);
        }

        if (total_Overcast2 != 0) {
            evaluate(for_Overcast_positive2, for_Overcast_negative2, total_Overcast2);
        }
        if (total_Rain2 != 0) {
            evaluate(for_rain_positive2, for_rain_negative2, total_Rain2);
        }

        //total humd attributes

        if (total_High2 != 0) {
            evaluate(for_high_positive2, for_high_negative2, total_High2);
        }
        if (total_Normal2 != 0) {
            evaluate(for_normal_positive2, for_normal_negative2, total_Normal2);
        }


        //total wind attributes

        if (total_Weak2 != 0) {
            evaluate(for_weak_positive2, for_weak_negative2, total_Weak2);
        }
        if (total_Strong2 != 0) {
            evaluate(for_strong_positive2, for_strong_negative2, total_Strong2);
        }
    }
    else if (root == 'Humidity') {
        //outlook

        if (total_Sunny2 != 0) {
            evaluate(for_sunny_positive2, for_sunny_negative2, total_Sunny2);
        }

        if (total_Overcast2 != 0) {
            evaluate(for_Overcast_positive2, for_Overcast_negative2, total_Overcast2);
        }
        if (total_Rain2 != 0) {
            evaluate(for_rain_positive2, for_rain_negative2, total_Rain2);
        }

        //total temp attributes

        if (total_Hot2 != 0) {
            evaluate(for_hot_positive2, for_hot_negative2, total_Hot2);
        }

        if (total_Mild2 != 0) {
            evaluate(for_mild_positive2, for_mild_negative2, total_Mild2);
        }
        if (total_Cool2 != 0) {
            evaluate(for_cool_positive2, for_cool_negative2, total_Cool2);
        }

        //total wind attributes

        if (total_Weak2 != 0) {
            evaluate(for_weak_positive2, for_weak_negative2, total_Weak2);
        }
        if (total_Strong2 != 0) {
            evaluate(for_strong_positive2, for_strong_negative2, total_Strong2);
        }
    }
    else if (root == 'Wind') {
        //outlook

        if (total_Sunny2 != 0) {
            evaluate(for_sunny_positive2, for_sunny_negative2, total_Sunny2);

        }

        if (total_Overcast != 0) {
            evaluate(for_Overcast_positive2, for_Overcast_negative2, total_Overcast2);
        }
        if (total_Rain != 0) {
            evaluate(for_rain_positive2, for_rain_negative2, total_Rain2);
        }
        //total temp attributes

        if (total_Hot2 != 0) {
            evaluate(for_hot_positive2, for_hot_negative2, total_Hot2);
        }

        if (total_Mild2 != 0) {
            evaluate(for_mild_positive2, for_mild_negative2, total_Mild2);
        }
        if (total_Cool2 != 0) {
            evaluate(for_cool_positive2, for_cool_negative2, total_Cool2);
        }
        //total humd attributes

        if (total_High2 != 0) {
            evaluate(for_high_positive2, for_high_negative2, total_High2);
        }
        if (total_Normal2 != 0) {
            evaluate(for_normal_positive2, for_normal_negative2, total_Normal2);
        }
    }

    document.getElementById('finde').disabled = true;
    document.getElementById('findg').disabled = false;
    document.getElementById('nextbt2').disabled = true;
    alerts('success', 'Now, click on the <b style="color:#0070C0">IG</b> button.');

}

function areAllElementsSame(arr) {
    if (arr.length === 0) {
        return true; // Empty array, all elements are technically the same
    }
    // Compare each element with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false; // Found a different element
        }
    }
    return true; // All elements are the same
}

function evaluate(a, b, c) {
    let x = a / c;
    let y = b / c;
    if (a == 0 || b == 0) {
        z = 0;
    }
    else if (a == b) { z = 1; }
    else {
        z = - x * Math.log2(x) - y * Math.log2(y);
        z = z.toFixed(2);
    }
    tdE[E2index].innerHTML = z;
    E2index++;
    IG = [];
}

var tdIG;
async function findgain() {
    tdIG = document.getElementsByClassName("tocheck3");
    var tTable = document.getElementById("copiedTable2")
    var tRows = tTable.rows;
    var tTable1 = document.getElementById("copiedTable")
    var tRows1 = tTable1.rows;
    var total = tRows1.length - 1;
    console.log('totalRows:' + total);
    for (i = 1; i < tRows.length;) {
        span = tRows[i].cells[0].rowSpan;
        console.log('i: ' + i);
        console.log('span: ' + span);
        data = tRows[i].cells[0].innerHTML;
        console.log('data: ' + data);
        if (data == "OUTLOOK") {
            evaluateIGOutlook(i - 1, total)
        }
        else if (data == 'TEMPERATURE') {
            evaluateIGTemp(i - 1, total)
        }
        else if (data == 'HUMIDITY') {
            evaluateIGHumidity(i - 1, total)
        }
        else if (data == 'WIND') {
            evaluateIGWind(i - 1, total)
        }
        i = i + span;
    }
    document.getElementById("findg").disabled = true;
    document.getElementById("reset4").disabled = true;
    await waitforme(500);

    m = Math.max(...IG);
    console.log('m is : ' + m);

    await waitforme(1500);

    if (areAllElementsSame(IG)) {
        Swal.fire({
            html: `Because every attribute has the same IG value, i.e., <b style='color:#0070C0'>${Math.max(...IG)}</b>, the first attribute encountered in the dataset is selected as the parent node.`,
            icon: "info",
            title: 'Tie in Information gain!!',
            confirmButtonText: "OK",
            customClass: {
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: '.container',

            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false, // Prevent closing by pressing the escape key
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("gaintable").style.display = 'none'
                let tempcalhed = document.getElementById("calculation")
                tempcalhed.innerHTML = "DECISION TREE";

                drawTree2()
            }
        });

    }
    else {
        Swal.fire({
            html: `The parent node is the one with the highest Information Gain value. i.e. <b style='color:#0070C0'>${Math.max(...IG)}</b>`,
            icon: "info",
            title: 'Parent Node Found!!!',
            confirmButtonText: "OK",
            customClass: {
                container: "position-absolute",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: '.container',

            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false, // Prevent closing by pressing the escape key
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("gaintable").style.display = 'none'
                let tempcalhed = document.getElementById("calculation")
                tempcalhed.innerHTML = "DECISION TREE";

                drawTree2()
            }
        });

    }



    return;
}


function evaluateIGOutlook(i, total) {
    console.log("EvaluateIGOutlook");

    if ((total_Sunny2 == 0 && total_Overcast2 == 0) || (total_Overcast2 == 0 && total_Rain2 == 0) || (total_Rain2 == 0 && total_Sunny2 == 0)) {
        if (total_Sunny2 == 0 && total_Overcast2 == 0) {
            evaluateIG1(total_Rain2, tdE[i].innerHTML, total);
        }
        else if (total_Overcast2 == 0 && total_Rain2 == 0) {
            evaluateIG1(total_Sunny2, tdE[i].innerHTML, total);
        }
        else if (total_Rain2 == 0 && total_Sunny2 == 0) {
            evaluateIG1(total_Overcast2, tdE[i].innerHTML, total);
        }


    }
    else if (total_Sunny2 == 0 || total_Overcast2 == 0 || total_Rain2 == 0) {
        if (total_Sunny2 == 0) {
            evaluateIG2(total_Overcast2, total_Rain2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
        else if (total_Overcast2 == 0) {
            evaluateIG2(total_Sunny2, total_Rain2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
        else if (total_Rain2 == 0) {
            evaluateIG2(total_Sunny2, total_Overcast2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
    }
    else if (total_Sunny2 != 0 && total_Overcast2 != 0 && total_Rain2 != 0) {
        evaluateIG3(total_Sunny2, total_Overcast2, total_Rain2, tdE[i].innerHTML, tdE[i + 1].innerHTML, tdE[i + 2].innerHTML, total);
    }
}

function evaluateIGTemp(i, total) {

    console.log("EvaluateIGTemp");
    if ((total_Hot2 == 0 && total_Mild2 == 0) || (total_Mild2 == 0 && total_Cool2 == 0) || (total_Cool2 == 0 && total_Hot2 == 0)) {
        if (total_Hot2 == 0 && total_Mild2 == 0) {
            evaluateIG1(total_Cool2, tdE[i].innerHTML, total);
        }
        else if (total_Mild2 == 0 && total_Cool2 == 0) {
            evaluateIG1(total_Hot2, tdE[i].innerHTML, total);
        }
        else if (total_Cool2 == 0 && total_Hot2 == 0) {
            evaluateIG1(total_Mild2, tdE[i].innerHTML, total);
        }


    }
    else if (total_Hot2 == 0 || total_Mild2 == 0 || total_Cool2 == 0) {
        if (total_Hot2 == 0) {
            evaluateIG2(total_Mild2, total_Cool2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
        else if (total_Mild2 == 0) {
            evaluateIG2(total_Hot2, total_Cool2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
        else if (total_Cool2 == 0) {
            evaluateIG2(total_Hot2, total_Mild2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
        }
    }
    else if (total_Hot2 != 0 && total_Mild2 != 0 && total_Cool2 != 0) {
        evaluateIG3(total_Hot2, total_Mild2, total_Cool2, tdE[i].innerHTML, tdE[i + 1].innerHTML, tdE[i + 2].innerHTML, total);
    }
}

function evaluateIGHumidity(i, total) {
    console.log("EvaluateIGHumidity");
    if (total_High2 == 0 || total_Normal2 == 0) {
        if (total_High2 == 0) {
            evaluateIG1(total_Normal2, tdE[i].innerHTML, total);
        }
        else if (total_Normal2 == 0) {
            evaluateIG1(total_High2, tdE[i].innerHTML, total);
        }

    }
    else if (total_High2 != 0 && total_Normal2 != 0) {
        evaluateIG2(total_High2, total_Normal2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
    }
}

function evaluateIGWind(i, total) {
    console.log("EvaluateIGWind");
    if (total_Weak2 == 0 || total_Strong2 == 0) {
        if (total_Weak2 == 0) {
            evaluateIG1(total_Weak2, tdE[i].innerHTML, total);
        }
        else if (total_Strong2 == 0) {
            evaluateIG1(total_Strong2, tdE[i].innerHTML, total);
        }

    }
    else if (total_Weak2 != 0 && total_Strong2 != 0) {
        evaluateIG2(total_Weak2, total_Strong2, tdE[i].innerHTML, tdE[i + 1].innerHTML, total);
    }
}

var IGindex = 0;
function evaluateIG1(a, e1, total) {
    console.log("Evaluate IG1");
    console.log(a, e1, total)
    let x = a / total;
    let y = x * e1;
    z = tableEntropy - y;
    IG.push(z.toFixed(2))
    tdIG[IGindex].innerHTML = z.toFixed(2);
    IGindex++;
}

function evaluateIG2(a, b, e1, e2, total) {
    console.log("Evaluate IG2");
    console.log(a, b, e1, e2, total)
    let x = a / total;
    let y = b / total;
    let r1 = x * e1;
    let r2 = y * e2;
    z = tableEntropy - r1 - r2;
    IG.push(z.toFixed(2))
    tdIG[IGindex].innerHTML = z.toFixed(2);
    IGindex++;
}

function evaluateIG3(a, b, c, e1, e2, e3, total) {
    console.log("Evaluate IG3");
    console.log(a, b, c, e1, e2, e3, total)
    let x = a / total;
    let y = b / total;
    let z = c / total;
    let r1 = x * e1;
    let r2 = y * e2;
    let r3 = z * e3;
    res = tableEntropy - r1 - r2 - r3;
    IG.push(res.toFixed(2))
    tdIG[IGindex].innerHTML = res.toFixed(2);
    IGindex++;
}