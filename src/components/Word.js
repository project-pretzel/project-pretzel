import React from 'react';
//import rd3 from 'react-d3-library';
import d3 from 'd3';
import lodash from 'lodash';
import ReactFauxDOM from 'react-faux-dom';
import scale from 'd3-scale';
import trends from '../data/trends';

console.log(trends)


var counts = [];
for (var i = trends.length; i > 0; i--) {
  counts.push(i);
}


export default class Word extends React.Component {

 render() {
  var json = _.zipObject(trends, counts);
//json is object where key is trends name and the count determines size and order
  const diameter = 700;
  const color = d3.scale.category20b();
  const duration = 300;
  const delay = 0;

  const svg = ReactFauxDOM.createElement('svg')
    svg.style.setProperty('width', 700);
    svg.style.setProperty('background-color', 'white');
    svg.style.setProperty('height', 700);
  const svg1 = d3.select(svg).append('svg')
          .attr('width', diameter)
          .attr('height', diameter);

  const bubble = d3.layout.pack()
        //.sort(null)
        .size([diameter, diameter])
        .value(function(d) {return d.size;})
         .sort(function(a, b) {
         return -(a.value - b.value)
        })
        .padding(2);
        //between circles

  // generate data with calculated layout values
  const nodes = bubble.nodes(processData(json))
            .filter(function(d) { return !d.children; }); // filter out the outer bubble

  const vis = svg1.selectAll('circle')
          .data(nodes)
          .text('blah')
          .style({
            "fill":"white",
            "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
            "font-size": "12px"})
          .on("click", function(d) { return zoom(focus == d ? root : d); });
          ;
  vis.transition()
      .duration(duration)
      .delay(750)
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('r', function(d) { return d.r; })
      .style('opacity', 1); // force to 1, so they don't get stuck below 1 at enter()

  vis.enter().append('circle')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('r', function(d) { return d.r; })
      .attr('class', function(d) { return d.className; })
      .style("fill", function(d) { return color(d.value); })
      .transition()
      .duration(duration * 1.2)
      .style('opacity', 1);


  vis.enter().append('text')
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d.name; })
        .style({
            "fill":"white",
            "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
//  function drawBubbles(m) {


    // assign new data to existing DOM
    //var vis = svg.selectAll('circle')
    //  .data(nodes, function(d) { return d.name; });

    // enter data -> remove, so non-exist selections for upcoming data won't stay -> enter new data -> ...

    // To chain transitions,
    // create the transition on the updating elements before the entering elements
    // because enter.append merges entering elements into the update selection


    // update - this is created before enter.append. it only applies to updating nodes.


    // exit
    // vis.exit()
    //   .transition()
    //   .duration(duration + delay)
    //   .style('opacity', 0)
    //   .remove();
  //}


  // function getData() {
  //   var i = 0;
  //   pubnub.subscribe({
  //     channel: channel,
  //     callback: function(m) {
  //       //ah too much data! I just reduce it to 1/10!
  //       i++;
  //       if(i === 1 || i%10 === 0) {
  //         drawBubbles(m);
  //       }
  //     }
  //   });
  // }
  function processData(data) {
    const obj = data;
    const newDataSet = [];

    for(var prop in obj) {
      newDataSet.push({name: prop, className: prop.toLowerCase(), size: obj[prop]});
    }
    return {children: newDataSet};
  }

return(
      <div>
        {svg.toReact()}
      </div>
      )

  }
};
