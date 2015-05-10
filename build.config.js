var pkg = require('./package.json');

module.exports = {
    dist: 'dist',
    banner:
        '/*!\n' +
        ' * Copyright 2015 itesoft.\n' +
        ' * http://itesoft.com/\n' +
        ' *\n' +
        ' * ProductionManager, v<%= pkg.version %>\n' +
        ' * A powerful production manager.\n' ,

    closureStart: '(function() {\n',
    closureEnd: '\n})();',

    appFiles: [
        '!main/app/**/*Test.js', // Exclude test files
        'main/app/**/*.js'
    ],
    vendorFiles: [
     'main/assets/lib/ionic/js/ionic.bundle.min.js'
    ]
};