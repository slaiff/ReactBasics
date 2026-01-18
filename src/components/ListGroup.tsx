function ListGroup() {
  
  //JSX code (after the return below) only can be HTML or other React elements. 
  
  //basic list of str 
  let items = [
    "Concord",
    "Walnut Creek",
    "Pittsburg",
    "Brentwood",
    "Antioch",
  ];

  //items = [];

  //No basic forloops in JSX, so we use mapping:
  //items.map((item) => <li>{item}</li>); //{} = render data dynamically //commented out but used below (cant comment within JSX in this way)

  //react components (this whole file) cannot return more than one element (ie returning h1 and ul is invalid), must wrap in a single element to do ret
  return (
    //wrapping in a div would work, encapsulating our 2 elements (h1,ul) within one big element. OR via React fragments, <> </>, which do not add an extra div to the DOM!
    <>
      <h1>Test List</h1> 
      {items.length === 0 ? <p>No items found!</p> :  null} {/*if true, rets mssg, if false, rets nothing for THIS RENDER ON THIS LINE*/}
      <ul className="list-group">  
        {items.map((item) => <li className ="list-group-item" key={item} onClick={(event)=> console.log("Clicked", item)}>{item}</li>)} {/*Each item in list must have a unique key(id), here we can simply use the str themselves since unique*/}
      </ul>
    </> //could also use <React.Fragment> </React.Fragment> but empty tags shown are equiv!
  );
}

export default ListGroup;
