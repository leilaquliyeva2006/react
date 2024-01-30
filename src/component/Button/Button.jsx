function Button({children,OnClik}) {

    return(
  <button onClick={OnClik}>
    {children}
  </button>
    )
  
  }
  
  export default Button;