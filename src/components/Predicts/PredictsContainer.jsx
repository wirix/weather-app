import { connect } from "react-redux"
import Preloader from "../Preloader/Preloader";
import Predicts from "./Predicts";

const PredictsContainer = (props) => {
  debugger
  return (
    <>
      {
        (props.predicts === undefined)
        ? <Preloader />
        : <Predicts {...props} />
      }
    </>
  )
}

let mapStateToProps = (state) => ({
  predicts: state.weather.predicts,
})

export default connect(mapStateToProps, null)(PredictsContainer)