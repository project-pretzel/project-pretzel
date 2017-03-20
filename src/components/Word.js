import React from 'react';
//import rd3 from 'react-d3-library';
import d3 from 'd3';
import lodash from 'lodash';
import ReactFauxDOM from 'react-faux-dom';
import scale from 'd3-scale';
import {browserHistory} from 'react-router';

var counts = [];
var topic= '';
//This is breaking the code for some reason.  The error is:
/****

/home/nathan/hackreactor/project-pretzel/src/components/Word.js:45
for (var i = _trends2.default.length + 10; i > 10; i--) {                             ^

TypeError: Cannot read property 'length' of undefined at Object.<anonymous>
(/home/nathan/hackreactor/project-pretzel/src/components/Word.js:11:14)
*****/
/*for (var i = trends.length+10; i > 10; i--) {
  counts.push(i);
}*/

for (var i = 30; i > 10; i--) {
  counts.push(i);
}

//TEMP FIX

export default class Word extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      trends: []
    };
    fetch('http://127.0.0.1:3000/trends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(function(resp){
      return resp.json();
    })
    .catch(function(err){
      console.log("error handlclick post", err)
    })
    .then(trends => {
      this.setState({trends: trends.united_states});
      console.log('Word.js @ line 53', this.state.trends);
      this.renderCircles();
    })
  }

  getInitialState() {
    return {
      mouseOver: false
    };
  };

  renderCircles() {
    var mouseOver = this.state;
  //var self = this;
  var json = _.zipObject(this.state.trends, counts);
//json is object where key is trends name and the count determines the inverse of size and order
  const diameter = 650;
  const color2 = d3.scale.category20c();
  const color = d3.scale.category20b();
  const duration = 300;
  const delay = 0;

  const svg = ReactFauxDOM.createElement('svg')
    svg.style.setProperty('width', 700);
    svg.style.setProperty('background-color', 'white');
    svg.style.setProperty('height', 700);

  const svg1 = d3.select(svg).append('svg')
        .attr('width', diameter)
        .attr('height', diameter)

  const bubble = d3.layout.pack()
        //.sort(null)
        .size([diameter, diameter])
        .value(function(d) {return d.size;})
        .sort(function(a, b) {
         return -(a.value - b.value)
        })
        .padding(2);

  // generate data with calculated layout values
  const nodes = bubble.nodes(processData(json))
        .filter(function(d) { return !d.children; }); // filter out the outer bubble

  const vis = svg1.selectAll('circle')
        .data(nodes)

  function handleClick(d) {
    topic = d.name;

    browserHistory.push(`/chat/${topic}`);
  }

  vis.enter().append('circle')
        .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
        .attr('r', function(d) { return d.r; })
     //   .attr('r', (d) => mouseOver ? (d.r)*2 : d.r)
        .attr('class', function(d) { return d.className; })
 //     .attr('fill', (d) => mouseOver ? color2(d.value) : color(d.value))
        .attr('fill', (d) => color(d.value))
        .on('click', (d) => {
          handleClick(d)
        });
        // .on('mouseover', (d) => {
        //   this.setState({mouseOver: true});
        //   console.log(d.name);
        // })
        // .on('mouseout', (d) => {
        //   this.setState({mouseOver: false});
        //   console.log(d.name);
        // });

  vis.enter().append('text')
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d.name; })
        .style({
            "fill":"white",
            "font-family":"Oswald, sans-serif",
            "font-size": "16px",
            "width": "20px",
            "word-wrap": "break-word"
        })
        .on('click', (d) => {
          handleClick(d)
        });

  function processData(data) {
    const obj = data;
    const newDataSet = [];

    for(var prop in obj) {
      newDataSet.push({name: prop.toUpperCase(), className: prop.toLowerCase(), size: obj[prop]});
    }
    return {children: newDataSet};
  }
  return svg;
  }

 render() {
  var svg = this.renderCircles();
  return(
      <div>
        {svg.toReact()}
      </div>
      )
   };

};
