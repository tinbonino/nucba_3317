import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Validate from '../pages/Validate/Validate';
import Issue from '../pages/Issue/Issue';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/validate' element={<Validate />} />
      <Route path='/issue' element={<Issue />} />
      <Route path='*' element={<PageNotFound />} />
    </ReactDomRoutes>
  );
}

export default Routes;
