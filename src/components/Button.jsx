import styles from './Button.module.css';

function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {/*Dynamically adding mutiple styles */}
      {children}
    </div>
  );
}

export default Button;
