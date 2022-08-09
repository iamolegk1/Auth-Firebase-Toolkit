import reactDom from "react-dom";

const Portal = ({ portalName = "modal", children }) =>
  reactDom.createPortal(children, document.getElementById(portalName));

export default Portal;
