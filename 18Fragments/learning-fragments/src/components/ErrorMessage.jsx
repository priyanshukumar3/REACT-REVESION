const ErrorMessage = ({items}) => {


  return (
    <>{(items.length === 0) ? <h3>Hi, I am Hungry</h3> : null }</>
  )
}

export default ErrorMessage;