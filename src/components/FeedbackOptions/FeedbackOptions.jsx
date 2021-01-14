import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';


function FeedbackOptions({onLeaveFeedback }) {
    
    return (<div className={styles.containerBtn}> 
        <button type="button" className={styles.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button type="button" className={styles.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" className={styles.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>)
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;