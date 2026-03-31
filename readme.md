# 🪨🍃✂️ Pierre - Feuille - Ciseaux — Édition Tailwind

Une implémentation moderne et interactive du jeu classique **Pierre, Feuille, Ciseaux**, conçue avec **HTML5**, **JavaScript (ES6+)** et stylisée avec le framework utility-first **Tailwind CSS**.

---

## 🚀 Aperçu

Le jeu permet à un utilisateur de défier l'ordinateur. Le score est mis à jour en temps réel et une interface dynamique met en évidence les choix de l'adversaire via des manipulations de classes CSS.

---

## ✨ Fonctionnalités

- 📱 **Design Responsive** : Optimisé pour mobile et ordinateur grâce à la grille Tailwind (`grid-cols-2`).
- 🧠 **Logique de Jeu Complète** : Comparaison automatique des choix pour déterminer la victoire, la défaite ou l'égalité.
- 🎨 **Interface Dynamique** :
  - Effets de survol (**hover**) sur les choix du joueur.
  - Mise en évidence visuelle (`bg-orange-500` + retrait du `grayscale`) du choix de l'ordinateur.
  - Réinitialisation complète du score et des états visuels via une boucle de nettoyage.

---

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|---|---|
| **HTML5** | Structure sémantique de la page |
| **Tailwind CSS** | Stylisation rapide via CDN et couleurs personnalisées |
| **JavaScript (ES6+)** | Logique du jeu, événements DOM et mise à jour dynamique |

---

## 📂 Structure du Projet
```text
.
├── index.html          # Structure et configuration Tailwind
└── assets/
    ├── js/
    │   └── index.js    # Logique du jeu (Random, Scores, Boucles)
    ├── css/
    │   └── style.css   # Styles complémentaires
    └── img/            # Assets visuels (pierre.png, leaf.png, ciseaux.png)
```

---

## 🔧 Installation & Utilisation

Clonez et lancez le projet localement en quelques secondes :
```bash
# 1. Cloner le dépôt
git clone https://github.com/leonel691/pierre-feuille-ciseaux.git

# 2. Accéder au dossier du projet
cd pierre-feuille-ciseaux

# 3. Ouvrir l'application dans le navigateur
# Sur Windows :
start index.html
# Sur Mac/Linux :
open index.html
```

> Aucune dépendance à installer — Tailwind est chargé via CDN.

---

## 🧠 Point Clé du Code

Le projet utilise une boucle performante sur l'objet des éléments de l'ordinateur pour réinitialiser l'interface proprement à chaque tour :
```javascript
// Nettoyage de l'interface via une boucle sur l'objet elementsOrdi
Object.values(elementsOrdi).forEach(el => {
    el.classList.add('grayscale');
    el.classList.remove('bg-orange-500', 'active');
});
```

---

## 👨‍💻 À propos de moi

Passionné par le développement web, je crée des projets interactifs pour apprendre et partager avec la communauté.

- 💼 **LinkedIn** : [Votre profil LinkedIn](https://github.com/leonel691)
- 🌍 **Portfolio** : [Votre portfolio](https://github.com/leonel691)
- 🐙 **GitHub** : [@leonel691](https://github.com/leonel691)

---

## ❤️ Soutenir le projet

Si ce projet vous a été utile ou si vous aimez le concept :

- ⭐ **Laissez une étoile** sur ce dépôt pour m'encourager.
- 🔔 **Suivez mon profil** pour ne rien rater des prochains projets.

Merci d'avoir consulté ce projet ! 🙏

---

## 📝 Licence

Distribué sous licence **MIT** — libre d'utilisation à des fins d'apprentissage et de partage.