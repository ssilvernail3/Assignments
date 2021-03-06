async function searchName(character) {
    const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters?name=${character}&ts=1&apikey=9fc66a02b7eaad221022d19aee14503d&hash=14bc49d69eac6d1dd823e2e75394321a`)
    console.log(resp);

    let hero = resp.data.data.results[0]; 
    let name = hero.name;
    let description = hero.description
    let id = hero.id

    return {
        id: hero.id,
        name: hero.name,
        description: hero.description

    };

    return hero; 


};



function addHero(hero) {

    const $infoList = $('#info');
    $infoList.empty();

    let $item = $(
        `<div id="${hero.id}">
            <h5 class="name">${hero.name}</h5>
            <p class="descrip">${hero.description}</p>
        </div>`
    );
    $infoList.append($item); 
};


$("#search-form").on("submit", async function handleSearch(evt) {
    evt.preventDefault();

    let character = $("#search-query").val();
    if (!character) return; 

    let hero = await searchName(character);

    addHero(hero); 
})

