// Top Info Bar ----------------------------------------------------------------------
document.getElementById("top-email").innerText = "youremail@gmail.com";
document.getElementById("top-mobile-no").innerText = "+911234567890";
document.getElementById("top-time").innerText = "Everyday 7 AM to 7 PM";

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
navbar_nav_item_dropdown_generator("Service", ['s1', 's2', 's3'], ['sh1', 'sh2', 'sh3']);
navbar_nav_item_generator("Blog","./blog.html");
navbar_nav_item_generator("About US");
