<?php

/**
 * Extension Manager/Repository config file for ext "hypatia_science_consulting".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Hypatia Science Consulting',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '10.0.0-11.0.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'HypatiaScienceConsulting\\HypatiaScienceConsulting\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Sibylle Nägle',
    'author_email' => 'admin@science-consulting.info',
    'author_company' => 'Hypatia Science Consulting',
    'version' => '1.0.0',
];
