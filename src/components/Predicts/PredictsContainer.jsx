import { connect } from "react-redux"
import Predicts from "./Predicts";

let mapStateToProps = (state) => ({
  predicts: state.weather.predicts,
})


export default connect(mapStateToProps, null)(Predicts)