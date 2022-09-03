import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
      console.log(user.email);
    }
  }, []);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>UMS -{user.email}</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
