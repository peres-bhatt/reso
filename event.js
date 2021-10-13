// Event Calendar
// copyright Stephen Chapman, 10th June 2006, 22nd January 2010

var tb = 't'; // top or bottom (t or b)
var headbg = '#ffffff';  // table heading background colour
var todaybg = '#99cccc'; // current selected date background colour
var textclr = '#000000'; // text colour
var linkclr = '#ff9999'; // link text colour
var noMessage =  'No events to display for today <br><br>'; // message to display when no entry in array

var dA = new Array(); var x = 0;
// first 8 characters in ccyymmdd format for single date events
// first 8 characters in 0000mmdd format for every year events
dA[x++] = "00000101 Juliet D'Mello's Birthday <br>Vandana D'Mello's Birthday";
dA[x++] = "00000106 Jerome-Jovce Peres Bhatt wedding anniversary<br> Marina Pinto's Birthday";
dA[x++] = "00000110 Arun D'Souza's Birthday";
dA[x++] = "00000118 Julius Rasquinha's Birthday";
dA[x++] = "00000123 Mary Rasquinha's Birthday";
dA[x++] = "00000130 Susan Quadras's Birthday";
dA[x++] = "00000202 Dionysius-Juliet Wedding anniversary<br> Joseph (Joe) Peres Bhatt's Birthday";
dA[x++] = "00000203 Ronald Pinto's Birthday";
dA[x++] = "00000209 Leena Patrao's Birthday";
dA[x++] = "00000210 Jerome Peres Bhatt's Birthday";
dA[x++] = "00000215 Demian-Vandana D'Mello's Wedding Anniversary";
dA[x++] = "00000216 Deon D'Mello's Birthday";
dA[x++] = "00000217 Sr. Harriet Peres Bhatt's Birthday";
dA[x++] = "00000221 Samuel Pinto's Birthday";
dA[x++] = "00000302 Gration D'Mello's Birthday<br> Harrold Peres Bhatt's Birthday ";
dA[x++] = "00000303 Marian Peres Bhatt's Birthday ";
dA[x++] = "00000313 Nayana Naik's Birthday ";
dA[x++] = "00000318 Gladson Peres Bhatt's Birthday ";
dA[x++] = "00000402 Jude Peres Bhatt's Birthday ";
dA[x++] = "00000413 Fr. Brain Peres Bhatt Birthday ";
dA[x++] = "00000419 Jyothsna D'Souza's Birthday<br> Gladwin Peres Bhatt's Birthday";
dA[x++] = "00000428 Bennet Peres Bhatt's Birthday";
dA[x++] = "00000430 Ronald-Blossom Pinto's Wedding Anniversary";
dA[x++] = "00000502 Sr. Harriet's death Anniversary ";
dA[x++] = "00000511 Fabian-Flavian Peres Bhatt Wedding Anniversary ";
dA[x++] = "00000513 Deral D'Mello's Birthday ";
dA[x++] = "00000519 Mario-Rishika's Wedding Anniversary ";
dA[x++] = "00000524 Maxium-Anita Barboza's Wedding Anniversary ";
dA[x++] = "00000526 Jovce Peres Bhatt's Birthday ";
dA[x++] = "00000527 Mabel Pinto's Birthday<br> Lawrence-Juliana Peres Bhatt's Wedding Anniversary ";
dA[x++] = "00000528 Blossom Pinto's Birthday<br> Aedan's Birthday ";
dA[x++] = "00000529 Joshua Peres Bhatt's Birthday ";
dA[x++] = "00000530 Delrin D'Mello's Birthday<br> Denzil D'Mello's Birthday";
dA[x++] = "00000531 Jonah Peris Bhatt's Birthday ";
dA[x++] = "00000602 Samatha Dharmaraj's Birthday<br> Nancy D'Mello's Death Anniversary ";
dA[x++] = "00000610 Merwin Pais's Birthday";
dA[x++] = "00000612 Winston Pais's Birthday";
dA[x++] = "00000619 Titus Peres Bhatt's Birthday ";
dA[x++] = "00000623 Delmon D'Mello's Birthday ";
dA[x++] = "00000625 Cosmos Peres Bhatt's Birthday ";
dA[x++] = "00000627 Derrick D'Mello's Birthday";
dA[x++] = "00000705 Daisy D'Mello's Birthday ";
dA[x++] = "00000710 Jerome Peres Bhatt's death Anniversary ";
dA[x++] = "00000715 Henry Pinto's Birthday ";
dA[x++] = "00000723 Daniel Pinto's Birthday ";
dA[x++] = "00000729 Vernon Peres Bhatt's Birthday ";
dA[x++] = "00000806 Anita Barboza's Birthday ";
dA[x++] = "00000808 Dominic D'Mello's Birthday ";
dA[x++] = "00000809 Lawrence Peres Bhatt's Birthday<br> Denika D'Mello's Birthday ";
dA[x++] = "00000810 Prakash Serao's Birthday<br> Winnifred Peres Bhatt's Death Anniversary ";
dA[x++] = "00000811 Celine Pinto's Birthday ";
dA[x++] = "00000813 Sr. Sabitha Peres Bhatt's Birthday<br> Maxium Barboza's Birthday ";
dA[x++] = "00000814 Dexia D'Mello's Birthday ";
dA[x++] = "00000905 Dixon D'Mello's Birthday<br> Demian D'Mello's Birthday ";
dA[x++] = "00000906 Dilon Patrao's Birthday ";
dA[x++] = "00000911 Fabian Peres Bhatt's Birthday ";
dA[x++] = "00000915 Marita Peres Bhatt's Birthday ";
dA[x++] = "00000917 Rashmi Pais's Birthday <br> Alphonso Rasquinha's Death Aniversary ";
dA[x++] = "00000924 Mario Pinto's Birthday ";
dA[x++] = "00000925 Ralph Patrao's Birthday";
dA[x++] = "00000927 Sonia Peres Bhatt's Birthday ";
dA[x++] = "00000929 Michael Patrao's Birthday ";
dA[x++] = "00001007 Nyneshwar Naik's Birthday ";
dA[x++] = "00001004 Antony Joseph's Death Aniversary ";
dA[x++] = "00001010 Gloria Serao's Birthday ";
dA[x++] = "00001018 Vineetha D'Mello's Birthday ";
dA[x++] = "00001021 Juliana Peres Bhatt's Birthday<br> Flavian Peres Bhatt's Birthday <br><br>";
dA[x++] = "00001025 Desmond D'Mello's Birthday ";
dA[x++] = "00001027 Mercy Patrao's Birthday ";
dA[x++] = "00001028 Prakash-Gloria Serao's Wedding Anniversary ";
dA[x++] = "00001031 Harmon Peres Bhatt's Birthday ";
dA[x++] = "00001118 Dionysius D'Mello's Birthday<br> Harrold Peres Bhatt's Death Anniversary ";
dA[x++] = "00001125 Cosmos Peres Bhatt's Death Anniversary ";
dA[x++] = "00001207 Alisha Serao's Birthday ";
dA[x++] = "00001211 Lily Pinto's Birthday<br> Jyothi D'Mello's Birthday ";
dA[x++] = "00001215 Zita Peres Bhatt's Birthday ";
dA[x++] = "00001226 Nancy D'Mello's Birthday ";
// dA[x++] = "20060610 New Event Calendar Started today";

