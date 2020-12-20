# PWA-TP3

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Fonctionnalités de bases
Ajouter un Todo avec un libellé
Modifier le libellé du Todo (double-clic sur le libellé)
Supprimer un Todo en cliquant sur la croix
"Compléter" le Todo en cochant la case à gauche
Affichage du nombre de Todo non complétés
Sélection et dé-sélection de tous les Todo avec la flèche située en haut à gauche
Suppression de toutes les Todos complétés
Gestion de filtres pour afficher tous les Todos, les Todos complétés et non-complétés

# Fonctionnalités supplémentaires
Enregistrement des Todos dans le local storage, et récupértion des Todos du local storage au démarrage
Génération d'un QRCode qui récupèrent les Todos de la liste au format JSON

#Problèmes rencontrés
Au début du projet, j'ai eu du mal à comprendre comment marche la "todoListSubject" et comment faire passer les infos jusqu'à la vue.
Par exemple, pour mettre à jour le nombre de Todos restantes, j'appel la méthode à chaque fois qu'une modification est faite sur un Todo. Ca fonctionne mais je ne pas sûr que ce soit la façon la plus adaptée.
