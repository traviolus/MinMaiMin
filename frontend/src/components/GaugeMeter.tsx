import React from "react";
import Gauge from "react-svg-gauge";
import Button from "@material-ui/core/Button";

function getHexColor(value: number) {
  let string = value.toString(16);
  return string.length === 1 ? "0" + string : string;
}

interface AppProps {}

interface AppState {
  value: number;
}

export default class GaugeMeter extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 100,
    };
  }
  render() {
    return (
      <div>
        <Gauge value={this.state.value} width={400} height={320} label=""/>
      </div>
    );
  }
}
