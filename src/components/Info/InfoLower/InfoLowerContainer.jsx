import { connect } from "react-redux"
import { getAQI } from "../../../redux/info-selectors"
import InfoLower from "./InfoLower"

let mapStateToProps = (state) => ({
  aqiForecast: getAQI(state),
})

let InfoLowerContainer = connect(mapStateToProps, null)(InfoLower)

export default InfoLowerContainer