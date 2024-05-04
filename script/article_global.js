window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-H16N9DYWLG');

document.addEventListener("DOMContentLoaded", function() {
    const license = document.getElementById("license_click_action");

    license.addEventListener("click", function() {
        window.location.href = "../articles/software_license.html#navigation";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById("home");
    const stats = document.getElementById("stats");
    const projects = document.getElementById("projects");
    const blog = document.getElementById("blog");
    const gallery = document.getElementById("gallery");
    
    home.addEventListener("click", function() {
        window.location.href = "../home.html";
    });
    stats.addEventListener("click", function() {
        window.location.href = "../stats_404.html#navigation";
    });
    projects.addEventListener("click", function() {
        window.location.href = "../projects.html#navigation";
    });
    blog.addEventListener("click", function() {
        window.location.href = "../blog.html#navigation";
    });
    gallery.addEventListener("click", function() {
        window.location.href = "../gallery.html#navigation";
    });

});

document.addEventListener("DOMContentLoaded", function() {
    if (isLoggedIn) {
        document.getElementById("favicon").href = "../assets/image/icon.png";
      }
    });