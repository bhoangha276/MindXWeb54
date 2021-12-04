import { Component } from 'react';
import Header from './components/Header'
import ColorPicker from './components/ColorPicker/'
import QuoteBox from './components/QuoteBox'
import './App.css'

const colors = [
  "cornflowerblue",
  "blueviolet",
  "indianred",
  "deeppink",
  "forestgreen",
  "red",
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        activeColor: colors[0]
    }
}

handleActiveColor = (newColor) => {
    this.setState({
        activeColor: newColor
    })
}

  render() {
    const { activeColor } = this.state;

    return (
      <div className="App" style={{ backgroundColor:activeColor }}>
        <div className="Header-box">
          <Header title="Ramdom quote machine!" />
        </div>

        <div className="Quote-wrapper">
          <QuoteBox activeColor={activeColor}/>
        </div>

        <div className="ColorPicker-box">
          <ColorPicker 
            colors={colors} 
            activeColor={activeColor}
            handleActiveColor={this.handleActiveColor}
            />
        </div>
      </div>
    );
  }
}

export default App;
