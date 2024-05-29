import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using React Router

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <img src="https://i.ibb.co/QYMWwcf/404-error-with-landscape-concept-illustration-114360-7888.jpg" alt="404 Error" style={styles.image} />
      <h1 style={styles.title}>Oops! Page Not Found</h1>
      <p style={styles.subtitle}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/" style={styles.button}>Go back to home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  image: {
    width: '50%',
    maxWidth: '400px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1rem',
    maxWidth: '80%',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'black',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '50px',
    fontSize: '1.5rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  }
};

export default ErrorPage;
