let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen = true;
    }

    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false
    }
    
}

function scrollToContact() {
    // Find the element with the class "contact" using querySelector
    const contactSection = document.querySelector(".contact");

    // Check if the element exists
    if (contactSection) {
        // Use scrollIntoView to scroll to the element
        contactSection.scrollIntoView({
            behavior: "smooth" // Add smooth scrolling effect
        });
    }
}
