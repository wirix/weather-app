import { connect } from "react-redux"
import PredictsItem from "./PredictsItem";

let mapStateToProps = (state) => ({
  icons: state.weather.icons,
})

let PredictItemContainer = connect(mapStateToProps, null)(PredictsItem)

export default PredictItemContainer