import PropTypes from 'prop-types';

export default function HomepageCard({
    srcImage,
    altText,
    title,
    description,
}) {
    return (
        <div className="feature-item">
            <img src={srcImage} alt={altText} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

HomepageCard.propTypes = {
    srcImage: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
