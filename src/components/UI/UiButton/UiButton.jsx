import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import cn from 'classnames';
import '../index.css'
const UiButton = ({
    text, 
    onClick, 
    disabled, 
    theme='dark',
    classes
}) => {
    return (
        <button
            onClick = {onClick}
            disabled = {disabled}
            className = {cn(styles.button, styles[theme], classes)}
        >
            {text}
        </button>
    )
}



UiButton.propTypes = {
    text: PropTypes.string, 
    onClick: PropTypes.func, 
    disabled: PropTypes.bool,
    dark: PropTypes.string,
    classes: PropTypes.string,
    
}


export default UiButton;