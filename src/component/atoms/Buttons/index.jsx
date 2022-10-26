import PropTypes from "prop-types";

export default function Button(props) {
  const { onClick, className, children, disabled } = props;
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: PropTypes.string,
  children: PropTypes.string,
};
