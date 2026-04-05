# 🚀 TaskFlow - Projet React & TypeScript

Bienvenue sur le dépôt du projet **TaskFlow**, réalisé dans le cadre des travaux pratiques de développement Web. 

## 🛠 Installation et Lancement

Pour faire tourner le projet localement :

1. **Cloner le dépôt**
2. **Installer les dépendances :**
   ```bash
   npm install
   Lancer le serveur de données (Mock Backend) :
Note : Indispensable pour l'authentification.

Bash
npx json-server db.json --port 4000
Lancer l'application :

Bash

npm run dev

📝 Compte-Rendu : Séance 1 

Q1 : Rôle du fichier tsconfig.json

Il configure le compilateur TypeScript. Il définit les règles de typage (plus ou moins strictes) et la manière dont le code est transformé en JavaScript compatible avec les navigateurs.

Q2 : Composant fonctionnel vs Classe

Les composants fonctionnels sont plus légers et utilisent des Hooks (useState, useEffect) pour gérer l'état. Les classes sont l'ancienne méthode et utilisaient this et des méthodes de cycle de vie plus complexes.

Q3 : Pourquoi une Majuscule aux composants ?

C'est une convention JSX. Une minuscule indique une balise HTML standard (ex: <div>), tandis qu'une Majuscule indique à React qu'il s'agit d'un composant personnalisé que vous avez créé.

Q4 : Props vs State

Props : Données transmises par le parent (lecture seule). Elles servent à configurer l'enfant.

State : Mémoire interne du composant. S'il change, React rafraîchit l'affichage automatiquement.

Q5 : Remonter une information (Enfant -> Parent)

On utilise un callback. Le parent passe une fonction via les props, et l'enfant l'appelle pour envoyer des données vers le haut.

Q6 : Intérêt des Interfaces pour les props

Elles servent de "contrat". Elles permettent d'avoir l'autocomplétion dans l'éditeur et d'éviter les erreurs en forçant le passage des bonnes données au bon format.
