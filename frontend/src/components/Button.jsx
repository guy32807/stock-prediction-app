const Button = ({text, buttonColor}) => {
  return (
    <>
        <a className={`btn ${buttonColor}`} href="">{text}</a>
    </>
  )
}
export default Button