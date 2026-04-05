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

📝 Compte-Rendu du TP - Séance 2

1.Authentification & Gestion d'État (Reducer)

Q4 : Pourquoi e.preventDefault() est-il indispensable dans le formulaire ?

Il est indispensable car, par défaut, la soumission d'un formulaire HTML provoque un rechargement complet de la page. En SPA (Single Page Application) avec React, cela effacerait tout l'état actuel de l'application (le Reducer, le Context, etc.). preventDefault() permet de bloquer ce comportement pour laisser le JavaScript gérer la validation et l'envoi des données via une requête fetch.

Q5 : Pourquoi exclure le mot de passe (password) de l'objet utilisateur stocké dans le state ?

Il s'agit d'une règle de sécurité fondamentale. Le state global est accessible via les outils de développement (React DevTools) et peut être exposé accidentellement. En utilisant la déstructuration { password, ...userWithoutPassword } = user, on s'assure que seules les informations non sensibles (nom, email, id) circulent dans l'application.

2. Le Context API (Partage des données)

Q7 : Comment tester la redirection après déconnexion ?Pour tester le flux, il suffit de cliquer sur le bouton de déconnexion dans le Header.

Ce bouton déclenche une action LOGOUT. Le Reducer réinitialise alors l'utilisateur à null. Dans le composant racine (App.tsx), une condition vérifie la présence de l'utilisateur : si user est null, React démonte le Dashboard et remonte automatiquement le composant Login.

Q8 : Quel est le rôle du "callback" onLogout ?

Le callback permet de faire remonter une interaction utilisateur depuis un composant enfant (le Header) vers le parent (App.tsx) qui possède l'accès au dispatch du Context. C'est le principe de la "remontée d'état" : le Header signale l'intention de déconnexion, et le parent exécute l'action de changement d'état global.

3. Hooks Avancés : useEffect vs useLayoutEffect

Q9 : Pourquoi le "flash" (scintillement) disparaît-il avec useLayoutEffect ?

Le flash se produit avec useEffect car ce hook est asynchrone : il s'exécute après que le navigateur a dessiné les pixels à l'écran. L'utilisateur voit donc brièvement l'info-bulle à sa position initiale $(0, 0)$ avant qu'elle ne saute à la bonne place.useLayoutEffect est synchrone : il s'exécute avant la peinture du navigateur. Il mesure et repositionne l'élément "dans le noir", garantissant que la première image affichée est déjà correcte.

Q10 : Pourquoi ne faut-il pas utiliser useLayoutEffect partout ?

Parce que ce hook est bloquant. Le navigateur ne peut pas mettre à jour l'affichage tant que le code à l'intérieur de useLayoutEffect n'est pas terminé. Si le calcul est lourd ou si vous effectuez une requête réseau à l'intérieur, l'application paraîtra figée ou l'écran restera blanc pendant le traitement. Il faut privilégier useEffect pour la performance globale.
