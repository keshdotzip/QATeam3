let current_index = 0;  // Current index of the main image
const nav_icons = document.querySelectorAll(".icon");  // Navigation icons
const big_image_root = ['1', '2', '3'];  // Image file names

const big_image = document.createElement('img');
document.querySelector('.big-image').append(big_image);

// Define a function 'first_load' to initialize the slideshow upon page load
const first_load = () => {
    set_main_image(0);
}

// Arrow function to set the main image and related attributes based on the passed index named image_index
const set_main_image = (image_index) => {
    big_image.src = `img/${big_image_root[image_index]}.jpg`;
    current_index = image_index;
    set_nav_buttons(image_index);
}

// setting up navigation to the next image in the rotation
const set_next_image = () => {
    const next_index = (current_index >= big_image_root.length - 1) ? 0 : current_index + 1;
    set_main_image(next_index);
}

// Loop through each navigation icon
nav_icons.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
        set_main_image(index);
    });
});

const set_nav_buttons = (index) => {
    nav_icons.forEach((icon, loop_index) => {
        icon.src = (loop_index == index) ? "img/active.svg" : "img/inactive.svg";
    });
}

// initializing different variables for navigating through the slides
const play_btn = document.querySelector(".play-pause");
const next_btn = document.querySelector(".next");
const prev_btn = document.querySelector(".prev");

// looping through the slider icons
nav_icons.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
        set_main_image(index);
    });
});

// configuring the navigation buttons
const set_nav_first = () => {
    current_index = 0;
    set_main_image(current_index);
}

const set_nav_last = () => {
    current_index = big_image_root.length - 1;
    set_main_image(current_index);
}

const set_nav_next = () => {
    current_index = (current_index >= big_image_root.length - 1) ? 0 : current_index + 1;
    set_main_image(current_index);
}

const set_nav_prev = () => {
    current_index = (current_index <= 0) ? big_image_root.length - 1 : current_index - 1;
    set_main_image(current_index);
}

// adding events to trigger desired functions on specified action
window.addEventListener("load", first_load);
prev_btn.addEventListener("click", set_nav_prev);
next_btn.addEventListener("click", set_nav_next);

// New code to advance slide on outside click
document.addEventListener("click", (event) => {
    const carousel = document.querySelector(".carousel");
    if (!carousel.contains(event.target) && !event.target.closest('.prev') && !event.target.closest('.next')) {
        set_nav_next();
    }
});
