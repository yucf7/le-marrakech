![](./documentation/md%20res/1.jpeg)![](./documentation/md%20res/2.jpeg)

## DOCUMENTATION

### PROJET APPLICATION WEB

![](./documentation/md%20res/3.jpeg)

### Réalisé par :

###### HERBA Ranya

###### FRIKHAT Youssef

### Enseignant référant :

###### Corentin Mors

### Année universitaire : 2023 - 2024

## INTRODUCTION :

Ce projet web est une application de livraison à la demande, conçue pour répondre aux besoins d'une nouvelle
entreprise de restauration établie à Bourges. L'objectif de cette initiative est de développer un prototype
d'application web, accompagné de son API, afin de proposer un service de livraison à la demande similaire à
des plateformes telles qu'UberEats.

Cette application offrira aux clients la possibilité de commander divers produits, avec une variété limitée à
trois ou quatre options. Le cahier des charges détaille les fonctionnalités essentielles, notamment la capacité
pour les utilisateurs d'ajouter des produits à leur panier, de confirmer leurs commandes, d'indiquer leur adresse
pour la livraison (avec un paiement en espèces à la réception), et de gérer la disponibilité des produits en
temps réel.

Le projet est développé à l'aide de Node.js avec expressJS pour le serveur et React pour le client.

## Sommaire

```
# Introduction:
# Installation et Exécution
# Utilisation :
# Structure du Projet :
# Fonctionnalités :
```

## Installation et Exécution

Pour installer le projet, suivez les étapes suivantes :

```
 Clonez le projet à partir du référentiel git.
 Installez Node.js version 18 ou supérieure.
```

```
 Ouvrez une invite de commande dans le dossier racine du projet/client et executez npm install +
npm start et dans le dossier racine du projet/server et executez npm install + node index.js
```

```
 Vous pouvez accédez toujours au site web en ouvrant un navigateur et en accédant à
l'URL http://localhost:3000/.
```

## Utilisation :

L'interface utilisateur est intuitive et facile à utiliser. Les utilisateurs peuvent créer un compte, se
connecter, se naviguer dans la page d’accueil pour lire plus sur le restaurant, pour voir la galerie
et en fin pour voir la localisation du restaurant dans une map.
Puis une barre en haut qui facilite la navigation au Menu et au Panier et qui permet aussi de
connecter ou déconnecter.

## Structure du projet :

Le projet est structuré en deux répertoires : "Client" et "Server". Le répertoire "Client" englobe tous
les fichiers React, tandis que le répertoire "Server" englobe l'ensemble des fichiers liés à Node.js.
La section Node.js est constituée de six dossiers principaux et d'un fichier "index.js", répartis
comme suit :

```
 index.js
 controllers/
 routes/
 models/
 helpers/
 middlewares/
 db/
```

Les fichiers Routes contiennent toutes les routes nécessaires pour le serveur.
Les fichiers Controllers contiennent la logique et la gestion des requêtes.
Les fichiers Helpers contiennent toutes les méthodes nécessaires et utilisées par les controlleurs.
Le dossier db/ contient la fonction de connexion à la base de données aisni que la collection
meals.
Le Middleware contient la fonction qui vérifie si l'utilisateur est authentifié ou non.

## Fonctionnalités :

Les fonctionnalités principales du projet comprennent :

```
 Se connecter
 Voir le menu
 Ajouter au panier
 Valider le panier
 Confirmer la livraison
```

Collections Mongo:
User
Meal
Order
Cart

Et Finalement : Api

L'API est accessible à l'URL [http://localhost:4000/.](http://localhost:4000/.)
