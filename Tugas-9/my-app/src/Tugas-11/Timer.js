import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: new Date(),
      starting: 100,
      tampil: true
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.timeStart(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  currentTime() {
    this.setState({
      time: new Date() 
    });
  }
  timeStart() {
    this.setState({
      starting: this.state.starting - 1,
    });
  }
  componentDidUpdate() {
    if (this.state.starting === 0 && this.state.tampil) {
      this.componentWillUnmount();
      this.setState({
        tampil: false,
      });
    }
  }
  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <>
        {this.state.tampil === true ? (
          <div>
            <span style={{ display: 'flex' }}>
              <h1 style={{ marginLeft: '25px' }}>sekarang jam: {this.state.time.toLocaleTimeString()}</h1>
              <h1 style={{ marginLeft: '25px' }}>hitung mundur: {this.state.starting} </h1>
            </span>
          </div>
        ) : null}
      </>
    );
  }
}


  

export default Timer