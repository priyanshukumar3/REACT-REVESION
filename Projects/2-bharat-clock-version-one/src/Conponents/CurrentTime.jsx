let CurrentTime = () => {

  let time =  new Date();
  return (
    <p className="lead">This is the current Time: {time.toLocaleTimeString()} - {" "} {time.toLocaleDateString()}</p>
    // <p>hi</p>
  );
}

export default CurrentTime;