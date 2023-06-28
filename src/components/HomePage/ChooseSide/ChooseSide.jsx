import PropTypes, { element } from 'prop-types';
import styles from './ChooseSide.module.css';
import cn from 'classnames';
import imgObi from './img/ObiWan.jpeg';
import imgDart from './img/darth.jpeg';
import imgFalcon from './img/falcon.jpeg';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '../../../context/ThemeProvider';

const ChooseSideItem = ({theme, text, img, classes}) => {
  const isTheme = useTheme();
  return (
    <div  onClick={()=> isTheme.change(theme)} className={cn(styles.item, classes)}>
    <span className={styles.item__header}>{text}</span>
    <img className={styles.item__img} src={img} alt={text} />
  </div>
  )
}
  


ChooseSideItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string, 
  classes: PropTypes.string
}


const ChooseSide = () => {

  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgObi, 
      classes: styles.item__light
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDart,
      classes: styles.item__dark
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item__neitral
    }
  ]

  return(
    <div className={styles.container}>
        {elements.map((element, index) => (
          <ChooseSideItem
            key={index}
            theme={element.theme}
            text={element.text}
            img={element.img}
            classes={element.classes}
          />
        ))} 
    </div>
  )
}
  




ChooseSide.propTypes = {
        text: PropTypes.func
}


export default ChooseSide;