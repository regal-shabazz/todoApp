import React from 'react'

function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  }

  const footerContainerStyle = {
    paddingBlock: "20px",
    color: "white",
  }

  return (
    <footer style={footerStyle}>
      <div className='container'style={footerContainerStyle}>
        <small>&copy;2024 Regal Shabazz</small>
      </div>
    </footer>
  )
}

export default Footer