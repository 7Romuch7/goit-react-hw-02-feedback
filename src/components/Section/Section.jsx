import PropTypes from 'prop-types';
import styles from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.counter}>
        <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
}

export default Section;