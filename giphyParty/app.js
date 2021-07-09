
// const form = document.querySelector('#searchform');
// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const newGif = document.createElement('img');
//     // newGif.src = 
//     const newDiv = document.createElement('div');
//     const body = document.querySelector('body');
//     newDiv.append(newGif);
//     body.append(newDiv);
//     // console.log(input.value);
// })






const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener('submit', async function (event) {
    event.preventDefault();


    let search = input.value;

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { api_key: 'wjpwaKglBtOwVK8wag0aRz4ez11HDC1P', q: search } });
    const newGif = document.createElement('img');
    let numResults = res.data.length;
    let randomIdx = Math.floor(Math.random() * numResults);
    newGif.src = res.data.data[randomIdx].url;

    const newDiv = document.createElement('div');
    const body = document.querySelector('body');
    newDiv.append(newGif);
    body.append(newDiv);

    console.log(res.data);
    // console.log(input.value);
})

//   console.log(search)







//newGif src === input url from GIPHY API 
//search === input.value
