import PropTypes from 'prop-types';

export default function AccountCard({ title, amount, amountDescription }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">
                    {amountDescription}
                </p>
            </div>
        </section>
    );
}

AccountCard.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    amountDescription: PropTypes.string.isRequired,
};
