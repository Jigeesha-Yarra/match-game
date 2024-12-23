import './index.css'

const MatchItem = props => {
    const {imageDetails,imageClick} = props
    const {thumbnailUrl,id} = imageDetails

    const onClickImage = () => {
        imageClick(thumbnailUrl)
    }
    
    return(
        <li>
            <button type='button' className="image-button" onClick={onClickImage}>
                <img src={thumbnailUrl} className="thumbnail-image" alt='thumbnail' />
            </button>
        </li>
    )
}
export default MatchItem;


