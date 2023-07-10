<div data-scroll-section class="projets" id="projets">
        <h2 data-scroll data-scroll-speed="2">Projets</h2>
        <div class="gallery">
        <?php
        $projects = json_decode( file_get_contents( './content/projects.json' ), true );
        foreach ( $projects as $project ) {
           ?>
            <a href="./project?name=<?php echo $project['slug'] ?>" class="gallery-item">  
            <div class="gallery-item-img"> 
              <img src="./assets/img/<?php echo $project['slug'] ?>-icon.jpg" class="hover-link" alt="">
              <div class="emblem" id="projet-1"><?php echo $project['type'] ?> •</div>
            </div>
            <figcaption class="gallery-item-caption" data-scroll="" data-scroll-speed="1">
              <h3 class="gallery-item-title"><?php echo $project['title'] ?></h3>
            </figcaption> 
          </a>
           <?php
        }
        ?>
          
        </div>
      </div> 