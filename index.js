// -------------------Alert Message---------------------------------------------

let message ="Happy Thanksgiving";
let message2 = 'Reminder: 4-6 November 2022';

alert(message);



// ------------------------------Editable Area ------------------------------------------


// -----------Report Time Notes----------------

let reporttimenote ="Report Time: 0800";

// -----------Current drill Notes----------------
var currentDrillNote ="The following is information for this upcoming drill: 3-4 December 2022";

// -----------Next drill Notes----------------
var nextDrillNote ="Drill next month is on: January 28-29 2023";

// --------------Count Down Timer Javascript-------------------

var countDown = new Date ("December 3, 2022 08:00:00").getTime();



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

let sectionOneContentnote ="<li>Annual Briefings</li><li>Unit Holiday Meal (POT LUCK).</li><li>Ugly Sweater Contest (rules below) </li><li>Chinese Auction (rules below)</li><li>Each Section will be assigned a type of meal to bring for the Holiday Meal</li><li>Officers are assigned Desserts</li> <li>SFC Esbensen needs to see SPC Baruelo at 0900 hrs and SPC Garlinski at 1000 hrs <li>We will have VBS ( Virtual Battle System) on Saturday and Sunday.Break your sections put into crews of 4. <li>Lets SFC Esbensen know who in the UNit does not have a Govt Travel Card so we can start the process. <li> FOR ALL SOLDIERS to see if your scheduled for a course or military school click on the drill letter link above.  ";






// -----------Supply Section (2) Notes (use <li> before every sentence to bullet it)----------------
let sectionTwoHeading ="Supply";

let sectionTwoContentnote ="<li>Assigned Snacks & Appetizers <li> Gear from SPC Gralinski and SPC Baruelo";




// -----------Maintenance (3) Notes (use <li> before every sentence to bullet it)----------------
let sectionThreeHeading ="Maintenance";

let sectionThreeContentnote ="<li>Assigned Main Dishes <li>Dishes so far: <li> Belvis - Baked Ziti <li>Kille - Mac & Cheese <li> Page - Chicken Casserole ";




// -----------Distro Section (4)Notes (use <li> before every sentence to bullet it)----------------

let sectionFourHeading ="Distro";

let sectionFourContentnote ="<li>Assigned Snacks & Appetizers </li>";




// -----------Mess Section (5) Notes (use <li> before every sentence to bullet it)----------------


let sectionFiveHeading ="Mess";

let sectionFiveContentnote ="<li>Assigned Drinks</li>";

// -----------CDR Intent Section (6) Notes (use <li> before every sentence to bullet it)----------------

let sectionSixHeading ="CDR Intent";
let sectionSixContentnote ="<li>This upcoming Drill lets have some fun!.This IDT will be our annual POT Luck, CHristmas Event & Ugly Sweater Contest!!! <p>With prizes to be had! <p> Let's all laugh & get into the Holiday spirit together as a family <p> I would like for you to take time to appreciate each of your fellow Soldiers that work hard and stand next to you in this Unit. I would also like you to remember we are family and we will succeed together as one. Please let your leadership know if there is anything and I mean anything that you may need during this coming season. Iwish a joyful Holiday and Happy New Year to all of you and your families. <p>LI Pavese";


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

