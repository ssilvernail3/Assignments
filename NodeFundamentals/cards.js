let url = `http://deckofcardsapi.com/api/deck/new/draw/?count=1`


// let resolvedPromise = axios.get(url)


// resolvedPromise
//     .then(data => console.log(data.data.cards[0].value, data.data.cards[0].suit))
//     .catch(err => console.log(err))




axios
    .get(`${url}`)
    .then(c1 => {
        console.log(`${c1.data.cards[0].value, c1.data.cards[0].suit}`)
        return axios.get(`${url}`);
    })
    .then(c2 => {
        console.log(`${c2.data.cards[0].value, c2.data.cards[0].suit}`)
       
    })
    .catch(err => {
        console.log(`There was an error : ${err}`)
    })


   