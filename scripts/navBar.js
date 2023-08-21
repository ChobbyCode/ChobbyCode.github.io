
createNav();


function createNav() {

    const navM = document.getElementById("nav"); // Gets the nav

    //The ul
    const ul = document.createElement("ul");
    ul.id = "nav-ul";

    navM.appendChild(ul);  // Appends to nav

    const nav_ul = document.getElementById("nav-ul"); // Gets the inner nav

    //Creates the nav icons
    const li_1 = document.createElement("li");
    const li_2 = document.createElement("li");
    const li_3 = document.createElement("li");
    const li_4 = document.createElement("li");

    //Sets the ids on the nav icons
    li_1.id = "nav-li-1";
    li_2.id = "nav-li-2";
    li_3.id = "nav-li-3";
    li_4.id = "nav-li-4";

    //Styles the floating nav incons
    li_3.style = "float:right"
    li_4.style = "float:right"

    //Appends the nav icons
    nav_ul.appendChild(li_1);
    nav_ul.appendChild(li_2);
    nav_ul.appendChild(li_3);
    nav_ul.appendChild(li_4);

    const a_1 = document.createElement("a"); // Home
    const a_2 = document.createElement("a"); // Blog
    const a_3 = document.createElement("a"); // Youtube
    const a_4 = document.createElement("a"); // About

    //Sets the links
    a_1.href = "index.html";
    a_2.href = "blog.html";
    a_3.href = "https://www.youtube.com/channel/UCGTBbWzzWBv3qTStI30zklw";
    a_4.href = "about.html";

    //Sets the text
    a_1.textContent = "Home";
    a_2.textContent = "Blog";
    a_3.textContent = "Youtube";
    a_4.textContent = "About";

    //Gets the ids
    const nav_li_1 = document.getElementById("nav-li-1"); // Gets the inner nav
    const nav_li_2 = document.getElementById("nav-li-2"); // Gets the inner nav
    const nav_li_3 = document.getElementById("nav-li-3"); // Gets the inner nav
    const nav_li_4 = document.getElementById("nav-li-4"); // Gets the inner nav

    nav_li_1.appendChild(a_1);
    nav_li_2.appendChild(a_2);
    nav_li_3.appendChild(a_3);
    nav_li_4.appendChild(a_4);

    const br = document.createElement("br");

    navM.appendChild(br);
    navM.appendChild(br);

    const footer = document.createElement("div");

    footer.id = "footer";

    navM.appendChild(footer);

}