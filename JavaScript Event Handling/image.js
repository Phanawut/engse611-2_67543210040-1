let currentIndex = 0;
const images = [
    "https://www.lrt.lt/img/2022/02/09/1191080-981331-756x425.jpg",
    "https://jimmysfarm.com/wp-content/uploads/2023/06/North-American-Raccoon.jpg",
    "https://streamline.imgix.net/9909d0de-9797-4416-97c3-b6f877e5307d/0fe9983e-0e28-4bc5-8063-074adb6deff2/raccoon-193647_1920.jpg?ixlib=rb-1.1.0&w=2000&h=2000&fit=max&or=0&s=9d58cc57ad67c86b524f7a542391978a",
    "https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/8842/live/eac34360-9847-11ef-9993-f7959d92ab33.jpg",
    "https://pestworldcdn-dcf2a8gbggazaghf.z01.azurefd.net/media/560906/istock_000007035875medium.jpg"
];

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll('.thumb');

function showImage(index) {
    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = images[index];
        mainImage.style.opacity = 1;
    }, 500);
}

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// ปุ่มถัดไปและก่อนหน้า
document.getElementById("nextBtn").addEventListener('click', nextImage);
document.getElementById("prevBtn").addEventListener('click', prevImage);

// การเลื่อนภาพอัตโนมัติ
setInterval(nextImage, 3000); // เลื่อนภาพทุกๆ 3 วินาที
