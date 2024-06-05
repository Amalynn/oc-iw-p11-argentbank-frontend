import PropTypes from 'prop-types';

export default function ContentAccountCard({
    title,
    amount,
    amountDescription,
}) {
    return (
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">${amount}</p>
            <p className="account-amount-description">{amountDescription}</p>
        </div>
    );
}

ContentAccountCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    amountDescription: PropTypes.string.isRequired,
};

// ContentAccountCard.defaultProps = {
//     title: '',
//     amount: '',
//     amountDescription: '',
// };
