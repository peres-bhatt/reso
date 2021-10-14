// Event Calendar
// copyright Stephen Chapman, 10th June 2006, 22nd January 2010

var tb = 't'; // top or bottom (t or b)
var headbg = '#fafad2';  // table heading background colour
var todaybg = '#99cccc'; // current selected date background colour
var textclr = '#000000'; // text colour
var linkclr = '#ff9999'; // link text colour
var noMessage =  'No events to display for today <br><br>'; // message to display when no entry in array

var dA = new Array(); var x = 0;
// first 8 characters in ccyymmdd format for single date events
// first 8 characters in 0000mmdd format for every year events
dA[x++] =  "00000101 Juliet D'Mello's Birthday <br>Vandana D'Mello (Carlo)'s  Birthday <br><br>"; 
dA[x++] =  "00000104 Marvin Coelho's Birthday <br><br>";
dA[x++] = "00000106 Jerome Augustine - Joyce Peres Bhatt wedding anniversary<br> Joseph Antony - Benedicta (Fernandes) Peres Bhatt's wedding anniversary (1969) <br>  Marina Gaonkar (Pinto)'s Birthday <br><br>";
dA[x++] = "00000107 Sheela Emiliana Peris Bhatt (D'Souza)'s Birthday (1988) <br> Jonah Aloysius - Sheela Emiliana (D'Souza) Peres Bhatt's Wedding Anniversary (2016) <br> Lt. Doris Mary Peres Bhatt's Birthday (1891) <br><br>";
dA[x++] = "00000108 Eric J.F.A Lobo's Death Anniversary (2020) <br> Keith Jude - Annete Priya (D'Mello) Rebello's Wedding Anniversary (2018) <br><br>";
dA[x++] = "00000109 Basil Gration D'Mello's Death Anniversary (2006) <br><br>";
dA[x++] = "00000110 Arun D'Souza's Birthday <br> Allwyn - Lydia (Pinto) Lobo's Wedding Anniversary (1966) <br><br>";
dA[x++] = "00000112 Dencia Jiya D'Mello's Birthday <br><br>";
dA[x++] = "00000118 Fr. Julius Rasquinha's Birthday <br> Tanushri Peres Bhatt (Pillai)'s Birthday <br><br>";
dA[x++] = "00000119 Rajiv Basil's Death Anniversary (1958) <br><br>"
dA[x++] = "00000123 Mary Rasquinha (Peres Bhatt)'s Birthday <br><br>";
dA[x++] = "00000125 Alex Rodrigues's Death Anniversary (1966) <br><br>";
dA[x++] = "00000130 Susan Quadras (Rasquinha)'s Birthday <br><br>";
dA[x++] = "00000202 Dionysius-Juliet D'Mello's Wedding anniversary<br> Joseph (Joe) Peres Bhatt's Birthday (1939) <br><br>";
dA[x++] = "00000203 Ronald Pinto's Birthday <br><br>";
dA[x++] = "00000205 Ranee Glaphyra Birthday (1942) <br><br>";
dA[x++] = "00000208 Titus Antony - Tanushri (Pillai) Peres Bhatt's Wedding Anniversary (2018) <br><br>";
dA[x++] = "00000209 Leena Patrao's Birthday <br><br>";
dA[x++] = "00000210 Lt. Jerome Augustine Peres Bhatt's Birthday (1943) <br> Allan - Tanya (D'Souza) Lobo's Wedding Anniversary";
dA[x++] = "00000212 Peter - Daisy Carmel (D'Mello) Fernandes's Wedding Anniversary <br><br>";
dA[x++] = "00000215 Demian Antony - Vandana (carlo) D'Mello's Wedding Anniversary <br><br>";
dA[x++] = "00000216 Deon D'Mello's Birthday <br><br>";
dA[x++] = "00000217 Lt. Sr. Harriet (Irene) Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000221 Samuel Pinto's Birthday <br><br>";
dA[x++] = "00000224 Gilbert Phillip Peres Bhatt's Death Anniversary (1897) <br> Magdalen Peres Bhatt's Death Anniversary (1897) <br><br>";
dA[x++] = "00000225 Lydia (Pinto) Lobo's Death Anniversary (2008) <br><br>";
dA[x++] = "00000302 Lt. Gration D'Mello's Birthday<br> Lt. Harrold Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000303 Marian Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000310 Benny (Peres Bhatt) Lobo's Death Anniversary <br><br>";
dA[x++] = "00000313 Nayana (Rasquinha) Naik's Birthday <br><br>";
dA[x++] = "00000314 Charles Emmanuel Noronha's Death Anniversary (1950) <br><br>";
dA[x++] = "00000315 Winifred (D'Souza) Lorna Peres Bhatt's Birthday (1920) <br><br>";
dA[x++] = "00000317 Nicholas John Peres Bhatt's Death Anniversary (1922) <br><br>";
dA[x++] = "00000318 Gladson Joseph Peres Bhatt's Birthday (1985) <br><br>";
dA[x++] = "00000319 Lt. Allwyn Lobo's Birthday (1937) <br><br>";
dA[x++] = "00000321 Priestly Ordination of Brain Peres Bhatt (2002) <br><br>";
dA[x++] = "00000323 Mercy (Peres Bhatt) Patrao's Death Anniversary <br><br>";
dA[x++] = "00000401 Lt. Monica Emerciana (Suares) Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000402 Jude Peres Bhatt's Birthday <b> Joanna Peres Bhatt's Birthday (2020) <br><br>";
dA[x++] = "00000403 Monica Emerciana (Suares) Peres Bhatt's Death Anniversary (1936) <br><br>";
dA[x++] = "00000411 Doris Mary Noronha's Death Anniversary (1933) <br><br>";
dA[x++] = "00000413 Fr. Brain Peres Bhatt Birthday <br><br>";
dA[x++] = "00000417 Allwyn Lobo's Death Anniversary <br><br>";
dA[x++] = "00000419 Jyothsna Winifred (Peres Bhatt) D'Souza's Birthday<br> Gladwin Gilbert Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000421 Letita Lobo's Birthday (1899) <br><br>";
dA[x++] = "00000428 Bennet Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000430 Ronald - Blossom (Peres Bhatt) Pinto's Wedding Anniversary <br><br>";
dA[x++] = "00000501 Lt. Gilbert Phillip Peres Bhatt's Birthday (1915) <br><br>";
dA[x++] = "00000502 Sr. Harriet (Irene) Peres Bhatt's death Anniversary (2012) <b> Alex - Philomena (Peres Bhatt) Rodrigues's Wedding Anniversary (1960) <br><br>";
dA[x++] = "00000504 Aavin - Rainal (D'Souza) Lobo's Wedding Anniversary <br> Nellie Monica Lobo's Birthday (1914) <br> Ranee Glaphyra Noronha's Death Anniversary (2020) <br> Martin Antony Rosario Sequeira Kamath's Death Anniversary (1982) <br><br>";
dA[x++] = "00000508 Bennet - Jacintha Pramila (Monterio) Peres Bhatt's Wedding Anniversary (2019) <br><br>";
dA[x++] = "00000511 Fabian - Flavian (Lobo) Peres Bhatt's Wedding Anniversary <br><br>";
dA[x++] = "00000513 Lt. Deral Robbert D'Mello's Birthday <br><br>";
dA[x++] = "00000514 Jaylon Simon Peres Bhatt's Birthday <br><br>"; 
dA[x++] = "00000519 Mario - Rishika Rupam Pinto's Wedding Anniversary <br> Gilbert Phillip - Winifred Lorna (D'Souza) Peres Bhatt's Wedding Anniversary <br> Antony Noronha's Death Anniversary (2006) <br><br>";
dA[x++] = "00000520 Joel Gaonkar's Birthday <br><br>";
dA[x++] = "00000524 Maxium - Anita (Peres Bhatt) Barboza's Wedding Anniversary <br><br>";
dA[x++] = "00000525 Maya Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000526 Jovce (Rebello) Peres Bhatt's Birthday <br> Aileen Jean D'Souza's Birthday <br><br>";
dA[x++] = "00000527 Mabel (Peres Bhatt) Pinto's Birthday<br> Lawrence - Juliana (D'Cunha) Peres Bhatt's Wedding Anniversary (1980) <br><br>";
dA[x++] = "00000528 Blossom (Peres Bhatt) Pinto's Birthday <br> Aedan John D'Souza's Birthday <br><br>";
dA[x++] = "00000529 Joshua Henry Peres Bhatt's Birthday  <br> Ulrica Pinto's Birthday <br><br>";
dA[x++] = "00000530 Delrin D'Mello's Birthday<br> Denzil Felix D'Mello's Birthday <br><br>";
dA[x++] = "00000531 Jonah Aloysius Peris Bhatt's Birthday (1985) <br><br>";
dA[x++] = "00000602 Samatha Dharmaraj's Birthday <br> Nancy Rita D'Mello's Death Anniversary (2006) <br><br>";
dA[x++] = "00000610 Merwin Pais's Birthday <br> Lt. Neville Rego's Death Anniversary (2010) <br><br>";
dA[x++] = "00000612 Winston Pais's Birthday <br><br>";
dA[x++] = "00000616 Deral Robbert D'Mello's Death Anniversary 2016) <br> Grathin's Birthday <br><br>";
dA[x++] = "00000617 Lt. Anna Joanna Patrao's Birthday<br><br>";
dA[x++] = "00000619 Titus Antony Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000621 Lt. Benny (Peres Bhatt) Lobo's Birthday (1913) <br><br>";
dA[x++] = "00000623 Delmon D'Mello's Birthday <br><br>";
dA[x++] = "00000625 Lt. Cosmos Peres Bhatt's Birthday <br> Lt. Francis Augustine Rego's Death Anniversary (1949) <br><br>";
dA[x++] = "00000627 Derrick John D'Mello's Birthday <br><br>";
dA[x++] = "00000628 Prathik Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000705 Daisy Carmel D'Mello's Birthday <br><br>";
dA[x++] = "00000708 Mehul Peres Bhatt's Birthday <br> Lt. Alphonso Joseph's Birthday <br><br>";
dA[x++] = "00000710 Jerome Augustine Peres Bhatt's death Anniversary (2012) <br> Michael Gojer's Birthday <br><br>";
dA[x++] = "00000712 John Gilbert Bernard Rego's Birthday <br><br>";
dA[x++] = "00000715 Lt. Henry Pinto's Birthday <br><br>";
dA[x++] = "00000723 Daniel Pinto's Birthday <br><br>";
dA[x++] = "00000725 Winifred Lorna Peres Bhatt's death Anniversary (1996) <br><br>";
dA[x++] = "00000728 Celine Rego's Death Anniversary (2009) <br> Lt.  Alex Rodrigues's Birthday (1928) <br> Elsie Rose Teresa Noronha's Death Anniversary (2018) <br><br>";
dA[x++] = "00000729 Vernon Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000806 Anita (Peres Bhatt) Barboza's Birthday <br><br>";
dA[x++] = "00000807 Lt. Lydia (Pinto) Lobo's Birthday (1941) <br><br>";
dA[x++] = "00000808 Dominic John D'Mello's Birthday <br><br>";
dA[x++] = "00000809 Lawrence Peres Bhatt's Birthday <br> Denika D'Mello's Birthday <br><br>";
dA[x++] = "00000810 Prakash Serao's Birthday <br> Winnifred Peres Bhatt's Death Anniversary <br><br>";
dA[x++] = "00000811 Lt. Celene Pinto's Birthday <br><br>";
dA[x++] = "00000813 Sr. Sabitha Peres Bhatt's Birthday <br> Maxium Barboza's Birthday <br> John Gratian Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000814 Dexia D'Mello's Birthday <br><br>";
dA[x++] = "00000825 Ignatius Cajetan Peres Bhatt's Death Anniversary (1877) <br><br>";
dA[x++] = "00000831 Magdalen D'Souza's Birthday (1829) <br><br>";
dA[x++] = "00000905 Charles Rego's Birthday (1935) <br><br>";
dA[x++] = "00000905 Dixon Lawrence D'Mello's Birthday <br> Demian Antony D'Mello's Birthday <br><br>";
dA[x++] = "00000906 Dylon Patrao's Birthday <br> Karen Quadras's Birthday <br><br>";
dA[x++] = "00000911 Fabian Peres Bhatt's Birthday <br><br>";
dA[x++] = "00000915 Marita (Peres Bhatt) Coelho's Birthday <br><br>";
dA[x++] = "00000917 Rashmi (Peres Bhatt) Pais's Birthday <br> Alphonso Rasquinha's Death Aniversary <br><br>";
dA[x++] = "00000923 Denson Jolon D'Mello's Birthday <br><br>";
dA[x++] = "00000924 Mario Pinto's Birthday <br><br>";
dA[x++] = "00000925 Ralph Patrao's Birthday <br><br>";
dA[x++] = "00000927 Sonia Monica (Fernandes) Peris Bhatt's Birthday <br><br>";
dA[x++] = "00000929 Michael Robbert Patrao's Birthday <br><br>";
dA[x++] = "00000930 Lt. Jerome Salvador Rego's Birthday (1900) <br><br>";
dA[x++] = "00001003 Gladwin Gilbert - Benita (D'Souza) Peres Bhatt's Wedding Anniversary (2021) <br><br>";
dA[x++] = "00001004 Antony Joseph Peres Bhatt's Death Aniversary (2012) <br><br>";
dA[x++] = "00001007 Nyneshwar Naik's Birthday <br><br>";
dA[x++] = "00001008 Jordan Peris Bhatt's Birthday <br><br>";
dA[x++] = "00001009 Tanya (D'Souza) Lobo's Birthday <br><br>";
dA[x++] = "00001010 Gloria (Peres Bhatt) Serao's Birthday <br><br>";
dA[x++] = "00001012 Dixon Lawrence - Jyothi Maria (D'Souza) D'Mello's Wedding Anniversary (2008) <br><br>";
dA[x++] = "00001015 Charles Emmanuel Noronha's Birthday <br><br>";
dA[x++] = "00001018 Vineetha D'Mello's Birthday <br> Michael - Susan (D'Cunha) Gojer's Wedding Anniversary <br><br>";
dA[x++] = "00001021 Juliana (D'Cunha) Peres Bhatt's Birthday <br> Flavian (Lobo) Peres Bhatt's Birthday <br> Blessin Jane Peres's Birthday <br><br>";
dA[x++] = "00001022 Lt. Francis Augustine Rego's Birthday (1891) <br> Lt. Elsie Rose Teresa Noronha's Birthday (1925) <br><br>";
dA[x++] = "00001025 Desmond Edward D'Mello's Birthday <br> Anna Joanna (Peres Bhatt) Patrao's Death Anniversary <br><br>";
dA[x++] = "00001027 Lt. Mercy Patrao's Birthday <br><br>";
dA[x++] = "00001028 Prakash - Gloria (Peres Bhatt) Serao's Wedding Anniversary <br><br>";
dA[x++] = "00001031 Harmon Roshan Victor Peres Bhatt's Birthday <br> Lt. Neville Rego's Birthday <br><br>";
dA[x++] = "00001108 Grace (Soans) Menezes's Birthday <br><br>";
dA[x++] = "00001110 Rishika Rupam's Birthday <br><br>";
dA[x++] = "00001111 Martin Antony Rosario Sequeira Kamath's Birthday (1902) <br><br>";
dA[x++] = "00001114 Jerome Salvador - Alertina Elizabeth Evelyn (D'Souza) Rego's Wedding Anniversary (1934) <br><br>";
dA[x++] = "00001116 Shoba Jane (Sequeira) Peres Bhatt's Birthday <br> Dale Patrao's Birthday <br><br>";
dA[x++] = "00001118 Dionysius Francis D'Mello's Birthday <br> Harrold Peres Bhatt's Death Anniversary <br> John Gratian Peres Bhatt's Death Anniversary (1967) <br><br>";
dA[x++] = "00001125 Cosmos Peres Bhatt's Death Anniversary <br><br>";
dA[x++] = "00001207 Alisha Serao's Birthday <br><br>";
dA[x++] = "00001208 Nellie Monica Peres Bhatt's Death Anniversary (2015) <br><br>";
dA[x++] = "00001210 Esperensa Monica Peres Bhatt's Death Anniversary (2015) <br><br>";
dA[x++] = "00001211 Lt. Lily Marceline (Peres Bhatt) Pinto's Birthday <br> Jyothi Maria (D'Souza) D'Mello's Birthday <br><br>";
dA[x++] = "00001215 Rita (Madtha) Peres Bhatt's Birthday <br><br>";
dA[x++] = "00001216 Jerome Salvador Rego's Death Anniversary (1968) <br><br>";
dA[x++] = "00001219 Yvone (Lobo) Pinto's Birthday <br><br>";
dA[x++] = "00001226 Lt. Nancy Rita (Peres Bhatt) D'Mello's Birthday  (1938) <br> Jacintha Pramila (Monterio) Peres Bhatt's Birthday <br> Arun William - Jyothsna Winifred (Peris Bhatt) D'Souza Wedding Anniversary (2008) <br><br>";
dA[x++] = "00001229 Joshua Henry - Sonia Monica (Fernandes) Peris Bhatt's Wedding Anniversary (2008) <br><br>";
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