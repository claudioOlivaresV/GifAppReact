import PropTypes from "prop-types";

export const GifItem = ({title, url}) => {
    console.log(title);
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
