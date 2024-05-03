document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".images_container img, .images_container video");
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    const popupImage = document.querySelector(".popup-image");
    const popupVideo = document.querySelector(".popup-video");

    elements.forEach(function (element) {
        element.addEventListener("click", function () {
            popup.style.display = "flex"; 
            if (element.tagName.toLowerCase() === 'img') {
                popupImage.src = element.src; 
                popupImage.style.display = "block"; 
                popupVideo.style.display = "none"; 
            } else if (element.tagName.toLowerCase() === 'video') {
                const videoSource = element.querySelector('source');
                if (videoSource) {
                    popupVideo.src = videoSource.src;
                    popupVideo.style.display = "block"; 
                    popupImage.style.display = "none"; 
                } else {
                    console.error('Video element missing source');
                }
            }
        });
    });

    popup.addEventListener("click", function (event) {
        const buffer = 50; 
        const clickWithinContent = event.target.closest('.popup-content');
        if (!clickWithinContent) {
            popup.style.display = "none";
        }
    });
});
