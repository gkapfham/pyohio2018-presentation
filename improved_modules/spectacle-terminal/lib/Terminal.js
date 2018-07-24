"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _TerminalStyle = require("./TerminalStyle");

var _TerminalStyle2 = _interopRequireDefault(_TerminalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terminal = function (_React$Component) {
  _inherits(Terminal, _React$Component);

  function Terminal(props) {
    _classCallCheck(this, Terminal);

    var _this = _possibleConstructorReturn(this, (Terminal.__proto__ || Object.getPrototypeOf(Terminal)).call(this, props));

    _this.toggleMaximize = function (e) {
      if (e.altKey && e.keyCode === 77) {
        _this["handle" + (_this.state.isMaximized ? "Minimize" : "Expand")]();
      }
    };

    _this.updateCurrentLine = function (e) {
      var currentLine = _this.state.currentLine;

      if (e.keyCode === 40) {
        currentLine = _this.goDown(currentLine);
      } else if (e.keyCode === 38) {
        currentLine = _this.goUp(currentLine);
      }
      _this.setState({
        currentLine: currentLine,
        isAutoScroll: currentLine.isAutoScroll
      });
    };

    _this.handleClose = function () {
      _this.setState({ isCollapsed: !_this.state.isCollapsed });
    };

    _this.handleMinimize = function () {
      _this.setState({ isMaximized: false });
    };

    _this.handleExpand = function () {
      _this.setState({ isMaximized: true });
      _this.terminalRef.closest(".spectacle-content").style.transform = "none";
      document.querySelector("button[data-radium]").closest("div").style.display = "none";
    };

    _this.state = {
      currentLine: {
        index: props.showFirstEntry ? 0 : null,
        iteration: null
      },
      isCollapsed: false,
      isMaximized: props.isMaximized,
      isAutoScroll: true
    };
    return _this;
  }

  _createClass(Terminal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.updateCurrentLine);
      document.addEventListener("keydown", this.toggleMaximize);
      this.terminalRef.closest(".spectacle-content").style.transform = "none";
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.mainRef) {
        if (this.state.isAutoScroll) {
          this.mainRef.scrollTop = this.mainRef.scrollHeight;
        } else if (this.state.currentLine.scrollTo) {
          this.mainRef.scrollTop = this.state.currentLine.scrollTo;
        }
      }
      this.terminalRef.closest(".spectacle-content").style.transform = "none";
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.updateCurrentLine);
      document.removeEventListener("keydown", this.toggleMaximize);
    }
  }, {
    key: "goDown",
    value: function goDown(line) {
      var output = this.props.output;

      if (line.index != null) {
        var newIndex = line.index < output.length - 1 ? line.index + 1 : line.index;
        var nextLine = line.iteration != null ? output[line.index] : output[newIndex];
        if (Array.isArray(nextLine)) {
          if (line.iteration != null) {
            line.iteration = line.iteration < nextLine.length - 1 ? ++line.iteration : null;
            if (line.iteration == null) {
              line.index = newIndex;
            }
          } else {
            line.index = newIndex;
            line.iteration = 0;
          }
          nextLine = line.iteration != null ? nextLine[line.iteration] : nextLine;
        } else {
          line.index = newIndex;
          line.iteration = null;
          nextLine = output[line.index];
        }
        line.isAutoScroll = nextLine.isAutoScroll != null ? nextLine.isAutoScroll : true;
        line.isSolo = nextLine.isSolo != null ? nextLine.isSolo : false;
        line.scrollTo = nextLine.scrollTo != null ? nextLine.scrollTo : null;
        line.note = nextLine.note;
      } else {
        line = { index: 0 };
        if (Array.isArray(output[line.index])) {
          line.iteration = 0;
        }
      }
      return line;
    }
  }, {
    key: "goUp",
    value: function goUp(line) {
      var _props = this.props,
          showFirstEntry = _props.showFirstEntry,
          output = _props.output;


      if (line.index > 0) {
        line.index--;
      } else if (line.index === 0) {
        line.index = showFirstEntry ? 0 : null;
      }
      var previousLine = output[line.index];
      if (previousLine) {
        line.isAutoScroll = previousLine.isAutoScroll != null ? previousLine.isAutoScroll : true;
        line.isSolo = previousLine.isSolo != null ? previousLine.isSolo : false;
        line.scrollTo = previousLine.scrollTo != null ? previousLine.scrollTo : null;
        line.note = previousLine.note;
      }

      return line;
    }
  }, {
    key: "renderLines",
    value: function renderLines() {
      var output = this.props.output;
      var currentLine = this.state.currentLine;


      if (!currentLine.isSolo) {
        return output.reduce(function (memo, line, index) {
          if (index <= currentLine.index && !line.isSolo || currentLine.index === 0 && index === 0) {
            if (Array.isArray(line)) {
              var iteration = currentLine.iteration != null && currentLine.index === index ? currentLine.iteration : line.length - 1;
              memo.push(_react2.default.createElement(
                "div",
                { key: index + "-" + iteration, className: "fragment" },
                line[iteration].output || line[iteration]
              ));
            } else {
              memo.push(_react2.default.createElement(
                "div",
                { key: index, className: "fragment" },
                line.output || line
              ));
            }
          }
          return memo;
        }, []);
      } else {
        var line = output[currentLine.index];
        if (currentLine.scrollTo) {
          this.mainRef.scrollTop = currentLine.scrollTo;
        } else {
          this.mainRef.scrollTop = 0;
        }
        return _react2.default.createElement(
          "div",
          { key: currentLine.index + "-clear", className: "fragment" },
          line.output || line
        );
      }
    }
  }, {
    key: "renderMain",
    value: function renderMain() {
      var _this2 = this;

      var output = this.props.output;
      var _state = this.state,
          isMaximized = _state.isMaximized,
          currentLine = _state.currentLine;

      return _react2.default.createElement(
        "section",
        {
          className: "Terminal-main",
          ref: function ref(elem) {
            _this2.mainRef = elem;
          },
          style: Object.assign({}, _TerminalStyle2.default.main, isMaximized ? _TerminalStyle2.default.mainMaximized : {})
        },
        currentLine.index != null && this.renderLines()
      );
    }
  }, {
    key: "renderNote",
    value: function renderNote() {
      var currentLine = this.state.currentLine;

      return _react2.default.createElement(
        "div",
        {
          className: "Terminal-note",
          style: {
            position: "absolute",
            top: "1vw",
            left: "15vw",
            right: "15vw",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            border: "solid 1px #303539"
          }
        },
        currentLine.note
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var title = this.props.title;
      var _state2 = this.state,
          isMaximized = _state2.isMaximized,
          isCollapsed = _state2.isCollapsed,
          currentLine = _state2.currentLine;


      return _react2.default.createElement(
        "div",
        {
          className: "Terminal",
          style: !isMaximized ? _TerminalStyle2.default.container : _TerminalStyle2.default.containerMaximized,
          ref: function ref(elem) {
            _this3.terminalRef = elem;
          }
        },
        _react2.default.createElement(
          "header",
          { style: _TerminalStyle2.default.header, className: "Terminal-header" },
          _react2.default.createElement(
            "nav",
            { style: _TerminalStyle2.default.nav },
            _react2.default.createElement("button", { onClick: this.handleClose, style: _extends({}, _TerminalStyle2.default.button, _TerminalStyle2.default.buttonClose) }),
            _react2.default.createElement("button", {
              onClick: this.handleMinimize,
              style: _extends({}, _TerminalStyle2.default.button, _TerminalStyle2.default.buttonMinimize)
            }),
            _react2.default.createElement("button", {
              onClick: this.handleExpand,
              style: _extends({}, _TerminalStyle2.default.button, _TerminalStyle2.default.buttonExpand)
            })
          ),
          _react2.default.createElement(
            "div",
            { style: _TerminalStyle2.default.title },
            title
          )
        ),
        !isCollapsed && this.renderMain(),
        currentLine.note && this.renderNote()
      );
    }
  }]);

  return Terminal;
}(_react2.default.Component);

exports.default = Terminal;


Terminal.propTypes = {
  output: _propTypes.array,
  showFirstEntry: _propTypes.bool,
  isMaximized: false
};