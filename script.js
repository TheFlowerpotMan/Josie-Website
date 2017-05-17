var imageUrls = [
            '../images/carousel/hatstand16x9.jpg',
            '../images/carousel/lampstandtabletiny.jpg',
            '../images/carousel/officetiny.jpg',
            '../images/carousel/office2tiny.jpg'
        ];
        var imageIndex = -1;
        var imageAElement = document.getElementById('imageA');
        var imageBElement = document.getElementById('imageB');
        //start immediately
        switchImage();
        //run every n milliseconds
        setInterval(switchImage, 8000);

        function switchImage() {
            imageIndex = imageIndex + 1;
            if (imageIndex >= imageUrls.length) {
                imageIndex = 0;
            }
            var nextImageIndex = imageIndex + 1;
            if (nextImageIndex >= imageUrls.length) {
                nextImageIndex = 0;
            }
            var imageUrl = imageUrls[imageIndex];
            var nextImageUrl = nextImageIndex;
            var visibleElement;
            var hiddenElement;
            if (imageIndex % 2 === 0) {
                visibleElement = imageAElement;
                hiddenElement = imageBElement;
            } else {
                visibleElement = imageBElement;
                hiddenElement = imageAElement;
            }

            visibleElement.src = imageUrl;
            visibleElement.className = 'show';

            hiddenElement.className = 'hide';
        }