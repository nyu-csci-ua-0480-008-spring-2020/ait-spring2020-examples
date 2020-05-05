// kind of like require
// node has them behind a flag
// hooks... get access to a component's lifecycle
// useState
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Counter(props) {
  // init state
  // change state by using useState hook
  // some "state" is being initialized to 0
  // the variable count will hold the value of the state
  // setCount will be a function that changes that state
  function handleClick() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(0);
  return (
    <div onClick={handleClick} className="card">{count}</div>
  );

}



ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);


/*
// props <Component foo="bar" /> // component is given props, this.props.whatever
// state this.state.whatever // component "owns" state

// each card clickable
// sum of all cards... outside of cards
class App extends React.Component {
  constructor() {
    super();
    this.state = {cards: [ {val:99}, {val: 1}, {val: 3}, {val:2}]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    // copy first
    // (don't mutate original object and make copy instead) 
    const copy = this.state.cards.slice();

    // i comes in specifiying which object to increment
    copy[i].val = copy[i].val + 1;
    this.setState({cards: copy});
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (<Card key={i} handleClick={() => this.handleClick(i)} val={card.val} />);
    });
    const total = this.state.cards.reduce((acc, cur) => acc + cur.val, 0);
    return (
    <div>
      {cards} <SumCards total={total} />
    </div>
    );
  }
}

function SumCards(props) {
  return (
    <h1> = {props.total}</h1>
  );
}

class Card extends React.Component {
  render() {
    return (
      <div onClick={this.props.handleClick} className="card">{this.props.val}</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

*/




// creating a class that extends ReactComponent
// bundle of markup, functionality, data
// that knows how to render itself on screen
// reusable
// class based components
// functional components











/*
import App from './App';
import * as serviceWorker from './serviceWorker';
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
