const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');

async function getCats() {
    const data = await fetch(BASE_URL)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    return data[0].url;
}

async function loadImg() {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

loadImg();
catBtn.addEventListener('click', loadImg);