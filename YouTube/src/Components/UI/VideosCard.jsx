import "./VideosCard.css"

const VideosCard = (props) => {

    const classes = "videoCard " + props.className

    return (
        <div className = {classes}>
            {props.children}
        </div>
    )
}

export default VideosCard;