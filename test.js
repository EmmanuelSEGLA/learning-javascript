let time , h,min, sec, choix,name

//------------------------------------------------------------------

function salut (name){
    do {
    name = prompt("bonjour monsieur votre nom s'il vous plait:")
} while (!isNaN(name));

alert ( `
😎😎Bienvenue ${name} dans "$ horloge de ⏲️BW$S-GMT⏲️ $"😎😎` )
}
//------------------------------------------------------------------

function getTime (h,min,sec,choix, H , Min ,Sec){

  h = Number(prompt(`il fait quel 'heure' chez vous:`))  

  while(isNaN(h) ){
    h = Number(prompt(`il fait quel 'heure' chez vous:`))  
}
while(h <0 || h >= 24)  {
    h = Number(prompt(`il fait quel 'heure' chez vous:`))
  } 
    
/*---------------------------*/

while(isNaN(min) ){
  min = Number(prompt(`la 'minute' chez vous:`))  
}
while(min <0 || min >=60)  {
  min = Number(prompt(`la 'minute' chez vous:`))
} 

/*---------------------------*/

while(isNaN(sec) ){
  sec = Number(prompt(`à la 'seconde' : `))  
}
while(sec <0 || sec >= 60)  {
  sec = Number(prompt(`à la 'seconde' : `))
} 

/*---------------------------*/
while(choix !=="oui" && choix !== "non")  {
  choix = prompt(`
etes-vous sur de votre entrer ==>  ⏲️ ${h}h ${min}min  ${sec}sec ⏲️  ?
 "oui" pour continuer
  ou "non" pour reprendre
`)
} 


/*---------------------------*/
if (choix ==="non") {
  getTime();
}
if (choix ==="oui") {
  calculTime( h,min, sec);
}

}

//------------------------------------------------------------------

function calculTime(h,min,sec){

    if (sec<60) {
        sec++ 
       }
       if (sec===60) {
         sec=00
         min++
               if (min<60) {
                 min
               }
               if (min==60) {
                 min=00
                 if (h<23) {
                   h++
                 }
                 if (h==23) {
                   h=00
                   min=00
                   sec= 00
                 }
               }
             }
       
 let H = h
 let Min = min
 let Sec = sec
 /*---------------------------*/
            
 alert(`après une seconde il sera ⏲️${H}h ${Min}min  ${Sec}sec⏲️  précise sur votre montre
 ` )
 /*---------------------------*/
 switch (true) {
    case H<12:
      alert(`Bon début de journée à vous monsieur.c'était l'horloge du 😎*BW$S*😎  😊😊😂`)
  
        break;
    case H>=12 && H<19:
        alert(`Bon après-midi à vous monsieur.c'était l'horloge du 😎*BW$S*😎  😊😊😂`)
        
        break;
    default:
        alert(`Bonne Nuit monsieur.c'était l'horloge du 😎*BW$S*😎  😊😊😂`)

        break;
 }

}

// //------------------------------------------------------------------


//------------------------------------------------------------------
salut();
getTime();


//------------------------------------------------------------------

