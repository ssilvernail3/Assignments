async function getNumberFact() {
    let fact = await axios.get('http://numbersapi.com/3?json')
    console.log(fact.data.text)
};

getNumberFact();



async function getNumbersFacts() {
    let f1Promise = axios.get('http://numbersapi.com/1?json')
    let f2Promise = axios.get('http://numbersapi.com/2?json')
    
    let f1 = await f1Promise;
    let f2 = await f2Promise;

    console.log(f1.data.text)
    console.log(f2.data.text)
};

getNumbersFacts();

async function getFourFacts() {
    let f1Promise = axios.get('http://numbersapi.com/3?json')
    let f2Promise = axios.get('http://numbersapi.com/3?json')
    let f3Promise = axios.get('http://numbersapi.com/3?json')
    let f4Promise = axios.get('http://numbersapi.com/3?json')
    
    let f1 = await f1Promise;
    let f2 = await f2Promise;
    let f3 = await f3Promise;
    let f4 = await f4Promise;

    console.log(f1.data.text)
    console.log(f2.data.text)
    console.log(f3.data.text)
    console.log(f4.data.text)
};

getFourFacts();

