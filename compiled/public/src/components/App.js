"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videoList: null,
      currentVid: null,
      videoHashTable: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.Pretzel[0].fakeData,
        React.createElement(Log, null),
        React.createElement(Word, null)
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aWRlb0xpc3QiLCJjdXJyZW50VmlkIiwidmlkZW9IYXNoVGFibGUiLCJQcmV0emVsIiwiZmFrZURhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxJQURBO0FBRVhDLGtCQUFZLElBRkQ7QUFHWEMsc0JBQWdCO0FBSEwsS0FBYjtBQUhpQjtBQVFsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0MsYUFBS0osS0FBTCxDQUFXSyxPQUFYLENBQW1CLENBQW5CLEVBQXNCQyxRQUR2QjtBQUVFLDRCQUFDLEdBQUQsT0FGRjtBQUdFLDRCQUFDLElBQUQ7QUFIRixPQURGO0FBT0Q7Ozs7RUFuQmVDLE1BQU1DLFM7O0FBc0J4QkMsT0FBT1YsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlb0xpc3Q6IG51bGwsXG4gICAgICBjdXJyZW50VmlkOiBudWxsLFxuICAgICAgdmlkZW9IYXNoVGFibGU6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICB7dGhpcy5wcm9wcy5QcmV0emVsWzBdLmZha2VEYXRhfVxuICAgICAgICA8TG9nIC8+XG4gICAgICAgIDxXb3JkIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19