
import { Router, Switch } from 'react-router-dom'
// Thu vien giup chuyen huong trang
import {createBrowserHistory} from 'history'
import HomeTemplate from './Templates/HomeTemplates/HomeTemplate';
import ManageDataCovid19 from './pages/Home/ManageData';
import Loading from './Component/Loading/Loading';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history ={history}>
      <Loading/>
      <Switch>
        <HomeTemplate exact path="/" component={ManageDataCovid19}/>
        
      </Switch>
    </Router>

  );
}

export default App;
