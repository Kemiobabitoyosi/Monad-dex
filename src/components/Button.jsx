import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick, className,  children}) => {
  return (
    <div>
        <button onClick={onClick} className={className}>{children}</button>
    </div>
  );
};

Button.propTypes = {
    onClick:PropTypes.func.isRequired,
    className:PropTypes.string,
    chilren:PropTypes.node.isRequired,
}

export default Button;