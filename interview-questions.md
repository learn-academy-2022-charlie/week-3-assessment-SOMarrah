# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'This' is JavaScript is a way to refer to something inside of an object, class, or method. Recently I have used 'this' to refer to the state of a component in react. (this.state)

  Researched answer: In JavaScript 'this' is a keyword that refers to the object it belongs to. This can also refer to an element in an event. There is a precedence in order to determine which object 'this' refers to. The order is: bind, apply/call, object method, and global scope. I have used 'this' to refer to the state of something in React (this.state.<something>).



2. What is React? Why would you use it?

  Your answer: React was created by Meta(facebook). It is also called JSX, and is a combination of JavaScript and HTML. It was created to be scalable with the immense user-base of facebook. React allows users to instantly see behaviors and interactions with the DOM.

  Researched answer: React is a JavaScript library for building user interfaces. It was created by facebook. It is useful because when the 'state' of something changes only that component will change, as opposed to reloading or re-rendering the whole page. I would use React because of the instant user-interaction. It was built because facebook was growing and needed to be scalable for the massive amount of users it had.



3. Which lifecycle method is required in a React class component?

  Your answer: I believe the render() lifestyle method is required in all React class components. Render() is how React knows what to display in the DOM. In my experience I have used the state of objects to change what is being rendered based on user interaction; like clicking a box to change the color, or clicking a button to display certain information.

  Researched answer: The only required lifecycle method for a React class component is render(). The lifecycle of react has 3 stages. They are mounting, updating, and unmounting. In each stage of the lifecycle there are also 3 phases. They are render phase, pre-commit phase, and commit phase. The render phase should always be 'pure' - meaning it does not change the state of variables. The render method is used to actually render the HTML on the web page.



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is another term for React. In JSX you reference JavaScript by using curly bracers inside the HTML components.

  Researched answer: JSX stands for JavaScript XML. JSX is like a combination of HTML and JavaScript, and makes it easier to use JavaScript in HTML via React. Before JSX the syntax of HTML and JavaScript had to createElements and getElements. With them combined you can use HTML tags with javascript and vice versa.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a packaging software. I don't know all of the files off hand but I do know when you add dependencies to your files node modules are added, along with a Yarn Lock file. I think it also depends on what you are doing with Yarn, for example I will get different files if I do $Yarn add Jest vs Yarn create React-App <app-name>.

  Researched answer: Yarn is a package manager for Node. A package manager is a way to quickly install pieces of software. When you run Yarn in a React application it adds node modules if they were not there already. There are also other dependencies that could be installed if needed. Yarn was also created by Facebook, with a focus on speed security and consistency.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: an anonymous function in javascript is the syntax of an empty function () =>. I think it is a way to tell the computer to watch for when something specific happens and then continue with what is after, but I am not sure. I have used anonymous functions when I added a method to onClick in React.

  Researched answer: An anonymous function is a function without a name. Anonymous functions can only accessed by the variable it is stored in. I have used anonymous functions many times by using the ES6 arrow syntax when creating new functions.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: using a conditional to control what is rendered by the DOM.

2. Object-oriented programming: Everything is contained in an object as to not make applications that have a massive block of code and dependencies. It allows for smaller parts to interact with each other and to be tracked easier.

3. Ruby: An open sourced programming language that is object-oriented. It is a server-side scripting language.

4. Ruby blocks: are like anonymous functions in javascript. use the keyword do/end or curly bracers {}

5. Ruby hashes: hashes are like object, data is stored in key value pairs. The data is referenced by a hash number. They are enumerable, so iteration methods work on them.
