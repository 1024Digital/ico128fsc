alert('Reminder: 4-6 November 2022');

// ------------------------------Editable Area ------------------------------------------


// -----------Report Time Notes----------------

let reporttimenote ="Report Time: 0700";

// -----------Current drill Notes----------------
var currentDrillNote ="The following is information for this upcoming drill: 4-6 November 2022";

// -----------Next drill Notes----------------
var nextDrillNote ="Drill next month is on: December 3-4 2022";


// -----------Section Admin (1) Notes (use <li> before every sentence to bullet it) ----------------
let sectionOneHeading ="Admin";

let sectionOneContentnote ="<li>ACFT will be schedulesd for 0500 5 Nov location is TBD</li><li>The following Soldier need to see SFC Esbensen at 0830 5 Nov 2022 in the Admin Room: SGT Garcia, SGT Hokien, SPC Baruelo, SPC Garlinski</li> <li>Safety Stand down</li>";


// -----------Supply Section (2) Notes (use <li> before every sentence to bullet it)----------------
let sectionTwoHeading ="Supply";

let sectionTwoContentnote ="<li>Need to See SPC Gralinski <li>Sensitive Item Inventory SGT Mumford <li>CCDF Issue : Kellam, Higgins, Ford, Henderson</li>";

// -----------Maintenance (3) Notes (use <li> before every sentence to bullet it)----------------
let sectionThreeHeading ="Maintenance";

let sectionThreeContentnote ="<li>Stay behind to conduct services on HHC equipment: Mumford, Walsh, Billings, Christison, Kille <li>The rest of the Section will help support PHA & range operations </li> ";


// -----------Distro Section (4)Notes (use <li> before every sentence to bullet it)----------------

let sectionFourHeading ="Distro";

let sectionFourContentnote ="<li>Ammo Support</li>";

// -----------Mess Section (5) Notes (use <li> before every sentence to bullet it)----------------


let sectionFiveHeading ="Mess";

let sectionFiveContentnote ="<li>IDT Support </li>";


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

document.getElementById("sectionOneContent").innerHTML = sectionOneContentnote;
document.getElementById("sectionTwoContent").innerHTML = sectionTwoContentnote;
document.getElementById("sectionThreeContent").innerHTML = sectionThreeContentnote;
document.getElementById("sectionFourContent").innerHTML = sectionFourContentnote;
document.getElementById("sectionFiveContent").innerHTML = sectionFiveContentnote;


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

