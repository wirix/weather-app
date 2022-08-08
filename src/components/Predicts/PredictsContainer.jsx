import { connect } from "react-redux"
import { getPredictsSelector } from "../../redux/weather-selectors";
import Predicts from "./Predicts";

const PredictsContainer = (props) => {
  return <Predicts {...props} />
}

let mapStateToProps = (state) => ({
  predicts: getPredictsSelector(state),
})

export default connect(mapStateToProps, null)(PredictsContainer)