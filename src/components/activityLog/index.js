import './index.css'
import Header from '../Header'

const ActivityLog = () => {
  const hi = 'hello'
  const data =
    localStorage.getItem('activity') === null
      ? []
      : JSON.parse(localStorage.getItem('activity'))
  console.log(data)
  return (
    <div className="log-div">
      <Header />
      this is activity log
    </div>
  )
}

export default ActivityLog
