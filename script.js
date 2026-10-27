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
const grid = document.getElementById("grid");
function afficherCreatures(liste) {
    grid.innerHTML = "";
    liste.forEach(function (creature) {
        const carte =
            document.createElement("article");
        carte.className = "flex flex-col gap-3 rounded-[40px] bg-white p-4";
        carte.innerHTML = `<div class="relative flex h-48 items-center justify-center"> <img src="${creature.image}" alt="${creature.name}"
        class="h-48 w-full object-contain md:h-56 lg:h-64">
        <span class="absolute left-3 top-2 font-bold text-black">
        ${creature.id}
        </span>
        </div>
        <h3 class="text-xl font-bold">${creature.name}</h3>
        <p>Type :${creature.type}</p>
        <p>Niveau:${creature.level}</p>
        <p> Total:${creature.stats.hp +
            creature.stats.attack +
            creature.stats.defence
            }</p>
        <button
        type="button"
        class="btn-outline ajouter à l'equipe-btn"
        >
        ajouter à l'equipe
        </button>
        `;
        carte.addEventListener("click", function () {
            showDetail(creature);
        });
        grid.appendChild(carte);
    });
}
afficherCreatures(creatures)

// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------
const detail = document.getElementById("detail");
const closeDetail = document.getElementById("closeDetail");
function showDetail(creature) {
    if (!detail || !creature)
        return;

    document.getElementById("detail-name").textContent = creature.name;
    document.getElementById("detail-id").textContent = creature.id;
    document.getElementById("detail-type").textContent = "Type: " + creature.type;
    document.getElementById("detail-level").textContent = "Niveau: " + creature.level;
    document.getElementById("detail-image").src = creature.image;
    document.getElementById("detail-description").textContent = creature.description;
    document.getElementById("detail-hp").textContent = creature.stats.hp;
    document.getElementById("detail-attack").textContent = creature.stats.attack;
    document.getElementById("detail-defence").textContent = creature.stats.defence;
    detail.classList.remove("hidden");
}
if (closeDetail && detail) {
    closeDetail.addEventListener("click", function () {
        detail.classList.add("hidden");
    });
}

// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------

function filtrerCreatures() {
    afficherCreatures(creatures);
    const filterdiv = document.querySelector("#filterButtons")
    filterdiv.addEventListener('click', (event) => {
        const btn = event.target.closest(".chip")
        const nametype = btn.textContent.toLowerCase().trim()
        if (nametype === 'all') {
            afficherCreatures(creatures);
            return
        }
        else {
            const resultats = creatures.filter((c) => c.type.toLowerCase().trim() === nametype)
            afficherCreatures(resultats);
        }

    });
} filtrerCreatures(creatures);

// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------
// const form = document.getElementById("creatureForm");
// const creatures = [];
// const regex = {
//     id: /^#\d{3}$/,
//     name: /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/,
//     type: /^[A-Za-zÀ-ÿ -]{3,20}$/,
//     stats: /^\d{1,3}$/,
//     image: /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i,
//     description: /^[\s\S]{10,200}$/,

// };
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value.trim();
//     const type = document.getElementById("type").value.trim();
//     const level = document.getElementById("level").value.trim();
//     const stats = document.getElementById("stats").value.trim();
//     const image = document.getElementById("image").value.trim();
//     const description = document.getElementById("description").value.trim();
//     const values = {
//         name,
//         type,
//         level,
//         stats,
//         image,
//         description,
//     };
//     const errors = {
//         id: "id doit contenir 3 chiffres.",
//         name: "le nom doit contenir 1 à 29 lettres.",
//         type: "le type doit contient 3 à 20 lettres",
//         stats: "les stats doivent etre entre 1 et 3 ",
//         image: "Entrez un chemin d'image valide(.png,.jpg,.webp).",
//         description: "La description doit contenir 10 à 200 caractéres."
//     };
//     let isValid = true;
//     for (const field in values) {
//         const errorElement = document.getElementById(field + "Error");
//         if (!regex[field].test(values[field])) {
//             errorElement.testContent = errors[field];
//             isValid = false;
//         } else {
//             errorElement.testContent = "";
//         }
//     }
//     if (!isValid) {
//         document.getElementById("succesMessage").testContent = "";
//         return;
//     }
//     const creature = {
//         id: Date.now(),
//         name,
//         type,
//         level: Number(level),
//         stats: Number(stats),
//         image,
//         description
//     };
//     creatures.push(creature);
//     const card = document.createElement("div");
//     const title = document.createElement("h3");
//     const details = document.createElement("p");
//     title.textContent = creature.name;
//     details.textContent =
//         `${creature.type}| Level ${creature.level}| Stats ${creature.stats}`;
//     card.append(title, details);
//     document.getElementById("creatureList").appendChild(card);
//     document.getElementById("succesMessage").textContent = "creature créée avec succés!";

//     form.reset();
// });




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
