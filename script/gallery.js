fetch('https://jrwnnnn.github.io/docs/assets/images/gallery/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        const parser = new DOMParser();
        const html = parser.parseFromString(text, 'text/html');
        const images = Array.from(html.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]'));
        const imagesContainer = document.getElementById('images_container');
        images.forEach(image => {
            const url = 'https://jrwnnnn.github.io/docs/assets/images/gallery/' + image.getAttribute('href');
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = 'image_entry';
            imgElement.onclick = () => window.open(url, '_parent');
            imagesContainer.appendChild(imgElement);
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
