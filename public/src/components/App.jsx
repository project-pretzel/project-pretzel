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
        <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom affix-top">

          <Log />
        </nav>
        <header class="word">
          <Word />
        </header>
      </div>
    );
  }
}

window.App = App;

