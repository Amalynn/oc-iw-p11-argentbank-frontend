import PropTypes from 'prop-types';

export const BUTTON_TYPES = {
    DEFAULT: 'default',
    SUBMIT: 'submit',
};

export default function Button({ className, type, children }) {
    switch (type) {
        case BUTTON_TYPES.DEFAULT:
            return (
                <button type="button" className={className}>
                    {children}
                </button>
            );
        case BUTTON_TYPES.SUBMIT:
            return (
                <button type="submit" className={className}>
                    {children}
                </button>
            );
        default:
            return (
                <button type="button" className={className}>
                    {children}
                </button>
            );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};

// Button.defaultProps = {
//     type: BUTTON_TYPES.DEFAULT,
//     className: '',
//     children: '',
// };
