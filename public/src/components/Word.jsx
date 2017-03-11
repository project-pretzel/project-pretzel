class Word extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div class="container" id="maincontent" tabindex="-1">
          <div class="row">
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