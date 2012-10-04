<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

//function cs_alpha_page_structure_alter(&$variables) {
//  // First column is a gutter for the logo
//  if ($variables['content']['content']['content']['#grid']['columns'] = 12) {
//    $variables['content']['content']['content']['#grid']['columns'] = 11;  
//    $variables['content']['content']['content']['#grid']['push'] = 1;  
//  }
//}

function cs_preprocess_page(&$variables) {
  $breadcrumb = drupal_get_breadcrumb();
  if ($breadcrumb) {
    $breadcrumb[] = drupal_get_title();
  }
  
  $variables['breadcrumb'] = theme('breadcrumb', array('breadcrumb' => $breadcrumb));
}

function cs_preprocess_zone(&$variables) {
  $theme = alpha_get_theme();

  if ($variables['elements']['#zone'] == 'preface') {
    $variables['breadcrumb'] = $theme->page['breadcrumb'];
  }
}