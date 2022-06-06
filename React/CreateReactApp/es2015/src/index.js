import fruits from './foods';
import { choice, remove } from './helpers';


function fruitChoice() {
    const RANDOMFRUIT = choice(fruits); 
    console.log(`I'd like one ${RANDOMFRUIT} please`)
    console.log(`Here you go: ${RANDOMFRUIT}`);
    console.log(`Delicious may I have another?`);
    remove(fruits, RANDOMFRUIT);
    console.log(`I'm sorry we are all out. We have ${fruits} left.`)
}
