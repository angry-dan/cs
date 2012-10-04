<?php

/**
 *
 * @param type $vars
 */
function concordescouts_preprocess_html(&$vars) {
	drupal_add_html_head_link(array(
		'href' => 'http://fonts.googleapis.com/css?family=Tienne:700|Varela', //Mate+SC|Oxygen|Galdeano|
		'rel' => 'stylesheet',
		'type' => 'text/css'
	));
}