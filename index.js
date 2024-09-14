// Select all the nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Add event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

// JavaScript to handle the menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const times = document.getElementById('times');
    const navUl = document.querySelector('nav ul');

    menuBar.addEventListener('click', function () {
        navUl.classList.add('show');
        menuBar.style.display = 'none';
        times.style.display = 'block';
    });

    times.addEventListener('click', function () {
        navUl.classList.remove('show');
        menuBar.style.display = 'block';
        times.style.display = 'none';
    });
});
