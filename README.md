# Application de gestion de facture (bill-app)

Ce projet comporte deux sous-projets :
* **api** : Une API développée en Node.js pour échanger des données avec l'**app**.
* **app** : Une application dévelopée en Vue.js qui permet aux utilisateurs de créer, modifier et supprimer
des factures et des clients.

## Installation

Une fois le projet **bill-app** cloné sur votre machine, je vous invite à lire le fichier `README.md` des deux sous-projets
en commençant par celui de l'**api**.

## Utilisation

### Lancer l'API

Déplacez-vous dans le projet **api** en exécutant la commande suivante :

`cd bill-app/api`

Puis, lancez le serveur de l'API en mode de développement :

`npm run dev`

Le serveur est maintenant lancé, vous pouvez donc y accéder en ouvrant votre navigateur et en allant sur http://localhost:{PORT}.
(`PORT = 3000` par défaut)

### Lancer l'APP

Une fois le serveur de l'API lancé et opérationnel, déplacez-vous dans le projet **app** :

`cd bill-app/app`

Ensuite, utilisez la commande ci-dessous pour lancer l'application en mode de développement :

`npm run dev`

L'application est maintenant lancée, vous pouvez donc y accéder en ouvrant votre navigateur et en allant sur http://localhost:{PORT}
(`PORT = 5173` par défaut).

## Modules utilisés

Les modules suivants ont été utilisés dans ce projet :

### API

* **Nodemon** : permet de redémarrer automatiquement le serveur à chaque modification du code.
* **Express** : un framework pour Node.js qui facilite la création d'applications web.
* **CORS** : un package node.js pour fournir un middleware Connect/Express qui peut être utilisé pour activer CORS avec diverses options.
* **Dotenv** : un module sans dépendance qui charge les variables d'environnement d'un fichier .env dans process.env.
* **Lodash** : une bibliothèque d'utilitaires JavaScript moderne offrant modularité, performances et plus encore.
* **Mongoose** : fournit une solution simple basée sur un schéma pour modéliser les données de l'application.

### APP

* **Fortawesome** : permet de créer et gérer des icônes et des polices de caractères en un seul endroit, puis de les afficher avec une seule ligne de code.
* **Axios** : un client HTTP basé sur les promesses compatible avec node.js et les navigateurs.
* **Bootstrap** : une collection d'outils utiles à la création du design de sites et d'applications web.
* **Lodash.clonedeep()** : méthode utilisée pour créer une copie complète de la valeur, c'est-à-dire qu'elle clone récursivement la valeur.
* **Pinia** : une bibliothèque de magasin et un framework de gestion d'état pour Vue.js.
* **Sass** : un langage d'extension CSS de qualité professionnelle, mature, stable et puissant.
* **ESLint** : un outil d'analyse de code statique permettant d'identifier des erreurs dans du code JavaScript.


## Auteur

Ce projet a été créé par **Romain AROLDI** pour l'évaluation du module JavaScript 2 enseigné par **Jérôme POSLEDNIK**.