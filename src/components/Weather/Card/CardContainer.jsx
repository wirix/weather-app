import { compose } from "redux"
import withAddNum from "../../../hoc/withAddNum"
import withArraysOfDate from "../../../hoc/withArraysOfDate"
import Card from "./Card"

const CardContainer = compose(withArraysOfDate, withAddNum)(Card)

export default CardContainer