import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header/Header';
import styles  from './App.module.css'


const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

