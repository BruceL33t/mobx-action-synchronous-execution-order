import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import RootStore from "./store";

@observer
class App extends React.Component {
  render() {
    return (
      <ul>
        {this.props.store.sensors.values().map(sensor => {
          return <li>{JSON.stringify(sensor.queue.data)}</li>;
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <App store={new RootStore()} />,
  document.getElementById("root")
);
