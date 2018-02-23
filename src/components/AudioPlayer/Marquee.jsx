
import React, { Component } from 'react';

import _ from 'lodash';


class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marquee: '',
      items: this.props.items || [],
      marqueeTimer: null,
      counter: 0,
      resetPosition: false
    };
    this.changeMarqueeI = this.changeMarqueeI.bind(this);
    this.changeMarqueeII = this.changeMarqueeII.bind(this);
  }

  render() {
    const { marquee } = this.state;
    const { timeToCross, color, pause = false } = this.props;

    const styling1 =  {
      margin: '0 auto',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    };

    const styling2 = {
      display: 'inline-block',
      paddingLeft: '100%',
      animation: this.state.resetPosition ?
        'none'
        :
        `marquee ${timeToCross}ms linear infinite ${pause ? 'running':'paused'}`,
      color
    };

    return (
      <section id="marquee">
        <this.props.Size style={styling1}><span style={styling2}>{ marquee }</span></this.props.Size>
      </section>
    );
  }

  componentDidMount(){
    const { isRandom = false, timeToChange } = this.props;

    let changeMarquee;
    if(isRandom){
      changeMarquee = setInterval(this.changeMarqueeI, timeToChange);
    }
    else{
      changeMarquee = setInterval(this.changeMarqueeII, timeToChange);
    }
    this.setState({ marqueeTimer: changeMarquee, marquee: this.props.items[0] });
  }

  componentWillReceiveProps(nextProps) {
    const { items: oldItems } = this.props;
    const { items: newItems, timeToChange } = nextProps;
    if (oldItems.length !== newItems.length) {
      this.resetPosition(newItems, timeToChange);
    }
    else {
      if (!_.isEqual([...oldItems].sort(), [...newItems].sort())) {
        this.resetPosition(newItems, timeToChange);
      }
    }
  }

  resetPosition = (items, change) => {
    this.setState({ items, resetPosition: true });
    clearInterval(this.state.marqueeTimer);
    setTimeout(
      () => this.setState({ marqueeTimer: setInterval(this.changeMarqueeII, change), resetPosition: false }),
      100);
  };

  changeMarqueeI(){
    const { items } = this.state;
    const randomIndex = (Math.random()*(items.length - 1)).toFixed(0);
    this.setState({ marquee: items[randomIndex] });
  }

  changeMarqueeII(){
    const { items } = this.state;
    this.setState({ marquee: items[this.state.counter] });
    this.setState({ counter: this.state.counter + 1 });
    if(this.state.counter > (items.length - 1)){
      this.setState({ counter: 0 });
    }
  }
}

export default Marquee;
