import PropTypes from 'prop-types';
import styles from './UiLoading.module.css';
import loaderYellow from './img/loader-yellow.svg';
import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-bllue.svg';
import { useState, useEffect } from 'react';
import cn from 'classnames'

const UiLoading = ({theme = 'yellow', isShadow = true, classes}) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  useEffect(()=> {
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'yellow': setLoaderIcon(loaderYellow); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
      default:setLoaderIcon(loaderBlue);
    }
  }, [])
  return(
   <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loaderIcon}/>
  )
}



UiLoading.propTypes = {
        theme: PropTypes.string,
        isShadow: PropTypes.bool, 
        classes: PropTypes.string
}


export default UiLoading;