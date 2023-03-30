import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import JobsInfo from './pages/JobsInfo';
import AppliedJobs from './pages/AppliedJobs';
import PostJobs from './pages/PostJobs';
import Profile from './pages/Profile';
import HashLoader from "react-spinners/HashLoader";
import { getAllJobs } from './redux/actions/jobActions';
import Login from './pages/Login';
import Register from './pages/Register';
import PostedJobs from './pages/PostedJobs';
import EditJob from './pages/EditJob';
import ProtectedRoute from './components/ProtectedRoute';
import { getAllUsers } from './redux/actions/userActions';
import UserInfo from './pages/UserInfo';
import MockInter from './pages/MockInter';
import Room from './pages/Room';

function App() {
  const { loader } = useSelector(state => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers())
  }, [dispatch]);

  return (

    <div className="App">
      {loader && (
        <div className="sweet-loading">
          <HashLoader color={"#070054"} size={80} />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
         
          <Route path=""  exact element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/postjobs" exact element={<PostJobs />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/jobs/:id" exact element={<JobsInfo />} />
            <Route path="/posted" exact element={<PostedJobs />} />
            <Route path="/editjob/:id" exact element={<EditJob />} />
            <Route path="/appliedjobs" exact element={<AppliedJobs />} />
            <Route path="/mockinter" element={<MockInter />} />
            <Route path="/room/:roomID" element={<Room />} />
            <Route path="/users/:id" exact element={<UserInfo/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

