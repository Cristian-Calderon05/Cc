//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=260; timeIni=260; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=2;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#00FF80"; colorButton="#91962F"; colorText="#000000"; colorSele="#0080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Excelente"; messageTime=""; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UExBTlRJTExBUw==","VEVYVE8=","IEZPTkRP","RUxFTUVOVE9T","RURVQ0FUSVZP","Q1JFQVRJVklEQUQ=","SUNPTk9T","QU5JTUFDScOTTg==","VElQT0dSQUbDjUE=","VklERU8="];imaW=["","","0_fondo.jpg","","0_canva.jpg","","","","",""];queW=["Diseños preestablecidos para personalizar fácilmente","","Parte visual de fondo que puede tener color o imagen. ","","","Capacidad para generar ideas visuales innovadoras","","Efecto visual para dar movimiento a los diseños","Estilo o diseño de la letra",""];var wordsL=[10,5,5,9,9,11,6,9,10,5];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="index_resources/media/"; textBNext="siguiente";
