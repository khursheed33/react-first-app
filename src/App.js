import classes from './App.css';
import Authentication from './components/Authentication/Authentication';
import Header from './core/components/Header/Header'
function App() {
  return (
    <div className={classes.App}>
     <Header> Welcome to First App</Header>
    <Authentication />
    </div>
  );
}

export default App;
