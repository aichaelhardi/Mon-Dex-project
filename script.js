// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.
// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
const grid=
document.getElementById("grid");
function afficherCreatures(liste){
    grid.innerHTML="";
    liste.forEach(function(creature){
        const carte=
        document.createElement("article");
        carte.className="flex flex-col gap-3 rounded-[40px] bg-white p-4";
        carte.innerHTML=`<div class="relative flex h-48 items-center justify-center"> <img src="${creature.image}" alt="${creature.name}"
        class="h-full w-full object-contain">
        <span class="absolute left-3 top-2 font-bold text-black">
        ${creature.id}
        </span>
        </div>
        <h3 class="text-xl font-bold">${creature.name}</h3>
        <p>Type :${creature.type}</p>
        <p>Niveau:${creature.level}</p>
        <p> Total:${
            creature.stats.hp +
            creature.stats.attack+
            creature.stats.defence
        }</p>
        <button
        type="button"
        class="btn-outline detail-btn"
        data-id="${creature.id}"
        >
        detail
        </button>
        `;
        grid.appendChild(carte);
    });
}
 afficherCreatures(creatures);



// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
