import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';

// import landingpublic from './components/landingpublic';
import JobAvailable from './components/jobavailable';

const router = createBrowserRouter([
  {
    element: <NavbarComponent />,
    children:[
    {
      path: "/",
      element: <landingpublic />
    },
    {
      path: '/jobAvailable',
      element: <JobAvailable />
    },
    {
      path: '/imageComponent',
      element: <imageComponent />
    }

  ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;

