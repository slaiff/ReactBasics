function ListGroup() {
  const items = [
    "Concord",
    "Walnut Creek",
    "Pittsburg",
    "Brentwood",
    "Antioch",
  ];

  items.map((item) => <li>{item}</li>);

  //react comps cannot return more than one element (ie retting a h1 and ul is invalid), must wrap
  return (
    //wrapping in a div would work, encapsulating our 2 elements within one big element. Another way is React fragments, <> </>, which do not add an extra div to the DOM
    <>
      <h1>Test List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </> //could also use <React.Fragment> </React.Fragment> but the empty tags rep same thing!
  );
}

export default ListGroup;
