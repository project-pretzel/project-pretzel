class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Log />
      </div>
      <div>
        <Word />
      </div>
    )
  }
}

window.App = App;