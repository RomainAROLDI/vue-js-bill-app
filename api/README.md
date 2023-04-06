# API du projet bill-app

Ce projet est un sous-projet de **bill-app** et est une API développée en Node.js pour échanger des données avec l'**app**. 
Cette API est conçue pour gérer les informations relatives aux factures et aux clients dans le projet **bill-app**.

## Installation

Une fois le projet **bill-app** cloné sur votre machine, déplacez-vous dans le projet **api** en exécutant la commande suivante :

`cd bill-app/api`

Puis, installez les dépendances :

`npm install`

## Utilisation

Avant de pouvoir lancer le serveur, il est nécessaire d'initialiser la
variable d'environnement `PORT` dans un fichier `.env` situé à la racine du projet.

Une fois la variable initialisée, utilisez la commande ci-dessous pour lancer le serveur en mode de développement :

`npm run dev`

Le serveur est maintenant lancé, vous pouvez donc y accéder en ouvrant votre navigateur et en allant sur http://localhost:{PORT}.

## API endpoints

Cette API propose les endpoints suivants :

### /bills

* **GET /bills** : Renvoie toutes les factures

## Modules utilisés

Les modules suivants ont été utilisés dans ce projet :

* **Nodemon** : permet de redémarrer automatiquement le serveur à chaque modification du code.
* **Express** : un framework pour Node.js qui facilite la création d'applications web.
* **CORS** : un package node.js pour fournir un middleware Connect/Express qui peut être utilisé pour activer CORS avec diverses options.
* **Dotenv** : un module sans dépendance qui charge les variables d'environnement d'un fichier .env dans process.env.
* **Lodash** : une bibliothèque d'utilitaires JavaScript moderne offrant modularité, performances et plus encore.
* **Mongoose** : fournit une solution simple basée sur un schéma pour modéliser les données de l'application.

## Auteur

Ce projet a été créé par **Romain AROLDI** pour l'évaluation du module JavaScript 2 - MVC enseigné par Jérôme POSLEDNIK.