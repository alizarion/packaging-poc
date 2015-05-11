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
         assets                              // contient les resources applicatif
              css                            // css, et distination des scss
              img                            // images
              js                             // simple scripts js
              lib                            // libraires js
              scss
         index.html                          //index de developpement, link vers code sources.
     dist
         index.html                          //index de production, link vers resources concaténées et minifiés    
                     

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
                     * Liste des fichiers JS de l'application qui seront minifier pour la prod.
                     */
                    appFiles: [
                       ...
                    ],
                    vendorFiles: [
                     ...  
                    ]
                };

La section la plus importante est `vendorFiles`, elle permet de lister tout les fichiers de librairie utilisé par l'application.


##Prérequis
 
`npm` 

##Dépendances de build

Utiliser la commande `npm install` afin d'installer les outils nécessaire au build.
`
##Build du projet

Utilisation de Gulp pour construire la distribution `dist`,   
les fichiers Javascript et SCSS/CSS sont concaténés et minifiés.     

                gulp build
  
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
                               

seul les fichiers nécessaires à la production seront importés dans `dist`.

   
