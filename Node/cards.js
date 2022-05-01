// async function newDeck() {
//     let res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1');
//     console.log(res);
//     console.log(res.data.cards[0].value, res.data.cards[0].suit);
    
// }

// newDeck();

const deck = {
    async init() {
        let res = await axios.get('http://deckofcardsapi.com/api/deck/new/')
        this.deckId = res.data.deck_id
    },

    async shuffle() {
        let res = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(res)
    },

    async drawCard() {
        let res = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res.data.cards[0].value, res.data.cards[0].suit)
    }
}