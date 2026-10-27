// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#0000",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const creatures = [
    {
  id: "#025",                                                                                                                                       
  name: "Pikachu",                                             
  type: "Électrik",                                  
  level: "25",                                
  stats: { hp: 35, attack: 55, defence: 40 },   
  image: "images/pikachu2.png",         
  description: "Un pokémon célèbre qui stocke l'électricité dans ces joues ."        
},
{
  id: "#006",                                   
  name: "Dracaufeu",                             
  type: "Feu ",                                 
  level: "36",                                
  stats: { hp: 78, attack: 84, defence: 78 },   
  image: "images/dracaufeu2.png",         
  description: "Un puissant pokémon qui crache des flammes brûlantes."        
},
{
  id: "#150",                              
  name: "Mewtwo",                              
  type: "psy",                                  
  level: "70",                                
  stats: { hp: 106, attack: 110, defence: 90 },  
  image: "images/mewto2.png",        
  description: "un pokémon légendaire créé par manipulation génétique ."        
},
{
  id: "#149",                                  
  name: "Dracolosse",                             
  type: "Dragon",                                 
  level: "55",                               
  stats: { hp: 91, attack: 134, defence: 95 },   
  image: "images/dracolosse2.png",         
  description: "Un pokémon dragon puissant , connu par sa gentillesse."        
},
{
  id: "#094",                                  
  name: "Ectoplasma",                             
  type: "spectre",                                 
  level: "40",                               
  stats: { hp:60 , attack:65, defence:60  },   
  image: "images/ectoplama2.png",         
  description: " un pokémon mystérieux qui se cache dans les ombres."        
},                                                                               
    
{
  id: "#448",                                  
  name: "Lucario",                             
  type: "Acier",                                 
  level: "35",                               
  stats: { hp:70 , attack:110 , defence: 70 },   
  image: "images/lucario2.png",         
  description: "Un pokémon combattant capable de percevoir l'aura ."        
},
{
  id: "#384",                                  
  name: "Rayquaza",                             
  type: "Dragon",                                 
  level: "70",                               
  stats: { hp:105 , attack: 150, defence: 90 },   
  image: "images/rayquaza2.png",         
  description: "Un pokémon légendaire qui vit dans la haute atmosphère."        
},
{
  id: "#445",                                  
  name: "Carchacrok",                             
  type: "Dragon ",                                 
  level: "48",                               
  stats: { hp: 108, attack:130 , defence:95  },   
  image: "images/carchok2.png",         
  description: "Un pokémon puissant qui se déplace à très grande vitesse."        
},
{
  id: "#151",                                  
  name: "Mew",                             
  type: "psy",                                 
  level: "50",                               
  stats: { hp: 100, attack:100 , defence:100  },   
  image: "images/mew2.png",         
  description: "Un pokémon rare qui posséde un patrimoine génétique exceptionnel."        
},
{
  id: "#143",                                  
  name: "Ronflex",                             
  type: "Normal",                                 
  level: "35",                               
  stats: { hp:160 , attack:110 , defence: 65 },   
  image: "images/ronflex2.png",         
  description: "Un pokémon géant qui passe beaucoup de temps à dormir et à manger."        
},
{
  id: "#658",                                  
  name: "Amphinobi",                             
  type: "Eau",                                 
  level: "36",                               
  stats: { hp:72 , attack:95 , defence:67  },   
  image: "images/amphi2.png",         
  description: "Un pokémon ninja très rapide qui utilise des attaques d'eau."        
},
{
  id: "#133",                                  
  name: "Évoli",                             
  type: "Normal",                                 
  level: "15",                               
  stats: { hp: 55, attack:55 , defence: 50 },   
  image: "images/evoli2.png",         
  description: "Un pokémon connu pour ses nombreuses évolutions possibles."        
},


];
