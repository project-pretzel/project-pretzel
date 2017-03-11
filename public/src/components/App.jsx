class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      videoList: null,
      currentVid: null,
      videoHashTable: null
    };
  }

  render() {
    return(
      <div>
        <Log />
        <Word />
      </div>
    );
  }
}

window.App = App;