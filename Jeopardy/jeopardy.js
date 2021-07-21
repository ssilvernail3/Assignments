// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

function shuffle() {
    let counter = categories.length;

    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);


        counter--;


        let temp = categories[counter];
        categories[counter] = categories[index];
        categories[index] = temp;
    }
    // console.log(categories);
    return categories;
};

shuffle(categories);
// let arr = [1, 2, 2, 3, 3];
//     console.log(arr)

async function getCategoryIds() {
    const res = await axios.get(`https://jservice.io/api/categories?count=99`);
    // console.log(res);
    let categoryIds = res.data.map(category => ({
        id: category.id,
        // name: category.title
    }));
    // console.log(catIds); 
    for (let categoryId of categoryIds) {
        let catId = categoryId.id;
        // console.log(newId);
        getCategory(catId);
    }

};

async function getCategory(catId) {
    const res = await axios.get(`https://jservice.io/api/clues?category=${catId}`);
    // console.log(res);

    // * this gives us the object about our data // 
    let data = res.data.map(clue => ({
        question: clue.question,
        answer: clue.answer,
        showing: null,

    }));
    // console.log(data)
    // let showing = jQuery.data(data.showing, 'showing');
    // console.log(showing); 

    let dataObj = {
        title: res.data[0].category.title,
        clues: data
    };

    categories.push(dataObj);
    // console.log(categories)
    // await fillTable(categories); 

};

console.log(categories);


//I want to create an array of all the dataObj's we return to pass as an argument for fillTable(); 
//I pushed the dataObj into the global variable categories to use as the argument for fillTable(); 

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(categories) {

    let $item = $(`
        <h1 id="h1" class="display-3 text-center">Jeopardy</h1>
            <br>
        <table id="jeopardy" class="table table-hover">
            <thead>
                <tr>
                    <th class="cat1">?</th>
                    <th class="cat2">?</th>  
                    <th class="cat3">?</th>
                    <th class="cat4">?</th>
                    <th class="cat5">?</th>
                    <th class="cat6">?</th>
                </tr>
            </thead
            <tbody>
                <tr>
                     <td class="0-0">?</td>
                     <td class="1-0">?</td>
                     <td class="2-0">?</td>
                     <td class="3-0">?</td>
                     <td class="4-0">?</td>
                     <td class="5-0">?</td>
                     
                </tr>
                <tr>
                    <td class="0-1">?</td>
                    <td class="1-1">?</td>
                    <td class="2-1">?</td>
                    <td class="3-1">?</td>
                    <td class="4-1">?</td>
                    <td class="5-1">?</td>
                </tr>
                <tr>
                    <td class="0-2">?</td>
                    <td class="1-2">?</td>
                    <td class="2-2">?</td>
                    <td class="3-2">?</td>
                    <td class="4-2">?</td>
                    <td class="5-2">?</td>
                </tr>
                <tr>
                    <td class="0-3">?</td>
                    <td class="1-3">?</td>
                    <td class="2-3">?</td>
                    <td class="3-3">?</td>
                    <td class="4-3">?</td>
                    <td class="5-3">?</td>
                </tr>
                <tr>
                    <td class="0-4">?</td>
                    <td class="1-4">?</td>
                    <td class="2-4">?</td>
                    <td class="3-4">?</td>
                    <td class="4-4">?</td>
                    <td class="5-4">?</td>
                </tr>
            </tbody>
        </table>
            <br>
            <div class="container">
                <button id="restartBtn" class="btn btn-warning btn-lg btn-block">Restart!</button>
            </div>
        `);

    $('body').append($item);
    handleClick(categories);
    $('body').css('background', 'white');
};

// fillTable(categories);
/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick() {
    $('#jeopardy').on('click', function (event) {

        event.preventDefault();
        for (let i = 0; i < categories.length; i++) {
            let showing = categories[i].clues[i].showing;
            let question = categories[i].clues[i].question;
            let answer = categories[i].clues[i].answer;

            if (event.target.innerText === "?") {
                if (showing === null) {
                    showing = question;
                    console.log(event.target);
                    return event.target.innerText = question;
                }
            }
            else if (event.target.innerText === question) {
                showing = answer;
                console.log(event.target);
                event.target.style.background = 'green';
                return event.target.innerText = answer
            }

            else if (event.target.innerText === answer) {
                console.log(event.target);
                return $(`#${event.target.id}`).off('click');
            }


        };

    });

};

//fix the access to the questions and answer in the above function. 
//for the event listener when we click on the table we need to replace the event.target's innerText with the question/answer

getCategoryIds();

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let categories = await getCategoryIds();
    fillTable(categories);
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

// for filling the table with the question we will need to loop over the categories and fill in the appropriate cells with the corresponding indecies 
// need to have the categories array as an argument for the handle click so that way we can loop over the data 

$('#startBtn').on('click', function (event) {
    console.log(event.target);
    $('#startBtn').hide();
    $('.title').hide();
    setupAndStart();
});

$('#restartBtn').on('click', function () {
    $('#jeopdary').trigger('reset');
    setupAndStart();
});