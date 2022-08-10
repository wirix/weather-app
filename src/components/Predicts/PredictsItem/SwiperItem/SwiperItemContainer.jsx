import { compose } from "redux";
import withRouter from "../../../../hoc/withRouter";
import SwiperItem from "./SwiperItem";

let SwiperItemContainer = compose(withRouter)(SwiperItem)

export default SwiperItemContainer