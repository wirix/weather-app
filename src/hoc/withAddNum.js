const withAddNum = (Component) => {
  const ComplitedComponent = (props) => {
    const addNum = (num) => {
      if (num >= 10) {
        return num
      } else {
        return `0${num}`
      }
    }

    return <Component {...props} addNum={addNum}/>
  }
  return ComplitedComponent;
}

export default withAddNum