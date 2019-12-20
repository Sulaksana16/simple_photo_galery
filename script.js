const container = document.querySelector('.container');
const mainImg = document.querySelector('.mainimg')
const thumbs = document.querySelectorAll('.thumb1')

container.addEventListener('click', function (even) {
    if (even.target.className == 'thumb1') {
        mainImg.src = even.target.src;
        mainImg.classList.add('fade');
        setTimeout(function () {
            mainImg.classList.remove('fade')
        }, 500);

        for (let i = 0; i < thumbs.length; i++) {
            if (thumbs[i].classList.contains('active'))
                thumbs[i].classList.remove('active')
        }

        even.target.classList.add('active');

    }
})