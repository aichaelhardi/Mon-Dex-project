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
        carte.innerHTML = `
  <img src="${creature.image}" alt="${creature.name}" class="h-40 w-full object-cover rounded-lg">
  <div class="flex justify-between items-center">
    <span class="text-xs font-bold text-muted">${creature.id}</span>
    <span class="px-2 py-1 text-xs font-bold rounded bg-gray-100">${creature.type}</span>
  </div>
  <h3 class="font-display text-xl font-bold">${creature.name}</h3>
  
  <div class="text-xs text-muted flex gap-2">
   
    
  
  <!-- LE BOUTON AJOUTER À L'ÉQUIPE -->
      <button type="button" class="btn-equipe w-full py-2.5 rounded-xl border-2 border-gray-800 font-bold text-gray-800 transition hover:bg-gray-900 hover:text-white">
        ajouter à l'équipe
      </button>

    `;
  carte.addEventListener("click", function () {
            showDetail(creature);
        });
        grid.appendChild(carte);
    });
}afficherCreatures(creatures)

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
function searchCreatures() {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        if (searchValue === "") {

        }
        else {
            const filteredCreatures = []
            creatures.forEach((c) => {
                if (c.name.toLowerCase().trim().includes(searchValue))
                    filteredCreatures.push(c)
            })
            afficherCreatures(filteredCreatures)

        }
        const filterButtons = document.querySelectorAll('#filterButtons button');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Retire la classe 'active' de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Ajoute la classe 'active' uniquement sur le bouton cliqué
                button.classList.add('active');
            });
            afficherCreatures(filteredCreatures)
        });

    });
}; searchCreatures(creatures);
// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------
// Sélection du formulaire et des champs
// Sélection du formulaire et des champs
const form = document.getElementById('creature-form');
const inputs = form.querySelectorAll('input, select, textarea');

// Tableau principal des créatures
let creaturesList = [];

// Définition des règles et des expressions régulières exactes
const rules = {
    id: {
        regex: /^#\d{3}$/,
        message: "Le numéro doit être au format # suivi de 3 chiffres (ex: #010)."
    },
    name: {
        regex: /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/,
        message: "Le nom doit contenir de 2 à 30 caractères, commencer par une lettre ou un chiffre."
    },
    type: {
        isValid: (value) => value !== "",
        message: "Veuillez choisir un type valide dans la liste."
    },
    level: {
        regex: /.+/,
        message: "Le niveau ne peut pas être vide."
    },
    stat1: {
        regex: /^\d{1,3}$/,
        message: "Doit être un nombre entier de 0 à 999."
    },
    stat2: {
        regex: /^\d{1,3}$/,
        message: "Doit être un nombre entier de 0 a 999."
    },
    stat3: {
        regex: /^\d{1,3}$/,
        message: "Doit être un nombre entier de 0 à 999."
    },
    image: {
        regex: /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i,
        message: "Lien invalide (doit commencer par https:// et finir par .png, .jpg, .jpeg, .webp ou .gif)."
    },
    description: {
        regex: /^[\s\S]{10,200}$/,
        message: "La description doit contenir entre 10 et 200 caractères."
    }
};
function displayError(inputElement, message) {
    const errorSpan = inputElement.parentElement.querySelector('.error-message');
    if (message) {
        errorSpan.textContent = message;
    } else {
        errorSpan.textContent = '';
    }
}

// Fonction de validation d'un champ unique
function validateField(inputElement) {
    const fieldName = inputElement.name;
    const fieldValue = inputElement.value.trim();
    const rule = rules[fieldName];

    if (!rule) return true;

    let isValid = true;

    if (fieldName === 'id') {
        const isFormatValid = rule.regex.test(fieldValue);
        const isAlreadyUsed = creaturesList.some(creature => creature.id === fieldValue);
        if (!isFormatValid || isAlreadyUsed) isValid = false;
    }
    else if (fieldName === 'type') {
        isValid = rule.isValid(fieldValue);
    }
    else if (rule.regex) {
        isValid = rule.regex.test(fieldValue);
    }

    if (!isValid) {
        if (fieldName === 'id' && rule.regex.test(fieldValue)) {
            displayError(inputElement, "Ce numéro est déjà utilisé par une autre créature.");
        } else {
            displayError(inputElement, rule.message);
        }
        return false;
    } else {
        displayError(inputElement, '');
        return true;
    }
}

// Validation en temps réel
inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('change', () => validateField(input));
});

// Soumission du formulaire
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;
    const newCreatureData = {};

    inputs.forEach(input => {
        const isValid = validateField(input);
        if (!isValid) {
            isFormValid = false;
        } else {
            newCreatureData[input.name] = input.value.trim();
        }
    });

    if (isFormValid) {
        // 1. Ajout effectif dans le tableau
        creaturesList.push(newCreatureData);

        // 2. Vérification dans la console pour voir qu'il s'ajoute bien
        console.log("Créature ajoutée avec succès ! Tableau mis à jour :", creaturesList);

        alert("Créature ajoutée avec succès !");

        // 3. Réinitialisation
        form.reset();
        inputs.forEach(input => displayError(input, ''));

        // (Optionnel) Si vous avez une fonction qui affiche les cartes/la liste sur la page, appelez-la ici :
        // afficherLesCreatures(); 
    } else {
        alert("Le formulaire ne peut pas être envoyé tant qu'un champ est invalide.");
    }
});
// 1. Sélectionner l'élément conteneur dans le DOM
const creaturesContainer = document.getElementById('creatures-container');


function renderCreatures() {
    
    creaturesContainer.innerHTML = '';

    // Parcourir le tableau des créatures
    creaturesList.forEach(creature => {
        // Créer une carte (div) pour chaque créature
        const card = document.createElement('div');
        card.className = "flex flex-col gap-3 rounded-card bg-white p-6 shadow-md border border-line";
        card.innerHTML = `
        < img src = "${creature.image}" alt = "${creature.name}" class="h-40 w-full object-cover rounded-lg" >
      <div class="flex justify-between items-center">
        <span class="text-xs font-bold text-muted">${creature.id}</span>
        <span class="px-2 py-1 text-xs font-bold rounded bg-gray-100">${creature.type}</span>
      </div>
      <h3 class="font-display text-xl font-bold">${creature.name}</h3>
      <p class="text-sm text-muted">Niveau : ${creature.level}</p>
      <div class="text-xs text-muted flex gap-2">
        <span>S1: ${creature.stat1}</span>
        <span>S2: ${creature.stat2}</span>
        <span>S3: ${creature.stat3}</span>
      </div>
      <p class="text-sm mt-2">${creature.description}</p>
    `;
        creaturesContainer.appendChild(card);
    });
}
if (isFormValid) {
    creaturesList.push(newCreatureData);
    renderCreatures();

    alert("Créature ajoutée avec succès !");

    form.reset();
    inputs.forEach(input => displayError(input, ''));
};





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
