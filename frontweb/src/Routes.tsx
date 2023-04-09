import Navbar from 'Components/Navbar';
import Auth from 'pages/Auth';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
