# APP du projet bill-app

Ce projet est un sous-projet de **bill-app** et est une application dévelopée en Vue.js qui permet aux utilisateurs de créer, modifier et supprimer
des factures et des clients. Une facture a toujours un client : il doit être au préalable créé avant 
de pouvoir le lier à une facture.

## Installation

Une fois le projet **bill-app** cloné sur votre machine, déplacez-vous dans le projet **app** en exécutant la commande suivante :

`cd bill-app/api`

Puis, installez les dépendances :

`npm install`

## Utilisation

Avant de lancer l'application, il est fortement recommandé de démarrer l'API. Pour plus
d'informations, je vous invite à lire le fichier `README.md` du projet **api**.

Une le serveur de l'API lancé et opérationnel, utilisez la commande ci-dessous pour lancer l'application en mode de développement :

`npm run dev`

L'application est maintenant lancée, vous pouvez donc y accéder en ouvrant votre navigateur et en allant sur http://localhost:{PORT}
(`PORT = 5173` par défaut).

## Modules utilisés

Les modules suivants ont été utilisés dans ce projet :

* **Fortawesome** : permet de créer et gérer des icônes et des polices de caractères en un seul endroit, puis de les afficher avec une seule ligne de code.
* **Axios** : un client HTTP basé sur les promesses compatible avec node.js et les navigateurs.
* **Bootstrap** : une collection d'outils utiles à la création du design de sites et d'applications web.
* **Lodash.clonedeep()** : méthode utilisée pour créer une copie complète de la valeur, c'est-à-dire qu'elle clone récursivement la valeur.
* **Pinia** : une bibliothèque de magasin et un framework de gestion d'état pour Vue.js.
* **Sass** : un langage d'extension CSS de qualité professionnelle, mature, stable et puissant.
* **ESLint** : un outil d'analyse de code statique permettant d'identifier des erreurs dans du code JavaScript.


## Auteur

Ce projet a été créé par **Romain AROLDI** pour l'évaluation du module JavaScript 2 enseigné par **Jérôme POSLEDNIK**.