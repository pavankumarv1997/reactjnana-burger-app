import React from "react";
import Aux from "../../hoc/aux";
function Layout(props) {
  return (
    <Aux>
      <div>toolsbar,sidedrawer,backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
}

export default Layout;
