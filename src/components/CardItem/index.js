// Write your code here.
import './index.css'

const CardItemProfile = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} technology-card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default CardItemProfile
