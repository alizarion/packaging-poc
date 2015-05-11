/**
 * Configuration du projet.
 */
var pkg = require('./package.json');

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
        '!main/app/**/*Test.js', // Exclude test files
        'main/app/**/*.js'
    ],
    /**
     * Liste des librairies minifié à utiliser en prod
     */
    vendorFiles: [
     'main/assets/lib/ionic/js/ionic.bundle.min.js'   // liste des fichiers qui seront concaténé dans vendor.min.js
    ]
};