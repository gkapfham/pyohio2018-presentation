"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  container: {
    position: "relative",
    fontSize: "1.75vw",
    minWidth: "85vw",
    maxWidth: "85vw",
    left: "50%",
    transform: "translateX(-50%)"
  },
  containerMaximized: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    bottom: "5rem",
    left: "1rem",
    fontSize: "1.9vw"
  },
  header: {
    position: "relative",
    padding: "10px",
    backgroundColor: "#e0e0e0",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    boxShadow: "inset 0px -3px 10px 0px #e0e0e0"
  },
  nav: {
    display: "flex",
    textAlign: "left",
    height: "2vw",
    alignItems: "center"
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.75vw"
  },
  button: {
    border: "none",
    borderRadius: "50%",
    height: "1.5vw",
    width: "1.5vw",
    marginRight: "1vw"
  },
  buttonClose: {
    backgroundColor: "#e64a19"
  },
  buttonMinimize: {
    backgroundColor: "#616161"
  },
  buttonExpand: {
    backgroundColor: "#9e9e9e"
  },
  main: {
    padding: "15px",
    backgroundColor: "#212121",
    color: "#e0e0e0",
    height: "50vh",
    fontFamily: "monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    tabSize: "4",
    hyphens: "none",
    overflow: "auto"
  },
  mainMaximized: {
    height: "100%",
    maxHeight: "none"
  }
};
