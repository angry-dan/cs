<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="/assets/app.css">
    <script type="text/javascript" src="/assets/app.js"></script>
  </head>
  <body>
    <main class="container">
      <h1>index.php with js and css</h1>
      <?php echo theme('example_using_bootstrap_js', ['content' => ['title' => 'the title', 'text' => 'the text', 'href' => '#the-href']]) ?>
    </main>
  </body>
</html>
