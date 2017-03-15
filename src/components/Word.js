import React from 'react';
//import rd3 from 'react-d3-library';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

export default class Word extends React.Component {
  render() {
    return (
      <header>
         <div>
            <div class="container" id="WordMap" tabindex="-1">
              <div class="">
                <div class="col-lg-12">
                  <div class="intro-text">
                    <h1 class="name">WORD MAP GOES HERE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </header>
    );
  }
}

// export default class Word extends React.Component {
//  render() {
//     var balls = ReactFauxDOM.createElement('svg');

//     balls.style.setProperty('background-color', 'black');
//     balls.style.setProperty('color', 'black');
//     balls.style.setProperty('width', 800);
//     balls.style.setProperty('height', 500);
    
//     var svg = d3.select(balls)
//       .append("g")
//         .attr("transform",
//               "translate(" + 100+ "," + 100 + ")");
   
//   svg.append("circle")
//   .style("fill", "aqua")
//     .attr("cx", 300)
//     .attr("cy", 150)
//     .attr("r", 100)
    
//   svg.append("text")
//   .style("fill", "black")
//     .attr("x", 300)
//     .attr("y", 150)
//     .attr("dy", ".35em")
//     .attr("text-anchor", "middle")   
//     .text('COOL THING');
//     return (
//       <div> 
//         {balls.toReact()}
//       </div>
//     )
//   }
// }