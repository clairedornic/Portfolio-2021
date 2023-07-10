<?php require('./partials/head.php'); ?>
<body class="a-propos" data-barba="wrapper">
  <?php require('./partials/loader.php'); ?>
  <?php require('./partials/cursor.php'); ?>
  <?php require('./partials/header.php'); ?>
  <main data-barba="container" data-barba-namespace="about" class="about">
    <div class="about-container">
      <div class="title-a-propos animate-this">
        <h1>A propos</h1> 
      </div> 
        <div class="img-about animate-this"> 
            <img src="./assets/img/about.jpg" alt="Portrait de Claire Dornic">
            <p class="desc-about emblem" id="search-alt"> Développeuse front end •</p>
        </div>
        <div class="about-text animate-this">
          <div class="text-centre">
            <p>Je m'appelle Claire Dornic et je suis sur le point de terminer mon master en développement web à l'ECV en septembre prochain. Depuis maintenant 4 ans, je me forme en alternance en tant que développeuse front-end. J'ai effectué mon premier contrat d'alternance au sein de l'agence Appaloosa en Bretagne, ce fut une expérience très enrichissante et je ne manque pas une occasion d’aller saluer mes anciens collègues.</p>
            <p>Suite à cela, j'ai déménagé à Paris pour entamer une nouvelle aventure au sein de l'agence 4Beez. J'y ai travaillé en autonomie en tant qu'intégratrice web, étant la seule développeuse web de l'agence. Pour terminer mon cursus j’ai intégré l’ECV Nantes en mastère développement web et j’ai débuté une nouvelle alternance à l’agence Latelier. Celle-ci m’a permis d’en apprendre encore un peu plus sur le cœur de Wordpress et de me former à d’autres outils/langages.</p>
            <p>Pour mieux me connaître, on pourrait dire de moi que je suis une personne motivée, sportive et créative. J'aime jongler avec plusieurs responsabilités dans ma vie, tant sur le plan personnel que professionnel. Je souhaite aujourd'hui me tourner vers des technologies en front end comme en back end liées à l'écosystème JavaScript.</p>
            <div class="btn-about">
                <div class="btn-sociaux">
                    <a href="https://www.linkedin.com/in/claire-dornic-32900215a/" target="_blank" class="hover-link">Linkedin</a>
                </div>
                <div class="btn-cv">
                    <a href="https://github.com/clairedornic/" target="_blank" class="hover-link">GIT</a>
                    <a href="./assets/pdf/CV_claire_dornic.pdf" target="_blank" class="hover-link">CV</a>
                </div>
            </div>
          </div>
        </div>
      </div> 
  </main>
  <?php require('./partials/scripts.php'); ?>
</body>
<?php require('./partials/footer.php'); ?>
