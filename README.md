##POC Packaging AngularJS

Author : Selim Bensenouci

##Quoi que c'est?

Exemple d'archetype pour projet AgularJS,
   
##Problématique

- Structurer afin que chacun s'y retrouve après plusieurs années de développement.   
- Produire des tests unitaires sans polluer la release de fichiers inutiles.   
- Maitriser l'importation des librairies en version minifié dans la release.   
- Optimiser le poids de l'application.

##Structure proposé
 
     main   
         app                                   // code applicatif
             components                        //  vues, contollers
                 account
                     accountView.hml
                     accountController.js
                     accountControllerTest.js
             composites                        // composants réutiliseable, directives, filtres
                 user
                     userProfileDirective.js
                     userProfileTemplate.html
                     userAvatarDirective.js
             services                         // les services
                 resources
                     userResource.js
                 userService.js
         assets                              // contient les resources.
              css                            // css, et distination des scss
              img                            // images
              js                             // simple scripts js
              lib                            // libraires js
              scss
         index.html                          //index de developpement, lié au code sources.
     dist                                    //application de production correctement packagé
         index.html                          //index de production, lié aux fichiers généré par le build   
                     

##Configuration du build

`build.config.js` contient la configuration de build .     
Il comprend les sections suivantes    
                
                
                module.exports = {
                    dist: 'dist',
                    /**
                     * Header de la distribution.
                     */
                    banner:
                        '/*!\n' +
                        ' * Copyright 2015 itesoft.\n' +
                        ' * http://itesoft.com/\n' +
                        ' *\n' +
                        ' * ProductionManager, v<%= pkg.version %>\n' +
                        ' * A powerful production manager.*/\n' ,
                
                    closureStart: '(function() {\n',
                    closureEnd: '\n})();',
                    /**
                     * Liste des fichiers JS de l'application qui seront minifié pour la prod.
                     */
                    appFiles: [
                       ...
                    ],
                    vendorFiles: [
                     ...  
                    ]
                };

La section la plus importante est `vendorFiles`, elle permet de lister tous les fichiers des librairies utilisées par l'application.


##Prérequis
 
`npm` 

##Dépendances de build

Utiliser la commande `npm install` afin d'installer les outils nécessaires au build.
`
##Build du projet

Utilisation de Gulp pour construire la distribution `dist`. 
la commande `gulp build` exécute l'ensemble des tâches permettant de générer la distribution.

  
                output :    
                
                            Using gulpfile ~/Projets/workspace/packaging-poc/gulpfile.js
                            Starting 'sass'...                // creation des fichiers .css
                            Starting 'uglify'...              // minification de l'application (controllers, directives, services ...)
                            Starting 'vendor'...              // concaténation des librairies tierces (pas de minification)
                            Starting 'html'...                // copie des fichers html de l'application (vues, template ...)
                            Finished 'html' after 1.9 ms
                            Starting 'assets'...              // copie des resources
                            Finished 'assets' after 2.64 ms
                            Finished 'vendor' after 605 ms    
                            Finished 'sass' after 634 ms
                               



   
