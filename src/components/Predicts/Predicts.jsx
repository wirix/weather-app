import styles from './Predicts.module.css'
import PredictsItemContainer from './PredictsItem/PredictsItemContainer';

const Predicts = (props) => {
  const random = () => {
    let randomKey = Math.round(Math.random() * 100000)
    return randomKey
  }

  return (
    <div className={styles.predicts}>
      {
        props.predicts.map(p => {
          return <PredictsItemContainer key={random()} predicts={p} />
        })
      }
    </div>
  )
}

export default Predicts