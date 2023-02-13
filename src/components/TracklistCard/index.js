import {AiFillDelete} from 'react-icons/ai'
import './index.css'

const TrackListCard = props => {
  const {trackDetails, getDelTrackId} = props
  const {id, name, genre, imageUrl, duration} = trackDetails

  const onClickDelBtn = () => {
    getDelTrackId(id)
  }

  return (
    <li className="tracks-card">
      <img src={imageUrl} alt="track" className="track-img" />
      <div className="track-details-container">
        <p className="track-name">{name}</p>
        <p className="track-genre">{genre}</p>
      </div>
      <div className="duration-and-delete-button-container">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          type=" button"
          className="del-button"
          onClick={onClickDelBtn}
        >
          <AiFillDelete className="react-icon-delete" />
        </button>
      </div>
    </li>
  )
}
export default TrackListCard
