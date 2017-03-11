import rd3 from 'react-d3-library'
import d3 from 'd3'
import React from 'react'
import Faux from 'react-faux-dom'

class Word extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
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
    )
  }
}

window.Word = Word;
