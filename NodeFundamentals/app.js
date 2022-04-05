let validURL = 'http://numbersapi.com/3?json'
let futureResolvedPromise = axios.get(validURL)


futureResolvedPromise
    .then(data => console.log(data))
    .catch(err => console.log(err))


let fourNumbers = [];

for (let i = 1; i < 5; i++){
    fourNumbers.push(
        axios.get(`http://numbersapi.com/${i}`)
    )
}; 


Promise.all(fourNumbers)
    .then(numsArr => (
        numsArr.forEach(n => console.log(n))
    ))
    .catch(err => console.log(err)); 




let baseURL = 'http://numbersapi.com/3?json';

axios
    .get(`${baseURL}`)
    .then(f1 => {
        console.log(`This is the first fact about the number 3:  ${f1.data.text}`)
        return axios.get(`${baseURL}`);
    })
    .then(f2 => {
        console.log(`This is the first fact about the number 3:  ${f2.data.text}`)
        return axios.get(`${baseURL}`);
    })
    .then(f3 => {
        console.log(`This is the first fact about the number 3:  ${f3.data.text}`)
        return axios.get(`${baseURL}`);
    })
    .then(f4 => {
        console.log(`This is the first fact about the number 3:  ${f4.data.text}`)
    })
    .catch(err => {
        console.log(`Ooops, there was a problem : (${err})`);
    })
    
