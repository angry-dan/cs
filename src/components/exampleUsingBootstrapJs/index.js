
import $ from 'jquery';
import 'imports?jQuery=jquery!bootstrap-sass/assets/javascripts/bootstrap/tooltip.js';
import './example-using-bootstrap-js.tpl.php';
import './exampleUsingBootstrapJs.scss';

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
