document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle to all pages
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // Create mobile menu toggle button
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    
    // Add toggle button to header
    if (header && nav) {
      header.insertBefore(mobileMenuToggle, nav);
    }
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
      const navLinks = document.querySelector('nav ul');
      navLinks.classList.toggle('show');
      
      // Change icon based on menu state
      if (navLinks.classList.contains('show')) {
        mobileMenuToggle.innerHTML = '<i class="fa fa-times"></i>';
      } else {
        mobileMenuToggle.innerHTML = '<i class="fa fa-bars"></i>';
      }
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('show');
        mobileMenuToggle.innerHTML = '<i class="fa fa-bars"></i>';
      });
    });
    
    // Responsive car container adjustments
    const redCar = document.getElementById('redCar');
    const blackCar = document.getElementById('blackCar');
    
    // Adjust animations for mobile
    function setCarAnimations() {
      if (window.innerWidth <= 768) {
        if (redCar) redCar.style.height = 'auto';
      } else {
        if (redCar) redCar.style.height = '300px';
      }
    }
    
    // Run on page load and window resize
    setCarAnimations();
    window.addEventListener('resize', setCarAnimations);
    
    // Responsive grid adjustments
    function adjustGridLayout() {
      const playArea = document.querySelector('.play-area');
      const grid = document.querySelector('.grid-container');
      
      if (playArea && grid) {
        if (window.innerWidth <= 768) {
          playArea.style.gridColumn = '1';
          playArea.style.gridRow = '3';
          playArea.style.height = '250px';
        } else if (window.innerWidth <= 992) {
          playArea.style.gridColumn = '1 / span 2';
          playArea.style.gridRow = '3';
          playArea.style.height = '300px';
        } else {
          playArea.style.gridColumn = '3';
          playArea.style.gridRow = '1 / span 2';
          playArea.style.height = '655px';
        }
      }
    }
    
    // Run on page load and window resize
    adjustGridLayout();
    window.addEventListener('resize', adjustGridLayout);
  });