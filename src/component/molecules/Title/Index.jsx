import PropTypes from 'prop-types';

export default function Title (props) {
    const {title} = props
    return (
        <>
        <h2 className="mb-4">{title}</h2>
        </>
    )
}

Title.propsTypes = {
    title : PropTypes.string
}

Title.defaultProps = {
    title : ""
}

