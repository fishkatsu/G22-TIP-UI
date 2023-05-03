import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavbarComponent from './components/Navbar';


import LandingPublic from './pages/public/landingpublic';
import JobAvailable from './pages/public/jobavailable';
import ApplyJob from './pages/public/applyjob';
import Login from './pages/public/login';
import Footer from './components/footer';
// import './App.css';

const router = createBrowserRouter([
  {
    element: <NavbarComponent />,
    children:[
    {
      path: "/",
      element: <LandingPublic />
    },
    {
      path: '/jobAvailable',
      element: <JobAvailable />
    },
    {
      path: '/applyJob',
      element: <ApplyJob />
    },
    {
      path: '/login',
      element: <Login />
    },
  ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}



export default App;

