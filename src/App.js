import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.'
  },
  {
    title: 'Why use React?',
    content: 'Now, the main question arises in front of us is why one should use React. There are so many open-source platforms for making the front-end web application development easier, like Angular. Let us take a quick look on the benefits of React over other competitive technologies or frameworks. With the front-end world-changing on a daily basis, it’s hard to devote time to learning a new framework – especially when that framework could ultimately become a dead end. So, if you are looking for the next best thing but you are feeling a little bit lost in the framework jungle, I suggest checking out React. ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use. Anyone with a basic previous knowledge in programming can easily understand React while Angular and Ember are referred to as ‘Domain-specific Language’, implying that it is difficult to learn them. To react, you just need basic knowledge of CSS and HTML. React can be used to create mobile applications (React Native). And React is a diehard fan of reusability, meaning extensive code reusability is supported. So at the same time, we can make IOS, Android and Web applications. React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It is easier to debug self-contained components of large ReactJS apps. React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically. ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.'
  },
  {
    title: 'How do you use React?',
    content: 'There are two ways to create React apps. First, you use npm (Node Package Manager) installed on your machine. If you’re using VS Code, you need to make sure you’ve configured your machine to run React code in VS code using npm. You will also need to setup a build environment for React that typically involved use of npm (node package manager), webpack, and Babel. We can also create a React app without npm by directly importing Reactjs library in our HTML code.'
  }
];

const App = () => {
  return (
    <div className = "ui raised very padded text container segment">
      <h2>Minipedia</h2>
      <Search />
    </div>
  );
};
export default App;
