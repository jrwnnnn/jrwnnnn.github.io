window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-H16N9DYWLG');

document.addEventListener("DOMContentLoaded", function() {
    const license = document.getElementById("license_click_action");

    license.addEventListener("click", function() {
        window.location.href = "../pages/articles/license.html#navigation";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById("home");
    const stats = document.getElementById("stats");
    const projects = document.getElementById("projects");
    const blog = document.getElementById("blog");
    const gallery = document.getElementById("gallery");
    
    home.addEventListener("click", function() {
        window.location.href = "../pages/home.html";
    });
    stats.addEventListener("click", function() {
        window.location.href = "../pages/stats_404.html#navigation";
    });
    projects.addEventListener("click", function() {
        window.location.href = "../pages/projects.html#navigation";
    });
    blog.addEventListener("click", function() {
        window.location.href = "../pages/blog.html#navigation";
    });
    gallery.addEventListener("click", function() {
        window.location.href = "../pages/gallery.html#navigation";
    });

});