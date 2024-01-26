// Event Calendar
// copyright Stephen Chapman, 10th June 2006, 22nd January 2010

var tb = 'b'; // top or bottom (t or b)
var headbg = '#186e3d';  // table heading background colour - no effect
var todaybg = '#186e3d'; // current selected date background colour -no effect
var textclr = '#000000'; // text colour
var linkclr = 'red'; // link text colour
var noMessage =  '<p><br>No events to display for today <br><br></p>'; // message to display when no entry in array

var dA = new Array(); var x = 0;

// first 8 characters in ccyymmdd format for single date events
// first 8 characters in 0000mmdd format for every year events
dA[x++] =  "00000101  <h5>JULIET D'MELLO's Birthday <br><br>VANDANA D'MELLO (CARLO)'s  Birthday <br><br>"; 
dA[x++] =  "00000102  <h5>CECIL GREGORY CHRISTOPHER - RANEE GLAPHYRA (PERES BHATT) NORONHA's wedding anniversary <br><br>";
dA[x++] =  "00000104  <h5>MARVIN COELHO's Birthday <br><br>";
dA[x++] =  "00000105  <h5>LAVINA PERES BHATT (D'SOUZA)'s Birthday <br><br>";
dA[x++] = "00000106  <h5>JEROME AUGUSTINE - JOYCE PERES BHATT wedding anniversary<br><br> JOSEPH ANTONY - BENEDICTA (FERNANDES) PERES BHATT's wedding anniversary (1969)<br><br>  MARINA GAONKAR (PINTO)'s Birthday <br><br>";
dA[x++] = "00000107  <h5>SHEELA EMILIANA PERIS BHATT (D'SOUZA)'s Birthday (1988) <br><br> JONAH ALOYSIUS - SHEELA EMILIANA (D'SOUZA) PERES BHATT's Wedding Anniversary (2016, St. Sebastian Church, Bendur, Mangalore) <br><br>DORIS MARY (PERES BHATT) NORONHA(32)'s Birthday (1901) <br><br>";
dA[x++] = "00000108  <h5>ERIC J.F.A LOBO(66)'s Death Anniversary (2020) <br><br> KEITH JUDE - ANNETE PRIYA (D'MELLO) REBELLO's Wedding Anniversary (2018, St. Sebastian Church, Bendur, Mangaluru) <br><br>";
dA[x++] = "00000109  <h5>BASIL GRATION D'MELLO's Death Anniversary (2006)<br><br> GRACE (PERES BHATT) PINTO(93)'s Death Anniversary (2017, Urwa, Mangaluru) <br><br>";
dA[x++] = "00000110  <h5>ARUN D'SOUZA's Birthday <br><br> ALLWYN - LYDIA (PINTO) LOBO's Wedding Anniversary (1966) <br><br>";
dA[x++] = "00000112  <h5>DENCIA JIYA D'MELLO's Birthday <br><br>";
dA[x++] = "00000113  <h5>GERALD VINCENT D'SOUZA(91)'s Death Anniversary (2006, Chennai, Tamil Nadu)<br><br>";
dA[x++] = "00000115  <h5>MICHAEL PERES BHATT(66)'s Birthday (1927)<br><br>";
dA[x++] = "00000116  <h5>SIMON JOHN PERES BHATT(78) was Baptised (1896, Urwa, Mangaluru)<br><br>";
dA[x++] = "00000118  <h5>FR. JULIUS RASQUINHA's Birthday <br><br> TANUSHRI PERES BHATT (PILLAI)'s Birthday <br><br>";
dA[x++] = "00000119  <h5>RAJIV BASIL's Death Anniversary (1958) <br><br>"
dA[x++] = "00000123  <h5>MARY RASQUINHA (PERES BHATT)'s Birthday <br><br>";
dA[x++] = "00000125  <h5>ALEX RODRIGUES's Death Anniversary (1966) <br><br>";
dA[x++] = "00000126  <h5>Gladson Joseph - Lavina (D'Souza) Peres Bhatt's Wedding Anniversary <br><br>";
dA[x++] = "00000127  <h5>BONAVENTURE MANUEL REGO's Birthday (1866) <br><br>";
dA[x++] = "00000130  <h5>SUSAN QUADRAS (RASQUINHA)'s Birthday<br><br> ROBERT RUDOLPH MISQUITH(71)'s Death Anniversary <br><br>";
dA[x++] = "00000201  <h5>BONAVENTURE MANUEL- ESPERANCA (PERES BHATT) REGO Wedding Anniversary (1889, Rosario Cathedral, Mangalore) <br><br>";
dA[x++] = "00000202  <h5>DIONYSIUS-JULIET D'MELLO's Wedding anniversary<br><br> Joseph (Joe) Peres Bhatt(73)'s Birthday (1939) <br><br>";
dA[x++] = "00000203  <h5>RONALD PINTO's Birthday<br><br> SALVADORE PERES BHATT's Birthday (1877) <br><br>";
dA[x++] = "00000205  <h5>RANEE GLAPHYRA (PERES BHATT) NORONHA(78)'s Birthday (1942) <br><br>";
dA[x++] = "00000208  <h5>TITUS ANTONY - TANUSHRI (PILLAI) PERES BHATT's Wedding Anniversary (2018, Holy Rosario Cathedral, Mangalore) <br><br>";
dA[x++] = "00000209  <h5>LEENA PATRAO's Birthday <br><br>";
dA[x++] = "00000210  <h5>JEROME AUGUSTINE PERES BHATT's Birthday (1943) <br><br> ALLAN - TANYA (D'SOUZA) LOBO's Wedding Anniversary";
dA[x++] = "00000211  <h5>MAHIMA FERNANDES's Birthday <br><br>";
dA[x++] = "00000212  <h5>PETER - DAISY CARMEL (D'MELLO) FERNANDES's Wedding Anniversary <br><br>";
dA[x++] = "00000214  <h5>GRATIAN ALEXIS PINTO(79)'s Death Anniversary (1991) <br><br>";
dA[x++] = "00000215  <h5>DEMIAN ANTONY - VANDANA (CARLO) D'MELLO's Wedding Anniversary <br><br>";
dA[x++] = "00000216  <h5>DEON D'MELLO's Birthday <br><br>";
dA[x++] = "00000217  <h5>SR. HARRIET (IRENE) PERES BHATT's Birthday <br><br>";
dA[x++] = "00000221  <h5>SAMUEL PINTO's Birthday<br><br> NATHALIA PERES BHATT's Birthday (1881) <br><br>";
dA[x++] = "00000224  <h5>GILBERT PHILLIP PERES BHATT's Death Anniversary (1897) <br><br> MAGDALEN PERES BHATT's Death Anniversary (1897) <br><br>";
dA[x++] = "00000225  <h5>LYDIA (PINTO) LOBO(66)'s Death Anniversary (2008) <br><br>";
dA[x++] = "00000302  <h5>GRATION D'MELLO'S Birthday<br><br> HARROLD PERES BHATT's Birthday <br><br>";
dA[x++] = "00000303  <h5>MARIAN PERES BHATT's Birthday <br><br>";
dA[x++] = "00000306  <h5>VIDA JESSIE (MATHIAS) PERES BHATT(92)'s Death Anniversary (2014, Bejai, Mangaluru)<br><br>";
dA[x++] = "00000310  <h5>BENNY (PERES BHATT) LOBO's Death Anniversary<br><br> ANTHONY JOSEPH PERES BHATT(48)'s Birthday (1871)<br><br> SEBASTIAN PERES BHATT(59)'s Birthday<br><br>";
dA[x++] = "00000312  <h5>BASIL GREGORY PINTO(93)'s Birthday (1904) <br><br>";
dA[x++] = "00000313  <h5>NAYANA (RASQUINHA) NAIK's Birthday<br><br>PERCIVAL LOBO's Birthday <br><br>";
dA[x++] = "00000314  <h5>CHARLES EMMANUEL NORONHA's Death Anniversary (1950) <br><br>";
dA[x++] = "00000315  <h5>WINIFRED (D'SOUZA) LORNA PERES BHATT's Birthday (1920) <br><br>";
dA[x++] = "00000317  <h5>NICHOLAS JOHN PERES BHATT(80)'s Death Anniversary (1922, Jeppu Cemetery, Nandigudda, Mangaluru) <br><br>";
dA[x++] = "00000318  <h5>GLADSON JOSEPH PERES BHATT's Birthday (1985) <br><br>";
dA[x++] = "00000319  <h5>ALLWYN LOBO(70)'s Birthday (1937) <br><br>";
dA[x++] = "00000320  <h5>ALWYN BALTHAZAR SALDANHA(81)'s Birthday (1911) <br><br>";
dA[x++] = "00000321  <h5>Priestly Ordination of BRAIN PERES BHATT (2002) <br><br>";
dA[x++] = "00000323  <h5>MERCY (PERES BHATT) PATRAO's Death Anniversary <br><br>";
dA[x++] = "00000325  <h5>JOSEPH SALVADORE PINTO(47)'s Birthday (47)<br><br>";
dA[x++] = "00000328  <h5>GENEVIEVE (NAZARETH) D'SOUZA(61)'s Death Anniversary (2018)<br><br>";
dA[x++] = "00000329  <h5>CAPT. IRWIN JOSEPH COELHO(67)'s Death Anniversary (2016, Mississauga, ON, Canada)<br><br>";
dA[x++] = "00000401  <h5>MONICA EMERCIANA (SUARES) PERES BHATT's Birthday <br><br>";
dA[x++] = "00000402  <h5>JUDE PERES BHATT's Birthday <br><br> JOANNA PERES BHATT's Birthday (2020) <br><br>";
dA[x++] = "00000403  <h5>MONICA EMERCIANA (SUARES) PERES BHATT's Death Anniversary (1936) <br><br>";
dA[x++] = "00000405  <h5>FABIAN PERES BHATT(69)'s Death Anniversary (2022)<br><br> GERALD VINCIENT D'SOUZA(91)'s Birthday (1914, Bengaluru, Karnataka) <br><br>";
dA[x++] = "00000411  <h5>DORIS MARY (PERES BHATT) NORONHA(32)'s Death Anniversary (1933) <br><br>";
dA[x++] = "00000413  <h5>FR. BRAIN PERES BHATT Birthday<br><br> MAJOR EUSTACE REBELLO(36)'s Birthday (1925, Mangaluru, Karnataka) <br><br>";
dA[x++] = "00000417  <h5>ALLWYN LOBO(70)'s Death Anniversary (2007)<br><br>";
dA[x++] = "00000417  <h5>SUSANA NÈLIDA DIM(44)'s Death Anniversary (1998, São Paulo, Brazil)<br><br> FRANCIS XAVIER MATHIAS's Birthday (1906)<br><br>";
dA[x++] = "00000419  <h5>JYOTHSNA WINIFRED (PERES BHATT) D'SOUZA's Birthday<br><br> GLADWIN GILBERT PERES BHATT's Birthday <br><br>";
dA[x++] = "00000421  <h5>LETITA LOBO's Birthday (1899) <br><br>";
dA[x++] = "00000428  <h5>BENNET PERES BHATT's Birthday<br><br> AGNES (PERES BHATT) REBELLO's Birthday (1929, Mangaluru, Karnataka) <br><br>";
dA[x++] = "00000420  <h5>DAVID ALBERT PERES BHATT(64)'s Birthday (1863)<br><br>";
dA[x++] = "00000430  <h5>RONALD - BLOSSOM (PERES BHATT) PINTO's Wedding Anniversary <br><br>";
dA[x++] = "00000501  <h5>GILBERT PHILLIP PERES BHATT's Birthday (1915) <br><br>";
dA[x++] = "00000502  <h5>SR. HARRIET (IRENE) PERES BHATT's death Anniversary (2012) <b> ALEX - PHILOMENA (PERES BHATT) RODRIGUES's Wedding Anniversary (1960) <br><br>";
dA[x++] = "00000504  <h5>AAVIN - RAINAL (D'SOUZA) LOBO's Wedding Anniversary <br><br> NELLIE MONICA (LOBO) PERES BHATT(101)'s Birthday (1914) <br><br> RANEE GLAPHYRA  (PERES BHATT) NORONHA(78)'s Death Anniversary (2020, Bengaluru, Karnataka) <br><br> MARTIN ANTONY ROSARIO SEQUEIRA KAMATH(79)'s Death Anniversary (1982, Kolkata, West Bengal)<br><br>ALWYN BALTHAZAR SALDANHA(81)'s Death Anniversary (1992) <br><br>";
dA[x++] = "00000505  <h5>CECILIA PERES BHATT was born (1923)<br><br>";
dA[x++] = "00000508  <h5>BENNET - JACINTHA PRAMILA (MONTERIO) PERES BHATT's Wedding Anniversary (2019, Holy Rosario Cathedral, Mangalore) <br><br>";
dA[x++] = "00000511  <h5>FABIAN (69) - FLAVIAN (LOBO) PERES BHATT's Wedding Anniversary (1981) <br><br>";
dA[x++] = "00000513  <h5>DERAL ROBBERT D'MELLO's Birthday <br><br>";
dA[x++] = "00000514  <h5>JAYLON SIMON PERES BHATT's Birthday <br><br>"; 
dA[x++] = "00000519  <h5>MARIO - RISHIKA RUPAM PINTO's Wedding Anniversary <br><br> GILBERT PHILLIP - WINIFRED LORNA (D'SOUZA) PERES BHATT's Wedding Anniversary <br><br> ANTONY NORONHA's Death Anniversary (2006) <br><br>";
dA[x++] = "00000520  <h5>JOEL GAONKAR's Birthday <br><br>";
dA[x++] = "00000524  <h5>MAXIUM - ANITA (PERES BHATT) BARBOZA's Wedding Anniversary <br><br>";
dA[x++] = "00000525  <h5>MAYA PERES BHATT's Birthday <br><br>";
dA[x++] = "00000526  <h5>JOVCE (REBELLO) PERES BHATT's Birthday <br><br> AILEEN JEAN D'SOUZA's Birthday <br><br>";
dA[x++] = "00000527  <h5>MABEL (PERES BHATT) PINTO's Birthday<br><br> LAWRENCE - JULIANA (D'CUNHA) PERES BHATT's Wedding Anniversary (1980) <br><br>";
dA[x++] = "00000528  <h5>BLOSSOM (PERES BHATT) PINTO's Birthday <br><br> AEDAN JOHN D'SOUZA's Birthday <br><br>";
dA[x++] = "00000529  <h5>JOSHUA HENRY PERES BHATT's Birthday  <br><br> ULRICA PINTO's Birthday <br><br>";
dA[x++] = "00000530  <h5>DELRIN D'MELLO's Birthday<br><br> DENZIL FELIX D'MELLO's Birthday <br><br>";
dA[x++] = "00000531  <h5>JONAH ALOYSIUS PERIS BHATT's Birthday (1985) <br><br>";
dA[x++] = "00000602  <h5>SAMATHA BENEDICT's Birthday <br><br> NANCY RITA D'MELLO's Death Anniversary (2006) <br><br>";
dA[x++] = "00000607  <h5>RACHEL MARIA REGO's Birthday (1903)<br><br> CELINE PINTO(80)'s Death Anniversary (2019, Mangaluru, Karnataka)<br><br>";
dA[x++] = "00000610  <h5>MERWIN PAIS's Birthday <br><br> NEVILLE REGO(71)'s Death Anniversary (2010)<br><br> LAURA (MIRANDA) LOBO(86)'s Death Anniversary (2019, Mangaluru, Karnataka)<br><br>";
dA[x++] = "00000612  <h5>WINSTON PAIS's Birthday <br><br>";
dA[x++] = "00000616  <h5>DERAL ROBBERT D'MELLO's Death Anniversary 2016) <br><br> GRATHIN's Birthday <br><br>";
dA[x++] = "00000617  <h5>ANNA JOANNA PATRAO's Birthday<br><br>";
dA[x++] = "00000619  <h5>TITUS ANTONY PERES BHATT's Birthday <br><br>";
dA[x++] = "00000621  <h5>BENNY (PERES BHATT) LOBO's Birthday (1913) <br><br>";
dA[x++] = "00000623  <h5>DELMON D'MELLO's Birthday <br><br>";
dA[x++] = "00000625  <h5>COSMOS PERES BHATT's Birthday <br><br>FRANCIS AUGUSTINE REGO(57)'s Death Anniversary (1949) <br><br>";
dA[x++] = "00000627  <h5>DERRICK JOHN D'MELLO's Birthday <br><br>";
dA[x++] = "00000628  <h5>PRATHIK JOSEPH PERES BHATT's Birthday (1994)<br><br>";
dA[x++] = "00000629  <h5>FEDERICK PERES BHATT(75)'s death Anniversary (2006,Bengaluru, Karnataka) <br><br>";
dA[x++] = "00000701  <h5>WINNIFRED MARIE GRACE PINTO(89), (SR. NOELLE, AC)'s death Anniversary (2018, Mangaluru, Karnataka) <br><br>";
dA[x++] = "00000704  <h5>CYRIL ANTHONY PINTO(44)'s Birthday (1901) <br><br>";
dA[x++] = "00000705  <h5>DAISY CARMEL D'MELLO's Birthday <br><br>";
dA[x++] = "00000706  <h5>MARCELLINE (SUARES) PERES BHATT(60)'s Birthday (1938)<br><br>";
dA[x++] = "00000708  <h5>MEHUL PERES BHATT's Birthday <br><br>Alphonso Joseph's Birthday <br><br>";
dA[x++] = "00000710  <h5>JEROME AUGUSTINE PERES BHATT's death Anniversary (2012) <br><br> MICHAEL GOJER's Birthday <br><br>";
dA[x++] = "00000712  <h5>JOHN GILBERT BERNARD REGO's Birthday (1897)<br><br> CLARA SABINA PINTO's Birthday (1906) <br><br>";
dA[x++] = "00000714  <h5>DAVID ALBERT PERES BHATT(64)'s death Anniversary (1927)<br><br>";
dA[x++] = "00000715  <h5>HENRY PINTO's Birthday <br><br>";
dA[x++] = "00000716  <h5>CLIFFORD LAWRENCE ELIER ALBUQUERQUE(69)'s Birthday (1934, Mangaluru, Karnataka)<br><br>";
dA[x++] = "00000723  <h5>DANIEL PINTO's Birthday<br><br> JOHN AUSEBIUS PERES BHATT(87)'s death Anniversary (2011, Mangaluru, Karnataka) <br><br>";
dA[x++] = "00000725  <h5>WINIFRED LORNA PERES BHATT's death Anniversary (1996) <br><br>";
dA[x++] = "00000726  <h5>ELSIE ROSE TERESA (NORONHA) SALDANHA(92)'s Death Anniversary (2018)  <br><br>";
dA[x++] = "00000727  <h5>ROBERT RUDOLPH MISQUITH(71)'s Birthday  <br><br>";
dA[x++] = "00000728  <h5>CELINE REGO's Death Anniversary (2009) <br><br>ALEX RODRIGUES's Birthday (1928)<br><br> VIDA JESSIE (MATHIAS) PERES BHATT(92)'s Birthday (1921) <br><br>";
dA[x++] = "00000729  <h5>VERNON PERES BHATT's Birthday <br><br>";
dA[x++] = "00000806  <h5>ANITA (PERES BHATT) BARBOZA's Birthday <br><br>";
dA[x++] = "00000807  <h5>LYDIA (PINTO) LOBO(66)'s Birthday (1941) <br><br>";
dA[x++] = "00000808  <h5>DOMINIC JOHN D'MELLO's Birthday <br><br>";
dA[x++] = "00000809  <h5>LAWRENCE PERES BHATT's Birthday <br><br> DENIKA D'MELLO's Birthday <br><br>";
dA[x++] = "00000810  <h5>PRAKASH SERAO's Birthday <br><br> WINNIFRED PERES BHATT's Death Anniversary<br><br> MARY LAURENTIA GRATIA PINTO's Birthday (1897) <br><br>";
dA[x++] = "00000811  <h5>CELENE PINTO's Birthday <br><br>";
dA[x++] = "00000813  <h5>SR. SABITHA PERES BHATT's Birthday <br><br> MAXIUM BARBOZA's Birthday <br><br> JOHN GRATIAN PERES BHATT(63)'s Birthday (1904) <br><br>";
dA[x++] = "00000814  <h5>DEXIA D'MELLO's Birthday <br><br>";
dA[x++] = "00000815  <h5>LAWRENCE SYLVESTER MISQUITH(65)'s Birthday (1902, Mangaluru, Karnataka)<br><br>";
dA[x++] = "00000816  <h5>MARY PIADED (PERES BHATT) CORNELIO's Birthday (1871)<br><br>";
dA[x++] = "00000822  <h5>CECIL GREGORY CHRISTOPHER NORONHA(84)'s Birthday (1938)<br><br>";
dA[x++] = "00000825  <h5>IGNATIUS CAJETAN PERES BHATT(58)'s Death Anniversary (1877) <br><br>";
dA[x++] = "00000831  <h5>MAGDALEN (D'SOUZA) PERES BHATT(67)'s Birthday (1829) <br><br>";
dA[x++] = "00000902  <h5>CHARLES REGO's Birthday (1935)  <br><br>";
dA[x++] = "00000905  <h5>DIXON LAWRENCE D'MELLO's Birthday <br><br> DEMIAN ANTONY D'MELLO's Birthday<br><br> BONAVENTURE PERES BHATT's Birthday (1868) <br><br>";
dA[x++] = "00000906  <h5>DYLON PATRAO's Birthday <br><br> KAREN QUADRAS's Birthday <br><br>";
dA[x++] = "00000911  <h5>FABIAN (69) PERES BHATT's Birthday (1952) <br><br>";
dA[x++] = "00000912  <h5>ADRIAN SALDANHA (2011) <br><br>";
dA[x++] = "00000913  <h5>LAWRENCE SYLVESTER MISQUITH(65)'s Death Aniversary (1967, Hassan, Karnataka) <br><br>";
dA[x++] = "00000914  <h5>MERRYL - GRACE (SOANS) MENEZES's Wedding Anniversary (1986) <br><br>";
dA[x++] = "00000915  <h5>MARITA (PERES BHATT) COELHO's Birthday <br><br>";
dA[x++] = "00000916  <h5>MARIE KATHLEEN WINIFRED (PERES BHATT) D'SOUZA(88)'s Birthday (1929)<br><br>";
dA[x++] = "00000917  <h5>RASHMI (PERES BHATT) PAIS's Birthday <br><br> ALPHONSO RASQUINHA's Death Aniversary <br><br>";
dA[x++] = "00000923  <h5>DENSON JOLON D'MELLO's Birthday <br><br>";
dA[x++] = "00000924  <h5>MARIO PINTO's Birthday <br><br>";
dA[x++] = "00000925  <h5>RALPH PATRAO's Birthday <br><br>";
dA[x++] = "00000927  <h5>SONIA MONICA (FERNANDES) PERIS BHATT's Birthday<br><br> CHARLES DAMIEN PERES BHATT(72)'s Birthday (1933) <br><br>";
dA[x++] = "00000929  <h5>MICHAEL ROBBERT PATRAO's Birthday <br><br>";
dA[x++] = "00000930  <h5>JEROME SALVADOR REGO(68)'s Birthday (1900, Bengaluru, Karnataka) <br><br>";
dA[x++] = "00001002  <h5>CHARLES DAMIEN PERES BHATT(72)'s  Death Aniversary (2005, Bengaluru, Karnataka)<br><br>";
dA[x++] = "00001003  <h5>GLADWIN GILBERT - BENITA (D'SOUZA) PERES BHATT's Wedding Anniversary (2021, St. Vincient Ferrer Church, Valencia, Mangalore) <br><br>";
dA[x++] = "00001004  <h5>ANTONY JOSEPH PERES BHATT(73)'s Death Aniversary (2012, Jeppu, Nandigudda, Mangaluru) <br><br>";
dA[x++] = "00001005  <h5>CECIL GREGORY CHRISTOPHER NORONHA(84) Death Aniversary (2022,Bengaluru, Karnataka) <br><br>";
dA[x++] = "00001007  <h5>NYNESHWAR NAIK's Birthday <br><br>";
dA[x++] = "00001008  <h5>JORDAN PERIS BHATT's Birthday <br><br>";
dA[x++] = "00001009  <h5>TANYA (D'SOUZA) LOBO's Birthday <br><br>";
dA[x++] = "00001010  <h5>GLORIA (PERES BHATT) SERAO's Birthday <br><br>";
dA[x++] = "00001012  <h5>DIXON LAWRENCE - JYOTHI MARIA (D'SOUZA) D'MELLO's Wedding Anniversary (2008) <br><br>";
dA[x++] = "00001015  <h5>CHARLES EMMANUEL NORONHA's Birthday <br><br>";
dA[x++] = "00001018  <h5>VINEETHA D'MELLO's Birthday <br><br> MICHAEL - SUSAN (D'CUNHA) GOJER's Wedding Anniversary <br><br>";
dA[x++] = "00001020  <h5>BENEDICTA (FERNANDES) PERES BHATT's Birthday <br><br>";
dA[x++] = "00001021  <h5>JULIANA (D'CUNHA) PERES BHATT's Birthday <br><br> FLAVIAN (LOBO) PERES BHATT's Birthday <br><br> BLESSIN JANE PERES's Birthday <br><br> DESMOND - VINITHA D'MELLO's Wedding Anniversary.<br><br>";
dA[x++] = "00001022  <h5>FRANCIS AUGUSTINE REGO(57)'s Birthday (1891) <br><br>ELSIE ROSE TERESA (NORONHA) SALDANHA(92)'s Birthday (1925)<br> LEO PERES BHATT's Birthday (1869) <br><br>";
dA[x++] = "00001025  <h5>DESMOND EDWARD D'MELLO's Birthday <br><br> ANNA JOANNA (PERES BHATT) PATRAO's Death Anniversary <br><br>";
dA[x++] = "00001027  <h5>MERCY PATRAO's Birthday <br><br>";
dA[x++] = "00001028  <h5>PRAKASH - GLORIA (PERES BHATT) SERAO's Wedding Anniversary <br><br>";
dA[x++] = "00001031  <h5>HARMON ROSHAN VICTOR PERES BHATT's Birthday <br><br>NEVILLE REGO(71)'s Birthday (1938)<br><br>";
dA[x++] = "00001103  <h5>KEVIN STANISLAUS SALDANHA's Birthday (1937) <br><br>";
dA[x++] = "00001104  <h5>MARIE KATHLEEN WINIFRED (PERES BHATT) D'SOUZA(88)'s Death Anniversary (2017)<br><br>";
dA[x++] = "00001108  <h5>GRACE (SOANS) MENEZES's Birthday <br><br>";
dA[x++] = "00001110  <h5>RISHIKA RUPAM's Birthday <br><br>";
dA[x++] = "00001111  <h5>MARTIN ANTONY ROSARIO SEQUEIRA KAMATH's Birthday (1902) <br><br>";
dA[x++] = "00001114  <h5>JEROME SALVADOR - ALERTINA ELIZABETH EVELYN (D'SOUZA) REGO's Wedding Anniversary (1934, Nungambakam, Madras) <br><br>";
dA[x++] = "00001116  <h5>SHOBA JANE (SEQUEIRA) PERES BHATT's Birthday <br><br> DALE PATRAO's Birthday <br><br>";
dA[x++] = "00001118  <h5>DIONYSIUS FRANCIS D'MELLO's Birthday <br><br> HARROLD PERES BHATT's Death Anniversary <br><br> JOHN GRATIAN PERES BHATT(63)'s Death Anniversary (1967) <br><br>";
dA[x++] = "00001121  <h5>MARGARET (PINTO) PATRAO's (2015. Bendore, Mangaluru)<br><br>NATHALIA PERES BHATT(1)'s Birthday (1864)<br><br>";
dA[x++] = "00001122  <h5>GRATIAN ALEXIS PINTO(79)'s Birthday (1911)<br><br>";
dA[x++] = "00001124  <h5>MERRYL MENEZES(67)'s Birthday  (1954)<br><br>";
dA[x++] = "00001125  <h5>COSMOS PERES BHATT's Death Anniversary <br><br>";
dA[x++] = "00001129  <h5>KEONA LEANNE LOBO's Birthday <br><br>";
dA[x++] = "00001201  <h5>LEO PERES BHATT - JOANNA MACHADO's Wedding Anniversary (1893, Urwa, Mangaluru) <br><br>";
dA[x++] = "00001203  <h5>MERRYL MENEZES(67)'s Death Anniversary (2021) <br><br>";
dA[x++] = "00001205  <h5>MYLENE PINTO's Birthday <br><br>";
dA[x++] = "00001207  <h5>ALISHA SERAO's Birthday <br><br>";
dA[x++] = "00001208  <h5>NELLIE MONICA (LOBO) PERES BHATT(101)'s Death Anniversary (2015, Bengaluru, Karnataka) <br><br>";
dA[x++] = "00001210  <h5>ESPERENSA MONICA (LASRADO) PERES BHATT(94)'s Death Anniversary (2015) <br><br>";
dA[x++] = "00001211  <h5>LILY MARCELINE (PERES BHATT) PINTO's Birthday <br><br> JYOTHI MARIA (D'SOUZA) D'MELLO's Birthday<br><br> CLIFFORD LAWRENCE ELIER ALBUQUERQUE(69)'s Death Anniversary (2003, Kochi, Kerala)<br><br>";
dA[x++] = "00001214  <h5>BRIGADIER STANISLAUS ALPHONSE NICASIUS SEQUIERA KAMATH(75)'s Birthday (1918)<br><br>";
dA[x++] = "00001215  <h5>RITA (MADTHA) PERES BHATT's Birthday <br><br>";
dA[x++] = "00001216  <h5>JEROME SALVADOR REGO(68)'s Death Anniversary (1968, Kulshekar, Mangaluru) <br><br>";
dA[x++] = "00001219  <h5>YVONE (LOBO) PINTO's Birthday <br><br>";
dA[x++] = "00001220  <h5>MAJOR EUSTACE REBELLO(36)'s Death Anniversary (1961, Ferozepore, Punjab)<br><br>";
dA[x++] = "00001226  <h5>NANCY RITA (PERES BHATT) D'MELLO's Birthday  (1938) <br><br> JACINTHA PRAMILA (MONTERIO) PERES BHATT's Birthday <br><br> ARUN WILLIAM - JYOTHSNA WINIFRED (PERIS BHATT) D'SOUZA's Wedding Anniversary (2008) <br><br>";
dA[x++] = "00001228  <h5>RALPH AVINASH - ASHTRIN AMOLA (PINTO) MENEZES's Wedding Anniversary (2023) <br><br>";
dA[x++] = "00001229  <h5>JOSHUA HENRY - SONIA MONICA (FERNANDES) PERIS BHATT's Wedding Anniversary (2008)<br><br> MUKESH - SAMATHA (BENEDICT)'s Wedding Anniversary (2021) <br><br>";
dA[x++] = "00001231  <h5>SUSANA NÈLIDA DIM(44)'s Birthday (1953, Buenos Aires, Argentina) <br><br>";
// dA[x++] = "20060610 New Event Calendar Started today";


