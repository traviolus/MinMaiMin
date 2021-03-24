import React from "react";
import Gauge from "react-svg-gauge";
import Button from "@material-ui/core/Button";

interface AppProps {}

interface AppState {
  value: number;
}

export default class GaugeMeter extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: 59,
    };
  }
  render() {
    const revertedValue = 100 - this.state.value;
    let r = Math.floor(revertedValue * 2.55);
    let g = Math.floor(255 - revertedValue * 2.55);
    let b = 0;
    let colorHex = "#" + this.getHexColor(r) + this.getHexColor(g) + this.getHexColor(b);

    return (
      <div>
        <Gauge
          value={this.state.value}
          width={400}
          height={320}
          color={colorHex}
          label="โอกาสฟ้องร้องสำเร็จ"
        />
      </div>
    );
  }
  private getHexColor(value: number): string {
    const string = value.toString(16);
    return string.length === 1 ? "0" + string : string;
  }
}
