<?php

/**
 * Extension Manager/Repository config file for ext "tmpl_hypatia".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Hypatia Science Consulting',
    'description' => 'Template for Hypatia Science Consulting website',
    'category' => 'plugin',
    'autoload' => [
        'psr-4' => [
            'Snaegle\\TmplHypatia\\' => 'Classes',
        ],
    ],
    'state' => 'alpha',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Sibylle Nägle',
    'author_email' => 'admin@science-consulting.info',
    'author_company' => 'Hypatia Science Consulting',
    'version' => '0.0.5',
    'constraints' => [
      'depends' => [
        'typo3' => '9.5-10.9.99',
      ],
    ],
];
