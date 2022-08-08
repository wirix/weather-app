const withArraysOfDate = (Component) => {
  const ComplitedComponent = (props) => {
    let arrOfMonths = ['Январь', 'февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    let arrOfDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    let newDate = new Date()
    let year = newDate.getFullYear()
    let month = newDate.getMonth()
    let date = newDate.getDate()
    let day = newDate.getDay()
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()

    return <Component 
      {...props}
      arrOfMonths={arrOfMonths} 
      arrOfDays={arrOfDays} 
      year={year} 
      month={month} 
      date={date} 
      day={day} 
      hours={hours} 
      minutes={minutes} 
    />
  }
  return ComplitedComponent;
}

export default withArraysOfDate