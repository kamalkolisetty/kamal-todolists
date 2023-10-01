import React from 'react'
export const Footer = () => {
  const footerStyle = {
    position:"absolute",
    
  };


  return (
    <footer className="bg-dark text-light py-3 style={footerStyle} " >
        <p className="text-center"> 
          Copyright &copy;KamalWorks.com
        </p>
    </footer>
  )
}
