function MainButton({ children, onClick, type = 'button' }) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default MainButton
