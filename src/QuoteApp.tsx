import React from "react";
import "./App.css";

type QuoteProps = {
  quotes: string[];
};

type QuoteState = {
  currentIndex: number;
};

export default class QuoteApp extends React.Component<QuoteProps, QuoteState> {
  state: QuoteState = {
    currentIndex: 0,
  };

  getIndex = (): number => {
    const min: number = 0;
    const max: number = this.props.quotes.length - 1;
    return Math.floor(Math.random() * (max - min) + min);
  };

  getNextQuote = (): void =>
    this.setState((state) => ({ currentIndex: this.getIndex() }));

  render() {
    const quoteToDisplay = this.props.quotes[this.state.currentIndex];
    return (
      <div className="App">
        <header className="App-header">
          <h3>Master Yoda's Famous Lines</h3>
          <div>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*"
              width="150px"
              height="150px"
            />
          </div>
        </header>
        <div style={{ height: "5vh", padding: "1em", margin: "7em" }}>
          <h4>{quoteToDisplay}</h4>
        </div>
        <button onClick={this.getNextQuote}>The Force Push
       
        </button>
      </div>
    );
  }
}
