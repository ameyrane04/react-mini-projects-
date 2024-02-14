//kind of how reacts work BTS

const mainContainer = document.getElementById("root");

// function App() {
//     return (
//       <h1>Hello World!.</h1>
//     );
//   }

//react does not understand above written function App, 
// react converts the above type of syntax into the basic js code written below (reactElement)
//so libraries like react, vite etc use bundler for this conversion  

const reactElement = {
    type: 'a',
    props: {
        href: 'https://wwww.google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
}

customRender(reactElement, mainContainer);