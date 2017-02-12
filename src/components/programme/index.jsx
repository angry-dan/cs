import "./programme.tpl.php";
import "./index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {find} from "lodash";

class Buttons extends React.Component {
  render() {
    return <p className="btn-group" role="group">
      {this.props.programmes.map(programme =>
        <button
          key={programme.id}
          type="button"
          className={'btn btn-primary' + (programme.id == this.props.selected ? ' active' : '')}
          onClick={() => this.props.onChange(programme.id)}
        >
          {programme.label}
        </button>)
      }
    </p>
  }
}

class Calendar extends React.Component {
  render() {
    return <iframe
      src={"https://www.google.com/calendar/embed?src=" + this.props.calendar + "&showTitle=0&showTabs=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&ctz=Europe%2FLondon"}
      style={{borderWidth: 0}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.default,
      calendar: find(props.programmes, {id: props.default}).calendar
    };
  }

  onChange(selected) {
    this.setState({
      selected: selected,
      calendar: find(this.props.programmes, {id: selected}).calendar
    });
  }

  render() {
    return <div>
      <Buttons selected={this.state.selected} programmes={this.props.programmes} onChange={this.onChange.bind(this)}/>
      <Calendar calendar={this.state.calendar}/>
    </div>;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const programme = document.querySelector('[data-programme]')
  if (programme) {
    const config = JSON.parse(document.querySelector('[data-programme]').dataset.programme);
    ReactDOM.render(
      <Wrapper default="beavers" programmes={config}/>, programme);
  }
});
