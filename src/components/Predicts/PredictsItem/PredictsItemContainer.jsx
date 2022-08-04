import React from "react";
import { connect } from "react-redux"
import PredictsItem from "./PredictsItem";
import { getIcon } from '../../../redux/weather-reducer'
import Preloader from "../../Preloader/Preloader";

// class PredictItemContainer extends React.Component {
//   componentDidMount() {
//     for (let i = 0; i < this.props.predicts.length; i++) {
//       this.props.getIcon(this.props.predicts[i].weather[0].icon, this.props.predicts[i].weather[0].id)
//     }
//   }

//   render() {
//     return (
//       <>
//         {
//           (this.props.icons.length !== 0) ? <PredictsItem {...this.props} /> : <Preloader />
//         }
//       </>
//     )
//   }
// }






let mapStateToProps = (state) => ({
  icons: state.weather.icons
})

let PredictItemContainer = connect(mapStateToProps, null)(PredictsItem)

export default PredictItemContainer