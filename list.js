var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = ReactDOM.createRoot(document.getElementById('list-wrap'));

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      name: '',
      tasks: [],
      selected: {}
    };
    return _this;
  }

  _createClass(List, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        name: event.target.value,
        tasks: this.state.tasks
      });
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate() {
      if (this.state.name != '') {
        this.setState({
          name: '',
          tasks: [].concat(_toConsumableArray(this.state.tasks), [this.state.name])
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'user-input' },
          React.createElement(
            'button',
            { className: 'add', onClick: this.handleUpdate.bind(this) },
            '+'
          ),
          React.createElement(
            'div',
            { className: 'list' },
            React.createElement('input', { id: 'userText', type: 'text', placeholder: 'Enter Task', onChange: this.handleChange.bind(this), value: this.state.input })
          )
        ),
        React.createElement(
          'ul',
          null,
          this.state.tasks.map(function (x, i) {
            return React.createElement(
              'li',
              { key: i },
              x
            );
          })
        )
      );
    }
  }]);

  return List;
}(React.Component);

root.render(React.createElement(List, null));