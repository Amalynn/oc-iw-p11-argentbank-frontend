import PropTypes from 'prop-types';

export default function AccountCard({ children }) {
    return <section className="account">{children}</section>;
}

AccountCard.propTypes = {
    children: PropTypes.node,
};
