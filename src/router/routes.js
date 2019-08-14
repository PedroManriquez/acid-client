import views from '../views/';

const { Weather, City } = views;

export const routes = [
  {
    path: '/',
    exact: true,
    component: Weather
  }, {
    path: '/cities',
    component: City
  }
];
