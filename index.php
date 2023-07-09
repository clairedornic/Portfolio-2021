<?php require('./partials/head.php'); ?>
<div class="loader-first preload"></div>
<body class="home-page" data-barba="wrapper">
  <?php require('./partials/loader.php'); ?>
  <?php require('./partials/cursor.php'); ?>
  <?php require('./partials/header.php'); ?>
  <main data-barba="container" data-barba-namespace="home">
    <div data-scroll-container class="container-scroll">
      <?php require('./partials/hero.php'); ?>
      <?php require('./partials/archive-projects.php'); ?>
      <?php require('./partials/contact.php'); ?>
    </div>
  </main>
  <?php require('./partials/scripts.php'); ?>
</body>
<?php require('./partials/footer.php'); ?>
