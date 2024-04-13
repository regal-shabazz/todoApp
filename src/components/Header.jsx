import React from "react";

function Header() {
  const headerContainerStyle = {
    color: "white",
    paddingBlock: "20px",
  };

  return (
    <header >
      <div className="container" style={headerContainerStyle}>
        <h1>To-Do App</h1>
      </div>
    </header>
  );
}

export default Header;
