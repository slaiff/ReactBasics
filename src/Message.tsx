//.ts is plain typescript files, .tsx is typescript with jsx syntax (react file)

//We can make a react component either via JS classes, or as functions. 
//Functions better / more modern way to make components

//PascalCasing, what React expects for function component names, not pascalCasing, or pascal_casing. 
function Message(){
    //JSX - Javascript XML - special syntax that looks like HTML, but is actually JS
    const name = "Dylan";

    if (name)
            return <h1>Hello {name.toUpperCase()}</h1>;
        return <h1>Hello World</h1>; //go to https://babeljs.io/ to see how JSX is converted to JS
}

export default Message; //export the component so other files can use it