// -------------------Alert Message---------------------------------------------

let message ="Happy Holiday's & Happy New Year";
let message2 = 'Reminder: 25-26 February 2023';

alert(message2);



// ------------------------------Editable Area ------------------------------------------


// -----------Report Time Notes----------------

let reporttimenote ="Report Time: 0730";

// -----------Current drill Notes----------------
var currentDrillNote ="The following is information for this upcoming drill: 28-29 January 2023";

// -----------Next drill Notes----------------
var nextDrillNote ="Drill next month is on: 11-12 March  ";

// --------------Count Down Timer Javascript-------------------

var countDown = new Date ("February 28, 2023 07:30:00").getTime();



var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor ((distance % (1000*60*60))/ (1000*60));

    var seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("drillCountDown").innerText= days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    // switched innerHTML to innerText to test out Safari Timer

    if (distance < 0){
        clearInterval(x);
        document.getElementById("drillCountDown").innerHTML="Drill In Progress";
    }

},1000);

// --------------Count Down Timer Javascript-------------------




// -----------Section Admin (1) Notes (use <li> before every sentence to bullet it) ----------------
let sectionOneHeading ="Admin";

let sectionOneContentnote ="<li>PHA, PHA, PHA Lets get it done! <li>Evals will be completed this weekend. We will be staying as late as we have to on Sunday to make sure they are all done!";






// -----------Supply Section (2) Notes (use <li> before every sentence to bullet it)----------------
let sectionTwoHeading ="Supply";

let sectionTwoContentnote ="<li>complete the Cyclic and sensitive item inventory for the month.";




// -----------Maintenance (3) Notes (use <li> before every sentence to bullet it)----------------
let sectionThreeHeading ="Maintenance";

let sectionThreeContentnote ="TBD";




// -----------Distro Section (4)Notes (use <li> before every sentence to bullet it)----------------

let sectionFourHeading ="Distro";

let sectionFourContentnote ="TDB";




// -----------Mess Section (5) Notes (use <li> before every sentence to bullet it)----------------


let sectionFiveHeading ="Mess";

let sectionFiveContentnote ="TBD";

// -----------CDR Intent Section (6) Notes (use <li> before every sentence to bullet it)----------------

let sectionSixHeading ="CDR Intent";
let sectionSixContentnote ="<li>This month’s IDT main focus is our PHA, along with business as usual with maintenance, drivers training, and any admin tasks.Everyone should have received their LHI email for the PHA's online portion that needs to be completed prior to drill. The online portion does not take long to do, so please complete it prior to the PHA. This way we won’t have to waste any time using their computers and hopefully get through the process at a reasonable rate. Let’s try and stay focused and get this weekend done and continue to train to standard. If you need anything prior to drill, please reach out to your section leaders. And of course, if you need anything directly from me, feel free to contact me anytime. My phone is always on, and my door is always open. Please be safe and careful! I will see you all at drill and thank you for all that you do for the unit! <li>LT Pavese";


// -----------Drill Schedule ---------------->

let drillScheduleFYHeader="Drill Schedule FY 2023";

let monthOct ="Oct 15- 16 2022, this test";
let monthOctLoc="";
let monthOctMuta="";
let monthOctEvent="";

let monthNov="#";
let monthNovLoc="#";
let monthNovMuta="#";
let monthNovEvent="#";

let monthDec="#";
let monthDecLoc="#";
let monthDecMuta="#";
let monthDecEvent="#";


let monthJan="#";
let monthJanLoc="#";
let monthJanMuta="#";
let monthJanEvent="#";


let monthFeb="#";
let monthFebLoc="#";
let monthFebMuta="#";
let monthFebEvent="#";


let monthMar="#";
let monthMarLoc="#";
let monthMarMuta="#";
let monthMarEvent="#";


let monthApr="#";
let monthAprLoc="#";
let monthAprMuta="#";
let monthAprEvent="#";


let monthMay="#";
let monthMayLoc="#";
let monthMayMuta="#";
let monthMayEvent="#";


let monthJun="#";
let monthJunLoc="#";
let monthJunMuta="#";
let monthJunEvent="#";


let monthJul="#";
let monthJulLoc="#";
let monthJulMuta="#";
let monthJulEvent="#";


let monthAug="#";
let monthAugLoc="#";
let monthAugMuta="#";
let monthAugEvent="#";


let monthSept="#";
let monthSeptLoc="#";
let monthSeptMuta="#";
let monthSeptEvent="#";




// --------------(Do not edit section Below)----------------------------- 


