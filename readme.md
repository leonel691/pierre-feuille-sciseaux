# 🪨🍃✂️ Pierre - Feuille - Ciseaux (Edition Tailwind)

Une implémentation moderne et interactive du jeu classique "Pierre, Feuille, Ciseaux", conçue avec **HTML5**, **JavaScript (ES6+)** et stylisée avec le framework utility-first **Tailwind CSS**.

---

## 🚀 Aperçu
Le jeu permet à un utilisateur de défier l'ordinateur. Le score est mis à jour en temps réel et une interface dynamique met en évidence les choix de l'adversaire via des manipulations de classes CSS.

## ✨ Fonctionnalités
* **Design Responsive** : Optimisé pour mobile et ordinateur grâce à la grille Tailwind (`grid-cols-2`).
* **Logique de Jeu Avancée** : Comparaison automatique des choix pour déterminer la victoire, la défaite ou l'égalité.
* **Interface Dynamique** : 
    * Effets de survol (**hover**) sur les choix du joueur.
    * Mise en évidence visuelle (**bg-orange-500** + retrait du **grayscale**) du choix de l'ordinateur.
    * Réinitialisation complète du score et des états visuels via une boucle de nettoyage.

## 🛠️ Technologies
* **HTML5** : Structure sémantique.
* **Tailwind CSS** : Stylisation rapide via CDN et configuration personnalisée des couleurs.
* **JavaScript (DOM)** : Manipulation des événements (`addEventListener`) et mise à jour dynamique du texte (`innerText`).

## 📂 Structure du Projet
```text
.
├── index.html          # Structure et configuration Tailwind
└── assets/
    ├── js/
    │   └── index.js    # Logique du jeu (Random, Scores, Boucles)
    ├── css/
    |   └── style.css    
    └── img/            # Assets (pierre.png, leaf.png, ciseaux.png)