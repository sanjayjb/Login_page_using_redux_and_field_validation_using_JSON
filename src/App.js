import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import DashBoard from './Components/Dashboard';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {/* <Login /> */}
      {user.user ? <DashBoard />: <Login />}
    </div>
  );
}

export default App;
