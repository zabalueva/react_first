import PropTypes from 'prop-types';

import styles from './Circle.module.scss';

function Circle(props) {
    const { positionTop } = props;
    const { positionLeft } = props;
    const colorArray = ['#f44336', '#e91e63', '#9c27b0',
        '#673ab7', '#3f51b5', '#2196f3',
        '#03a9f4', '#00bcd4', '#CDDC39']
    const style = {
        backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)],
        top: positionTop,
        left: positionLeft
    }

    return (
        <div className={styles.circle} style={style}>
        </div>
    )
}

Circle.propTypes = {
    positionTop: PropTypes.number,
    positionLeft: PropTypes.number
};

Circle.defaultProps = {
    positionTop: 0,
    positionLeft: 0
};

export default Circle;