<?php
defined('TYPO3_MODE') || die();


// Entry point for all TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('tmpl_hypatia', 'setup', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl_hypatia/Configuration/TypoScript/setup.typoscript">');

/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['tmpl_hypatia'] = 'EXT:tmpl_hypatia/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tmpl_hypatia/Configuration/TsConfig/Page/All.tsconfig">');
