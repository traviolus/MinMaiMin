import React from "react";
import GaugeMeter from "./GaugeMeter";
import ResultButtons from "./ResultButtons";

interface AppProps {}

interface AppState {
  value: number;
}
export default class ResultCard extends React.Component<AppProps, AppState> {

  
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <GaugeMeter />
        <ResultButtons />
      </div>
    );
  }
}
