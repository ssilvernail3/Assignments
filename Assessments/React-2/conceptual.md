### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is used to handle client side route handling

- What is a single page application?

  A single page application is where there is no page refresh, (content is not being reloaded but rather rerendered)

- What are some differences between client side and server side routing?

  Server side routing handlers can pull information from a database and render templates using Jinja for example, using multi-page apps.

  Client side routing is handled on a single page app where Components are rendering JSX. 

- What are two ways of handling redirects with React Router? When would you use each?

  You can use the Redirect Component to handle url changes that do not match any provided routes; will reroute to specific url of your choice. 

- What are two different ways to handle page-not-found user experiences using React Router? 

- How do you grab URL parameters from within a component using React Router?

  You Can use the useParams hook to grab params and use them accordingly. 

- What is context in React? When would you use it?

  Context allows you to pass down info / manipulate state between multiple levels of your app without having to tunnel to each level. It is useful when you need to pass down information/change or update state in a child component that is multiple levels down from the parent.

- Describe some differences between class-based components and function
  components in React.

    Class based components require much more manipulation in order to change/update state, or pass down props compared to a functional component which allows you to pass props as arguments. 

- What are some of the problems that hooks were designed to solve?

    Hooks allow for easy manipulation of data that class based components previously struggled with. 