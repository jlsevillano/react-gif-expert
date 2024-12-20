import PropTypes from 'prop-types';

// export const GifItem = ({ title, url, id }) => {
export const GifItem = ({ title, url}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            {/* <p><small>({id})</small> {title}</p>
             */}
            <p>{title}</p>

        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
