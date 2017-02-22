import { Store } from 'redux';
import { MainLayout } from '../layouts/main-layout';
import HomeRoute from './home-container/index';
import NotFoundRoute from './not-found/index';
import CounterRoute from './counter/index';

export default (store: Store<any>) => ({
  childRoutes: [ {
    component: MainLayout,
    childRoutes: [
      HomeRoute(),
      CounterRoute(store),
      NotFoundRoute(),
    ],
  } ],
});
