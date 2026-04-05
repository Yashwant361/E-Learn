# why react not render when components starts with small letter instead of Capital?

# Fragment , Scaffolding

==> React does not render components starting with a lowercase letter because JSX interprets them as built-in HTML elements rather than custom JavaScript components. 
==> When a tag begins with a lowercase letter, Babel compiles it into React.createElement('elementName'),


# What is React?
==> A react is component based UI library.

# What is Components and use of it react
==> Component : A component is a self - contained , resuable piece of code that represents a specific part of the user interface
==> Uses
-------------
1). Modular Developement : 
2). Efficient UI Update:
3). Code Reusability and Composition

# There are two types of Components [functionBase , classBase]

# functionBase Component                 |         # classBase Components
function App(){                          |       import {React} from 'react                   
                                         |       class App extends Component{
    return(                              |            render()
                                         |             return (
                                         |            <>
                                         |              <h1>Hello Class Component</h1> 
                                         |            </>
                                         |               )
        <>                               |        }
     <h1>Hello Function Component</h1>   |          
        </>                              |           
    )                                    |     
}                                        | 



# what is JSX?
==> JSX is stands for JavaScript Xml
==> JSX is a syntax extension for JavaScript that allowed developers to write JavaScript inside React using { }

# Props
==> Pros stands for Properties 
==> It's unidirectional data flow
==> Props are passed from parent to child, and data flow in React is unidirectional. Child cannot modify props directly.

# import vs Export

==> Export :  the mechanism used to make components, functions, variables, or objects available for use in other files

Types of Export
1. Default Export (Most Used): 👉 Ek file me sirf 1 default export

==> // App.js
function App() {
    return <h1>Hello</h1>;
}

export default App;


2. Named Export : 👉 Ek file me multiple exports kar sakte ho

// utils.js
export const name = "Ray";
export const age = 22;

--------------------

==> import :   An import means , accept data from another file
 
🔥 Import Syntax
1.) Default Import

==> import App from "./App";

# Name kuch bhi rakh sakte ho
==> import MyComponent from "./App"; // valid

2.) Named Import
==> import { name, age } from "./utils";

-----------------------

# Real DOM vs Virtual DOM

| Feature    | Real DOM       | Virtual DOM       |
| ---------- | -------------- | ----------------- |
| Speed      | Slow ❌       | Fast ✅           |
| Update     | Full re-render | Only changed part |
| Memory     | Direct browser | Memory copy       |
| Efficiency | Low            | High              |
| Used in    | Vanilla JS     | React             |



==> Real DOM directly updates the UI and can be slow because it re-renders the entire structure.
==> Virtual DOM is a lightweight copy of the real DOM used by React, which updates only the changed parts using a diffing algorithm, making it faster and more efficient."