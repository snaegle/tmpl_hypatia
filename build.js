const buildify = require('buildify');

buildify()
  .concat([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'Resources/Private/JavaScript/hypatia.js'
  ])
  .save('Build/JavaScript/concatenated.js');

buildify()
    .concat([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'Build/Css/hypatia.css'
    ])
    .save('Build/Css/concatenated.css');
