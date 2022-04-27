// Top Info Bar ----------------------------------------------------------------------
document.getElementById("top-email").innerText = "rashvikstudio@gmail.com";
document.getElementById("top-mobile-no").innerText = "+917906197081";
document.getElementById("top-time").innerText = "Everyday 10 AM to 8 PM";

// Social Media Links ----------------------------------------------------------------
// function to create social link and append in Top Info Bar
function top_info_bar_social_link_generator(a_href, img_src) {
   let a = document.createElement("a");
   a.setAttribute("href", a_href);
   let img = document.createElement("img");
   img.setAttribute("src", img_src);
   a.append(img);
   document.getElementById("social-media-icons").append(a);
}

// calling the top info bar function
//youtube
top_info_bar_social_link_generator("https://www.youtube.com/channel/UCAR1ZyrsqNt7cm7Xx-HBEjg", "./assets/images/svg-icons/color-youtube.svg");
//facebook
top_info_bar_social_link_generator("https://www.facebook.com/rashvikstudio2/", "./assets/images/svg-icons/color-facebook.svg");
//instagram
top_info_bar_social_link_generator("https://www.instagram.com/rashvikstudio2/?hl=en", "./assets/images/svg-icons/color-instagram.svg");


// Navbar ----------------------------------------------------------------------------

// function to create and append normal nav-item.
function navbar_nav_item_generator(a_text, a_href = "javascript:void(null)") {
   // creating li tag to append in .navbar -> .navbar-nav.
   let li = document.createElement("li");
   li.setAttribute("class", "nav-item");
   // creating a tag to append in li
   let a = document.createElement("a");
   a.setAttribute("class", "nav-link");
   a.setAttribute("href", a_href);
   a.innerText = a_text;
   // inserting a in li
   li.append(a);
   // inseting li in #navbar-nav
   document.getElementById("navbar-nav").append(li);
}

// function to create and append normal nav-item dropdown. nav_link_a_text, inner_a_text[], inner_a_href[]
function navbar_nav_item_dropdown_generator(nav_link_a_text, [], []) {
   // creating li tag to append in .navbar -> .navbar-nav.
   let li = document.createElement("li");
   li.setAttribute("class", "nav-item dropdown");
   // creating a tag to append in li
   let a = document.createElement("a");
   a.setAttribute("class", "nav-link dropdown-toggle");
   a.setAttribute("href", "#");
   a.setAttribute("role", "button");
   a.setAttribute("data-bs-toggle", "dropdown");
   a.innerText = nav_link_a_text;
   // creating ul tag for dropdown menu to append in li 
   let ul = document.createElement("class", "dropdown-menu");
   ul.setAttribute("class", "dropdown-menu");
   for (let i = 0; i < arguments[1].length; i++) {
      //creating li for dropdown-menu (.dropdown-menu>li)
      let li = document.createElement("li");
      //creating a (.dropdown-menu>li>a)
      let a = document.createElement("a");
      a.setAttribute("class", "dropdown-item");
      a.innerText = arguments[1][i];
      a.setAttribute("href", arguments[2][i]);
      //(.dropdown-menu>li>a)
      li.append(a);
      //(.dropdown-menu>li)
      ul.append(li);
   }
   // inserting a in li (li>a)
   li.append(a);
   // inserting ul in li (li>a+ul)
   li.append(ul);
   // inseting li in #navbar-nav
   document.getElementById("navbar-nav").append(li);
}

// calling the navbar functions
navbar_nav_item_generator("Home", "./index.html");
navbar_nav_item_generator("Services", "./services.html");
navbar_nav_item_generator("About US", "./about-us.html");

// Active Link --------------------------------------------------------------------------

let link_url = document.querySelectorAll(".navbar-nav .nav-link");
for (let i = 0; i < link_url.length; i++) {
   if (link_url[i].pathname == document.location.pathname) {
      link_url[i].classList.add("active-link");
   }
}

