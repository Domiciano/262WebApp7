import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

function App(){
  const router = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/home', element: <HomePage /> },
  ]);

  return <RouterProvider router={router} />;

}

export default App;