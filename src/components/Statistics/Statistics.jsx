import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

function Statistics({good, neutral, bad, total, positiveFeedback}) {
    return <ul className={styles.counter}>
                <li className={styles.counterValue}>Good: {good}</li>
                <li className={styles.counterValue}>Neutral: {neutral}</li>
                <li className={styles.counterValue}>Bad: {bad}</li>
                <li className={styles.counterValue}>Total: {total}</li>
                <li className={styles.counterValue}>Positive feedback: {positiveFeedback}%</li>
            </ul>
}

Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positiveFeedback: PropTypes.number.isRequired
}

export default Statistics;