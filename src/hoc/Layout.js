import React from "react";

const Layout = (props) => {
  return (
    <div className="container-fluid" style={{background: "red"}}>
      {props.children}
    </div>
  );
};

export default Layout;
