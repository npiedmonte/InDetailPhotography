var imageThumbs = document.getElementById("image-thumbs");

var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 23; i++) {
    var thumb = document.createElement("img");

    thumb.src = "images/family/family" + i + ".jpg";
    thumb.alt = "Image " + i;

    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);

    thumb.addEventListener(
        "click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        }
      );
}

