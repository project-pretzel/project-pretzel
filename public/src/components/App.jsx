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
        <header >
          <Word />
        </header>
      </div>
    );
  }
}

window.App = App;

