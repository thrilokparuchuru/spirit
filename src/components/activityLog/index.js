import './index.css'
import Header from '../Header'

const ActivityLog = () => {
  const data =
    localStorage.getItem('activity') === null
      ? []
      : JSON.parse(localStorage.getItem('activity'))
  return (
    <div className="log-div">
      <Header />
      <h1 className="head">Recent Activity</h1>
      <ul className="log-list">
        <div className="headings">
          <p>DATE</p>
          <p className="time">TIME</p>
          <p>OPERATION</p>
        </div>
        {data !== [] &&
          data.map(each => {
            const now = new Date(each.time)
            const date = now.toLocaleDateString('en-GB')
            const time = now.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
            })

            return (
              <div className="li-item">
                <p>{date}</p>
                <p>{time}</p>
                <p>{each.result}</p>
              </div>
            )
          })}
      </ul>
    </div>
  )
}

export default ActivityLog
