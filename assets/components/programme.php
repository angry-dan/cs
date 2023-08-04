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
  <?php print theme("navigation", ["content" => ["current" => "home"]]); ?>
</header>

<main class="container">
  <div class="text">
    <h1>Programme</h1>
    <?php print theme("programme", [
      "content" => [
        [
          "id" => "events",
          "label" => "Events",
          "calendar" => "c_296a94e1f9adf9a0988eff2eadbd1ce63a73fd2910760d7fe366b4f8c3c4377f@group.calendar.google.com",
        ],
        [
          "id" => "beavers",
          "label" => "Beavers",
          "calendar" => "concordescouts.org.uk_5a5pr9kplmld8g2e54sklhk3l8%40group.calendar.google.com",
        ],
        [
          "id" => "cubs",
          "label" => "Cubs",
          "calendar" => "concordescouts.org.uk_gubd38jbitgsm8cokfe539gtrk%40group.calendar.google.com",
        ],
        [
          "id" => "scouts",
          "label" => "Scouts",
          "calendar" => "concordescouts.org.uk_smugdfso66dvnr4alq4ft2lvbs%40group.calendar.google.com",
        ],
        [
          "id" => "explorers",
          "label" => "Explorers",
          "calendar" => "concordescouts.org.uk_vrm13n3jsrhqsek89pc3apuhgc%40group.calendar.google.com",
        ],
      ],
    ]); ?>

  </div>
</main>

<footer class="text">
  <small class="text--muted">Copyright © 2017 25th Medway scout group</small>
</footer>

</body>
</html>
