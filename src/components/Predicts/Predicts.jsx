import styles from './Predicts.module.css'
import Preloader from '../Preloader/Preloader';
import PredictsItemContainer from './PredictsItem/PredictsItemContainer';

const Predicts = (props) => {
  if (props.predicts === null) {
    return <Preloader />
  }
  let sortedPredicts = []
  for (let i = 0; i < (props.predicts.length / 8); i++) {
    sortedPredicts = [...sortedPredicts, props.predicts.filter(p => new Date().getDate() + i === new Date(p.dt_txt).getDate())]
  }
  let arrForKeys = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className={styles.predicts}>
      {
        sortedPredicts.map(s => (
          <>
            <PredictsItemContainer key={arrForKeys[new Date(s[0].dt_txt).getDay()]} predicts={s} />
          </>
        ))
      }
    </div>
  )
}

export default Predicts