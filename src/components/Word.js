import React from 'react';
//import rd3 from 'react-d3-library';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import scale from 'd3-scale';

// export default class Word extends React.Component {
//   render() {
//     return (
//       <header>
//          <div>
//             <div class="container" id="WordMap" tabindex="-1">
//               <div class="">
//                 <div class="col-lg-12">
//                   <div class="intro-text">
//                     <h1 class="name">WORD MAP GOES HERE</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </header>
//     );
//   }
// }

export default class Word extends React.Component {
  // constructor(trends) {
  //   super(trends);    // This binding is necessary to make `this` work in the callback
  // }

 render() {


  var json = {
    "Tenth": 1, "Nineth": 2, "Eighth": 3, "Seventh": 4, "Sixth": 5, "Fifth": 6, "Fourth": 7, "Third": 8, "Second": 9, "First": 10};
  
  const diameter = 700;
  const color = d3.scale.category20b();

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
            "font-size": "12px"
        });
  
  vis.enter().append('circle')
      .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      .attr('r', function(d) { return d.r; })
      .attr('class', function(d) { return d.className; })
      .style("fill", function(d) { return color(d.value); });

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
      }
      </div>
      )

  }
};