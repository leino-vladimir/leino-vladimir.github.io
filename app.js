let btn1 = document.getElementById('singIn');

const someFunc = () => {

    document.getElementById('spiner1')?.classList.remove('d-none');
    document.getElementById('text').classList.add('d-none');
    fetch('https://api.nasa.gov/planetary/apod?api_key=q84koG24PH7BoFEof3KwPUws6pZwXfyvAqavGDsa')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            btn1.innerHTML = data.title;
        })
        .catch((e) => {
            btn1.innerHTML = 'Ошибочка вышла';
            throw new Error(e);
        });
}

btn1.addEventListener('click', someFunc);