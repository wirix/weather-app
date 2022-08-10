import { Formik } from "formik"
import styles from './Form.module.css'

const Form = (props) => {
  return (
    <Formik
      initialValues={{ city: '' }}
      onSubmit={values => {
        props.getMainDataByCity(values.city)
        props.getDataNextThreeHoursByCity(values.city)
        props.setEditMode(false)
      }}
    >
      {({ values, handleBlur, handleChange, handleSubmit, errors, touched, isValid, dirty }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input}>
            <input 
              name={'city'}
              autoFocus={true}
              value={values.city}
              onChange={handleChange}
              onBlur={() => props.setEditMode(false)}
              type={'text'} />
          </div>
          <button 
            className={styles.btn__send} type={'submit'} onMouseDown={handleSubmit} disabled={!dirty || !isValid}>
            <i className="ri-search-line"></i>
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Form