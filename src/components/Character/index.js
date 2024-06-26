import './index.css'

const Characters = props => {
  const {Details} = props
  const {name, count} = Details

  return (
    <li className="list">
      <p className="count-charecter">
        {name}:{count}
      </p>
    </li>
  )
}

export default Characters
