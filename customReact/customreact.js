function customRender(element,container){
    /* const domElement = document.createElement(element.type)

    domElement.innerHTML = element.children
    domElement.setAttribute('href',element.props.href)

    domElement.setAttribute('target',element.props.target)

    container.append(domElement) */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    for (const prop in element.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,element.props[prop]);
    }

    container.append(domElement)

}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
const maincontainer = document.querySelector("#root");

customRender(reactElement,maincontainer);