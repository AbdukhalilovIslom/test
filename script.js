// interest image

const interest_image_btn1 = document.querySelector('.interest-btn1');
const interest_image_btn2 = document.querySelector('.interest-btn2');
const interest_photo = document.querySelector('.interest-photo');
var a = 1;
imageGallery(1);

function imageGallery(b) {
    interest_photo.src = `./assets/img${b}/${a}.jpg`
    interest_image_btn1.addEventListener('click', () => {

        if (a == 5) {
            a = 0;
        }
        a++;
        interest_photo.src = `./assets/img${b}/${a}.jpg`
    });
    interest_image_btn2.addEventListener('click', () => {
        a--;
        if (a == 0) {
            a = 5;
        }
        interest_photo.src = `./assets/img${b}/${a}.jpg`

    });
}