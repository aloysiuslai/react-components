/* Hard Code Version
var GroceryListItem = () => (
  <div>
    <h1>Grocery List</h1>
      <ul>
        <li>Cucumbers</li>
        <li>Kale</li>
      </ul>
    <</div>
)


Nested Component Version
var GroceryListItem = () => (
  <div>
    <h1>Grocery List</h1>
      <ul>
        <Cucumbers/>
        <Kale/>
      </ul>
    </div>
)
var Cucumbers = () => (
  <li>Cucumbers</li>
)

var Kale = () => (
  <li>Kale</li>
)

ReactDOM.render(<GroceryListItem/>, document.getElementById("app"));


Refactored utilizing props

var onListItemClick = (event) => {
  console.log('I got clicked');
};

var GroceryListItem = (props) => (
  <ul>
      <li onClick={onListItemClick}>{props.item[0]}</li>
      <li>{props.item[1]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
      <h1>GroceryList</h1>
      <GroceryListItem item={["Cucumbers", "Kale"]}/>
  </div>
)

ReactDOM.render(<GroceryList/>, document.getElementById("app"));

*/
// ----------------------------------------------------

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <li>{this.props.item}</li>
//     );
//   }
// }

// var List = (props) => (
//   <ul>
//       {props.items.map((item) =>
//     <GroceryListItem item = {item}/>
//     )}
//   </ul>
// )


// var GroceryList = () => (
//   <div>
//     <h1> Grocery List</h1>
//     <ul>
//       <List items = {['Cucumbers', 'Kale']}/>
//     </ul>
//   </div>
// )

// ReactDOM.render(<GroceryList/>, document.getElementById("app"));


//<------------------------------------------------>


class GroceryListItem extends React.Component {

  constructor(props) {
    super (props)

  //object literal to store the sate of this component
    this.state = {
      hover: false
    }
  };

  //when this component is hover, set hover to: true
  onGroceryListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: (this.state.hover) ? 'bold' : ''
    }

    return (
      <li style={style}
        onMouseLeave={this.onGroceryListItemHover.bind(this)}
        onMouseEnter={this.onGroceryListItemHover.bind(this)}>
        { this.props.item }
      </li>
    )
  }

}

var List = (props) => (
  <ul>
    {props.items.map((item) =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

var GroceryList = () => (
  <div>
    <h2> Grocery List </h2>
   <List items = {['lettuce', 'cucumber']} />
  </div>
);

ReactDOM.render(<GroceryList/>, document.getElementById('app'));































