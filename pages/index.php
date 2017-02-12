<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="/assets/app.css">
    <script type="text/javascript" src="/assets/app.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Arvo|Overpass" rel="stylesheet">
    <title>25th Medway Scout Group, Chatham</title>

    <meta name="viewport" content="width=device-width,initial-scale=1">

  </head>
  <body>
    <header>
      <?php print theme('navigation', ['content' => ['current' => 'home']]); ?>
    </header>

    <main class="container">
      <?php echo theme('text', ['content' => []]) ?>
      <?php echo theme('groupInfo', ['content' => []]) ?>
    </main>

    <footer class="text">
      <small class="text--muted">Copyright © 2017 25th Medway scout group</small>
    </footer>

  </body>
</html>
