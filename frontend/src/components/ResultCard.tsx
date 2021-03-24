import React from "react";
import Gauge from "react-svg-gauge";

function getHexColor(value: number) {
  let string = value.toString(16);
  return string.length === 1 ? "0" + string : string;
}

interface AppProps {}

interface AppState {
  value: number;
}

export default class ResultCard extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  render() {
    return (
      <div>
        <Gauge value={this.state.value} width={400} height={320} label="This is my Gauge" />
      </div>
    );
  }
}
