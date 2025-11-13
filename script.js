// Fonction pour charger un composant HTML dans un élément par ID
function loadComponent(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
      return response.text();
    })
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((err) =>
      console.error(`Erreur de chargement du composant ${file}:`, err)
    );
}

// Charger les différentes parties
loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html");
loadComponent("stats", "components/stats.html");
loadComponent("formations", "components/formations.html");
loadComponent("about", "components/about.html");
loadComponent("contact", "components/contact.html");
loadComponent("faq","components/faq.html");
loadComponent("footer", "components/footer.html");


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
        
  mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
        
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
                  // Close mobile menu if open
                  mobileMenu.classList.add('hidden');
              }
          });
        });

// Animation de rotation du chevron
    document.querySelectorAll("details summary").forEach((summary) => {
      summary.addEventListener("click", () => {
        const icon = summary.querySelector("i");
        icon.classList.toggle("rotate-180");
      });
    });


// Script JavaScript pour la navigation

    function showFormation(type) {
        // Masquer la grille principale
        document.getElementById('formations-grid').classList.add('hidden');
        
        // Masquer tous les détails de formations
        document.querySelectorAll('.formation-detail').forEach(detail => {
            detail.classList.add('hidden');
        });
        
        // Afficher le détail de la formation sélectionnée
        document.getElementById(type + '-formations').classList.remove('hidden');
        
        // Afficher le bouton retour
        document.getElementById('back-button').classList.remove('hidden');
        
        // Scroll vers le haut de la section
        document.getElementById('formations').scrollIntoView({ behavior: 'smooth' });
    }
    
    function showGrid() {
        // Masquer tous les détails de formations
        document.querySelectorAll('.formation-detail').forEach(detail => {
            detail.classList.add('hidden');
        });
        
        // Masquer le bouton retour
        document.getElementById('back-button').classList.add('hidden');
        
        // Afficher la grille principale
        document.getElementById('formations-grid').classList.remove('hidden');
        
        // Scroll vers le haut de la section
        document.getElementById('formations').scrollIntoView({ behavior: 'smooth' });
    }