document.getElementById("reporttime").innerHTML = reporttimenote;

document.getElementById("currentdrill").innerHTML = currentDrillNote;

document.getElementById("nextdrill").innerHTML = nextDrillNote;

document.getElementById("sectionOne").innerHTML = sectionOneHeading;
document.getElementById("sectionTwo").innerHTML = sectionTwoHeading;
document.getElementById("sectionThree").innerHTML = sectionThreeHeading;
document.getElementById("sectionFour").innerHTML = sectionFourHeading;
document.getElementById("sectionFive").innerHTML = sectionFiveHeading;
document.getElementById("sectionSix").innerHTML = sectionSixHeading;

document.getElementById("sectionOneContent").innerHTML = sectionOneContentnote;
document.getElementById("sectionTwoContent").innerHTML = sectionTwoContentnote;
document.getElementById("sectionThreeContent").innerHTML = sectionThreeContentnote;
document.getElementById("sectionFourContent").innerHTML = sectionFourContentnote;
document.getElementById("sectionFiveContent").innerHTML = sectionFiveContentnote;
document.getElementById("sectionSixContent").innerHTML = sectionSixContentnote;


// <-------------------Drill Schedule write ( In Beta )------------------>


// document.getElementById("drillScheduleFY").innerHTML = drillScheduleFYHeader;

// document.getElementById("oct").innerHTML = monthOct;
// document.getElementById("octLoc").innerHTML = monthOctLoc;
// document.getElementById("octMuta").innerHTML = monthOctMuta;
// document.getElementById("octEvent").innerHTML = monthOctEvent;

// document.getElementById("nov").innerHTML = monthNov;
// document.getElementById("novLoc").innerHTML = monthNovLoc;
// document.getElementById("novMuta").innerHTML = monthNovMuta;
// document.getElementById("novEvent").innerHTML = monthNovEvent;

// document.getElementById("dec").innerHTML = monthDec;
// document.getElementById("decLoc").innerHTML = monthDecLoc;
// document.getElementById("decMuta").innerHTML = monthDecMuta;
// document.getElementById("decEvent").innerHTML = monthDecEvent;

// document.getElementById("jan").innerHTML = monthJan;
// document.getElementById("janLoc").innerHTML = monthJanLoc;
// document.getElementById("janMuta").innerHTML = monthJanMuta;
// document.getElementById("janEvent").innerHTML = monthJanEvent;

// document.getElementById("feb").innerHTML = monthFeb;
// document.getElementById("febLoc").innerHTML = monthFebLoc;
// document.getElementById("febMuta").innerHTML = monthFebMuta;
// document.getElementById("febEvent").innerHTML = monthFebEvent;

// document.getElementById("mar").innerHTML = monthMar;
// document.getElementById("marLoc").innerHTML = monthMarLoc;
// document.getElementById("marMuta").innerHTML = monthMarMuta;
// document.getElementById("marEvent").innerHTML = monthMarEvent;

// document.getElementById("apr").innerHTML = monthApr;
// document.getElementById("aprLoc").innerHTML = monthAprLoc;
// document.getElementById("aprMuta").innerHTML = monthAprMuta;
// document.getElementById("aprEvent").innerHTML = monthAprEvent;

// document.getElementById("may").innerHTML = monthMay;
// document.getElementById("mayLoc").innerHTML = monthMayLoc;
// document.getElementById("mayMuta").innerHTML = monthMayMuta;
// document.getElementById("mayEvent").innerHTML = monthMayEvent;

// document.getElementById("jun").innerHTML = monthJun;
// document.getElementById("junLoc").innerHTML = monthJunLoc;
// document.getElementById("junMuta").innerHTML = monthJunMuta;
// document.getElementById("junEvent").innerHTML = monthJunEvent;

// document.getElementById("jul").innerHTML = monthJul;
// document.getElementById("julLoc").innerHTML = monthJulLoc;
// document.getElementById("julMuta").innerHTML = monthJulMuta;
// document.getElementById("julEvent").innerHTML = monthJulEvent;

// document.getElementById("aug").innerHTML = monthAug;
// document.getElementById("augLoc").innerHTML = monthAugLoc;
// document.getElementById("augMuta").innerHTML = monthAugMuta;
// document.getElementById("augEvent").innerHTML = monthAugEvent;

// document.getElementById("sept").innerHTML = monthSept;
// document.getElementById("septLoc").innerHTML = monthSeptLoc;
// document.getElementById("septMuta").innerHTML = monthSeptMuta;
// document.getElementById("septEvent").innerHTML = monthSeptEvent;

