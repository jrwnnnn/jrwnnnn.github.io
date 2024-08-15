window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-H16N9DYWLG');

document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById("home");
    const stats = document.getElementById("stats");
    const projects = document.getElementById("projects");
    const blog = document.getElementById("blog");
    const gallery = document.getElementById("gallery");
    
    home.addEventListener("click", function() {
        window.location.href = "https://jrwnnnn.github.io/pages/home.html";
    });
    stats.addEventListener("click", function() {
        window.location.href = "https://jrwnnnn.github.io/pages/stats_404.html#navigation";
    });
    projects.addEventListener("click", function() {
        window.location.href = "https://jrwnnnn.github.io/pages/projects.html#navigation";
    });
    blog.addEventListener("click", function() {
        window.location.href = "https://jrwnnnn.github.io/pages/blog.html#navigation";
    });
    gallery.addEventListener("click", function() {
        window.location.href = "https://jrwnnnn.github.io/pages/gallery.html#navigation";
    });
    const images = document.querySelectorAll('img, video');
    images.forEach(function(img) {
      img.oncontextmenu = function() {
        return false;
      };
    });
});
document.addEventListener('DOMContentLoaded', () => {
    function replaceFileNameWithImage() {
        const textNodes = document.evaluate('//text()[contains(., ":")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        
        const regex = /:([\w\-]+\.(webp|gif)):?/g;
        
        for (let i = 0; i < textNodes.snapshotLength; i++) {
            const node = textNodes.snapshotItem(i);
            let nodeText = node.nodeValue;
            
            const replacedText = nodeText.replace(regex, (match, p1) => {
                const baseURL = "https://jrwnnnn.github.io/assets/images/emoji/";
                const imgURL = `${baseURL}${p1}`;
                
                return `<img src="${imgURL}" alt="*****${p1}*****" class="emoji">`;
            });
            
            if (replacedText !== nodeText) {
                const span = document.createElement('span');
                span.innerHTML = replacedText;
                if (node.parentNode) {
                    node.parentNode.replaceChild(span, node);
                }
            }
        }
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('contextmenu', (event) => {
                event.preventDefault();
            });
        });
    }

    // Call the function
    replaceFileNameWithImage();
});
