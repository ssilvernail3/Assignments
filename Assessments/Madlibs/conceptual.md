### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    React is a JS library that is mainly used to create user interfaces (UI's). 

- What is Babel?

    Babel is application that is used in order to convert code in to browser compatible JS output.

- What is JSX?

    JSX is a syntax extension of JS which allows us to write HTML inside of JS files. 

- How is a Component created in React?

    A Component is created by making a JS file with the same name of the component, importing React, and defining a function with the same name, in the file. Once the function is created we can export it to another file and use it in an app. 

- What are some difference between state and props?

    Props can be attributes, functions, variables that are passed down to be used in a child component.

    State is used to define a certain piece of information that can be stored and manipulated with hooks. 

- What does "downward data flow" refer to in React?

    This flow refers to the passing of data downward from parent to child components. 

- What is a controlled component?

    A controlled component is a component in which form data is handled by the components state.

- What is an uncontrolled component?

    A component in which form data is handled by the dom itself, not by the state. 

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop gives each component a unique id that will not be changed if a component is changed. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    If any item is removed from the array, the idx of the prop will change, therefore changing the key prop. 

- Describe useEffect.  What use cases is it used for in React components?

    useEffect is a hook that is best used for when we wante to update a piece of state and we can limit the amount of times that we want a specific component to render. By passing in a value to an array as a second param we can tell React that we only want the component to re-render if a specific piece of state has changed. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    useRef gives us a reference to a specific DOM element. A change does not cause a rerender. 

- When would you use a ref? When wouldn't you use one?

    To manage focus, select text, etc. You wouldnt use on to specifically manipulate DOM elements if you can use useState instead. 

- What is a custom hook in React? When would you want to write one?

    Custom hooks are functions that we can import which are used to serve as a reuse tool for stateful logic. Custom hooks are used to help clean up code when code is repeated multiple times for the same purpose. 
