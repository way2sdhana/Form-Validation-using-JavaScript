    /************ Terms Checkbox ************/
function myshow() {
    let terms = document.getElementById("tercond");
    if (!terms.checked) {
        document.getElementById("update").disabled = true;
    }
    else {
        document.getElementById("update").disabled = false;
    }
}

    /************* Reset Button *************/
function myReset() {
    //     document.getElementById("err-msg1").style.visibility = "hidden";
    //     document.getElementById("err-msg2").style.visibility = "hidden";
    //     document.getElementById("err-msg3").style.visibility = "hidden";
    //     document.getElementById("err-msg4").style.visibility = "hidden";
    //     document.getElementById("err-msg5").style.visibility = "hidden";
    //     document.getElementById("err-msg6").style.visibility = "hidden";
    //     document.getElementById("err-msg66").style.visibility = "hidden";
    //     document.getElementById("err-msg7").style.visibility = "hidden";
    //     document.getElementById("err-msg8").style.visibility = "hidden";
    //     document.getElementById("err-msg9").style.visibility = "hidden";
    //     document.getElementById("err-msg10").style.visibility = "hidden";
    window.location.reload();
}

    /************* Submit Button *************/
function myForm() {
    /*** Declare and Assign values from user ***/
    let ftname = document.getElementById("fname").value.trim();
    let ltname = document.getElementById("lname").value.trim();
    let e_mail = document.getElementById("email").value.trim();
    let roomt = document.getElementById("roomtype").value;
    let no_guest = document.getElementById("guest").value;
    let arrivald = document.getElementById("arrival").value;
    let departured = document.getElementById("departure").value;
    let pickme = document.querySelector('input[id="yes"]:checked');
    let nopick = document.querySelector('input[id="no"]:checked');
    // var pickup = document.querySelector('input[name="pickup"]:checked');
    let tele = document.getElementById("tnumber").value.trim();
    let flight = document.getElementById("fnumber").value.trim();
    let request = document.getElementById("spl-req").value.trim();
    let terms = document.getElementById("tercond");
    // let checked = document.querySelector('input[id="tercond"]:checked');

    /********** Regular Expressions **********/
    let namerule =  /^[a-z]+$/i;
    let emailrule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
    let flightrule = /^[a-zA-Z]{2,}[0-9]{1,}$/;
    // let emailrule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const addressrule = /^[a-zA-Z0-9\s,. '-]{3,}$/ ;
    // let flightrule = /^[a-zA-Z0-9]{3,}$/;
    // let telerule = /^\d{10}$/;

    if (!terms.checked) {
        alert("Oops! Please check the Terms & Conditions checkbox!...");
    }
    else {
        document.getElementById('update').disabled = false;

        /*************** names ***************/
        if (ftname.match(namerule) && ((ltname == "") || ltname.match(namerule))) {
            document.getElementById("fname").style.border = "3px solid green";
            document.getElementById("lname").style.border = "3px solid green";
            document.getElementById("err-msg1").innerHTML = "";
        }
        else {
            document.getElementById("fname").style.border = "3px solid red";
            document.getElementById("lname").style.border = "3px solid red";
            document.getElementById("err-msg1").innerHTML = "Please, enter a valid name...";
        }
        
        /*************** email ***************/
        if (e_mail.match(emailrule)) {
            document.getElementById("email").style.border = "3px solid green";
            document.getElementById("err-msg2").innerHTML = "";
        }
        else {
            document.getElementById("email").style.border = "3px solid red";
            document.getElementById("err-msg2").innerHTML = "Please, enter a valid email...";
        }

        /*************** roomtype ***************/
        if (roomt == 'select') {
            document.getElementById("roomtype").style.border = "3px solid red";
            document.getElementById("err-msg3").innerHTML = "Please, select your preferred room...";
        }
        else {
            document.getElementById("roomtype").style.border = "3px solid green";
            document.getElementById("err-msg3").innerHTML = "";
        }

        /*************** guest count ***************/
        if (no_guest == "") {
            document.getElementById("guest").style.border = "3px solid red";
            document.getElementById("err-msg4").innerHTML = "Please, mention your guests count...";
        }
        else {
            document.getElementById("guest").style.border = "3px solid green";
            document.getElementById("err-msg4").innerHTML = "";
        }

        /*************** arrival ***************/
        if (arrivald == "") {
            document.getElementById("arrival").style.border = "3px solid red";
            document.getElementById("err-msg5").innerHTML = "Please, mention your arrival...";
        }
        else {
            document.getElementById("arrival").style.border = "3px solid green";
            document.getElementById("err-msg5").innerHTML = "";
        }

        /*************** departure ***************/
        if ((departured == "") || (arrivald > departured)) {
            document.getElementById("departure").style.border = "3px solid red";
            document.getElementById("err-msg6").innerHTML = "Please, mention your departure...<br>Departure date can't lesser than arrival...";
        }
        else {
            document.getElementById("departure").style.border = "3px solid green";
            document.getElementById("err-msg6").innerHTML = "";
        }

        /*************** pickup ***************/
        if (pickme != null) {
            document.getElementById("err-msg7").style.color = "green";
            document.getElementById("err-msg7").innerHTML = "We'll reach you sooner...";
        }
        else if (nopick != null) {
            document.getElementById("err-msg7").style.color = "green";
            document.getElementById("err-msg7").innerHTML = "We'll waiting for your arrival...";
        }
        else { // if (pickup == null)
            document.getElementById("err-msg7").innerHTML = "You've to select anyone in the above...";
        }

        /*************** contact ***************/
        // if (tele.match(telerule)) {
        if (tele == "" || isNaN(tele)) {
            document.getElementById("tnumber").style.border = "3px solid red";
            document.getElementById("err-msg8").innerHTML = "Please, mention valid mobile no...";
        }
        else if (tele.length != 10) {
            document.getElementById("tnumber").style.border = "3px solid red";
            document.getElementById("err-msg8").innerHTML = "Mobile no. should be 10 digits...";
        }
        else {
            document.getElementById("tnumber").style.border = "3px solid green";
            document.getElementById("err-msg8").innerHTML = "";
        }

        /*************** flight no ***************/
        if (!(flight.match(flightrule))) {
            document.getElementById("fnumber").style.border = "3px solid red";
            document.getElementById("err-msg9").innerHTML = "Please, mention your flight no...<br>without space and special character...";
        }
        else {
            document.getElementById("fnumber").style.border = "3px solid green";
            document.getElementById("err-msg9").innerHTML = "";
        }

        /*************** special request ***************/
        if (request != "") {
            document.getElementById("spl-req").style.border = "3px solid green";
            document.getElementById("err-msg10").style.color = "green";
            document.getElementById("err-msg10").innerHTML = "Mentioned requests are noted...";
        }
    }
}

    /************* Update Button *************/
function myupdate() {
    if ((document.getElementById("fname").style.borderColor == "green") && 
    (document.getElementById("email").style.borderColor == "green") && 
    (document.getElementById("roomtype").style.borderColor == "green") && 
    (document.getElementById("guest").style.borderColor == "green") && 
    (document.getElementById("arrival").style.borderColor == "green") && 
    (document.getElementById("departure").style.borderColor == "green") && 
    (document.getElementById("err-msg7").style.color == "green") && 
    (document.getElementById("tnumber").style.borderColor == "green") && 
    (document.getElementById("fnumber").style.borderColor == "green")) {
        alert("your booking is confirmed...");
    }
    else {
        // document.getElementById("err-msg11").style.textShadow = "2px 2px 3px white"
        // document.getElementById("err-msg11").innerHTML = "Oops! Please fill the missing field...";
        alert("fill the missing fields...");
    }
}