// permission is granted to use this javascript provided that the below code is not altered
var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}
function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);
}
function monthlength(month,year) {var dd = new Date(year, month, 0);return dd.getDate();}
var moy = ['January','February','March','April','May','June','July','August','September','October','November','December'];var today = new Date();var selDate = today.getFullYear()+getmmdd(today.getMonth()+1,today.getDate());
function dispCal(yy,mm) {if (mm < 0 || mm > 12) {alert('month must be between 1 and 12'); return false;} if (yy != 0 && (yy < 1901 || yy > 2100)) {alert('year must be after 1900 and before 2101'); return false;} var dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; var calendar = new Date();  var today = calendar.getDate(); calendar.setDate(1); if (yy > 1900) calendar.setFullYear(yy); if (mm > 0) calendar.setMonth(mm - 1); var yy = year = calendar.getFullYear(); var month = calendar.getMonth(); calendar.setDate(today); var weekday = calendar.getDay(); var daysInMonth = monthlength(month+1,year); var hilite_start = '<td width="30" style="background: yellow;' + todaybg + '" align="center"><b>'; var td_start = '<td width="30" align="center">'; var cal = '<div id="cal"><div style="border:0pt solid #cccccc;width:100%"><table border="0" cellspacing="0" cellpadding="2le="background:' + headbg + '" align="center"><b>' + moy[month]  + ' ' + year + '<\/b><\/td><\/tr><tr>'; for(dex=0; dex < 7; dex++) {cal += td_start + dow[dex] + '</td>';} cal += '<\/tr><tr>'; var day2 = today; for (dex = today; dex > 6; dex -=7) day2 = dex; weekday -= day2 - 1; while (weekday < 0) weekday += 7; for(dex=0; dex < weekday; dex++) cal += td_start + ' <\/td>'; for(dex=1; dex <= daysInMonth; dex++) {if(weekday == 7) {cal += '</tr><tr>'; weekday = 0;} if(selDate==year+getmmdd(month+1,dex)) cal += hilite_start +'<span '+clickDate(dex,month,year) + '>'+ dex + '<\/span><\/b><\/td>'; else cal += td_start + '<span '+clickDate(dex,month,year) + '>' + dex + '<\/span><\/td>'; weekday += 1;} for(dex=weekday; dex < 7; dex++) cal += td_start + ' <\/td>'; cal += '<\/tr><\/table><\/div>';if (document.getElementById) {var mmb = month;  mm = month + 1; var yya = yyb = yy; if (mmb <1) {mmb += 12; yyb--;} var mma = month + 2; if (mma > 12) {mma -= 12; yya++;} var yb = yy -1; var ya = yy +1; cal += '<table border="0" cellspacing="0" cellpadding="2" width="228"><tr><td><a href="#" onclick="if (cala = dispCal('+yb+','+mm+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}"><<</a></td><td><a href="#" onclick="if (cala = dispCal('+yyb+','+mmb+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}"><</a></td><td align="right"><a href="#" onclick="if (cala = dispCal('+yya+','+mma+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}">></a></td><td align="right"><a href="#" onclick="if (cala = dispCal('+ya+','+mm+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}">>></a></td></tr></table>';} else {cal += '<div> </div>';} cal += '</div>'; return cal;}
function start() {var x = '<div id="calDate" style="border:0pt solid #cccccc;width:100%;"><\/div>'; var y = ''; if (tb == 't') y = x + dispCal(0,0); else y = dispCal(0,0) + x; document.getElementById('calendar').innerHTML = y; ev();}


loaded('calendar',start);
function clickDate(day, month, year) {var ct = nextDate(year + getmmdd(month+1,day));if (ct == '') ct = nextDate('0000' + getmmdd(month+1,day));if (ct == '') return 'style="color:'+textclr+'"'; else return 'style="cursor:pointer;color:'+linkclr+'" onclick="selDate = '+year+ getmmdd(month+1,day)+'; isDate(' + day + ',' + month + ',' + year + ');return false;"';}function isDate(dayVal,monthVal,yearVal) {var ct = nextDate(yearVal + getmmdd(monthVal+1,dayVal));if (ct == '') ct = nextDate('0000' + getmmdd(monthVal+1,dayVal));if (ct == '') ct = noMessage;document.getElementById('calDate').innerHTML = selDate + ':<br \/>' +ct; return false;}function nextDate(yymmdd) {var x = dA.length;for (var i = 0; i < x; i++) {if (dA[i].substr(0,8) == yymmdd) return dA[i].substr(8);}return '';}function getmmdd(mm,dd) {return (mm > 9 ? '' + mm : '0' + mm) + (dd > 9 ? dd : '0' + dd);}
function ev() {var ct = nextDate(selDate);var ct = nextDate(selDate);if (ct == '') ct = nextDate('0000' + selDate.substr(4));if (ct == '') ct = noMessage; document.getElementById('calDate').innerHTML = selDate + ':<br \/> ' +ct;}