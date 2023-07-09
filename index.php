<?php require('./partials/head.php'); ?>
<div class="loader-first preload"></div>
<body class="home-page" data-barba="wrapper">
  <?php require('./partials/loader.php'); ?>
  <?php require('./partials/cursor.php'); ?>
  <?php require('./partials/header.php'); ?>
  <main data-barba="container" data-barba-namespace="home">
    <div data-scroll-container class="container-scroll">
      <div data-scroll-section class="home">
        <div class="img-centre"> 
          <!-- Photo prise par Cédric Le Bars (https://cedriclebars.fr/) -->
          <img src="assets/img/home.png" alt="Portrait de Claire Dornic">
        </div> 
        <div class="container-centre animate-this">
          <div class="trait-centre">
            <h1>Claire <br> Dornic</h1>
            <p>Développeuse front end</p>
            <div class="rond-btn">
              <a href="#" id="rotated" class="emblem hover-link"> Voir mes projets •</a>
              <span class="cache"></span>
            </div>
            <span class="rond"></span> 
          </div> 
        </div> 
      </div>
      <div data-scroll-section class="projets" id="projets">
        <h2 data-scroll data-scroll-speed="2">Projets</h2>
        <div class="gallery">
          <a href="./tableaux-paris.html" class="gallery-item">  
            <div class="gallery-item-img"> 
              <img src="assets/img/tableaux-paris-icon.jpg" class="hover-link" alt="Projet de site e-commerce pour la marque Tableaux Paris">
              <div class="emblem" id="projet-1">Développement web •</div>
            </div>
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">Tableaux Paris</h3>
            </figcaption> 
          </a>
          <a href="./stocker-ranger.html" class="gallery-item">
            <div class="gallery-item-img">
              <img src="assets/img/stocker-ranger-icon.jpg" class="hover-link" alt="Projet de site vitrine pour la marque Stocker Ranger">
              <div class="emblem" id="projet-2">Développement web •</div>
            </div>
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">Stocker Ranger</h3>
            </figcaption>
          </a>
          <a href="./romain.html" class="gallery-item">
            <div class="gallery-item-img">
              <img src="assets/img/romain-icon.jpg" class="hover-link" alt="Projet de graphisme et de webdesign pour l'artiste Romain">
              <div class="emblem" id="projet-3">Graphisme • Web Design •</div>
            </div>
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">Romain</h3>
            </figcaption> 
          </a>
          <a href="./fem.html" class="gallery-item">
            <div class="gallery-item-img">
              <img src="assets/img/fem-icon.jpg" class="hover-link" alt="Projet de site web pour l'institut France Energies Marines">
              <div class="emblem" id="projet-4">Développement web •</div>
            </div>
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">FEM</h3>
            </figcaption>
          </a> 
          <a href="./serial-killer.html" class="gallery-item">
            <div class="gallery-item-img">
              <img src="assets/img/serial-killer-icon.jpg" class="hover-link" alt="Projet de webdocumentaire sur le thème des serials killers">
              <div class="emblem" id="projet-5">Développement web •</div>
            </div> 
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">Serial Killer</h3>
            </figcaption>  
          </a>  
          <a href="./atelier.html" class="gallery-item">
            <div class="gallery-item-img">
              <img src="assets/img/atelier-cm-icon.jpg" class="hover-link" alt="Projet de site vitrine pour l'Aterlier C+M">
              <div class="emblem" id="projet-6">Développement web •</div>
            </div> 
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title">Atelier C + M</h3>
            </figcaption> 
          </a>
        </div>
      </div> 
      <div data-scroll-section class="contact" id="contact">
        <div class="contact-oppo">
          <h2>Contact</h2>
          <div class="opportunites">
            <h3 id="open-oppo" data-scroll data-scroll-speed="1">Ouverte aux opportunités</h3>
            <div class="link-social">
              <a href="https://www.linkedin.com/in/claire-dornic-32900215a/" target="_blank" class="hover-link">Linkedin</a>
              <a href="https://twitter.com/Claire_dornic" target="_blank" class="hover-link">Twitter</a>
              <a href="./assets/pdf/CV_claire_dornic.pdf" target="_blank" class="hover-link">CV</a>
            </div>
          </div>
        </div>
        <div class="infos-contact">
          <p>Pour toutes informations, <br>
            ou si vous souhaitez discuter</p>
          <a href="mailto:dornic.claire@gmail.com" class="hover-link">dornic.claire@gmail.com</a>
        </div>
      </div>
    </div>
  </main>
  <?php require('./partials/scripts.php'); ?>
</body>
<?php require('./partials/footer.php'); ?>
