import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const HeritagePage = lazy(() => import('../pages/heritage/page'));
const ExpertisePage = lazy(() => import('../pages/expertise/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const CollectionsPage = lazy(() => import('../pages/collections/page'));
const CreationsUniquesPage = lazy(() => import('../pages/creations-uniques/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const AppointmentPage = lazy(() => import('../pages/appointment/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/heritage',
    element: <HeritagePage />
  },
  {
    path: '/expertise',
    element: <ExpertisePage />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/collections',
    element: <CollectionsPage />
  },
  {
    path: '/creations-uniques',
    element: <CreationsUniquesPage />
  },
  {
    path: '/galerie',
    element: <GalleryPage />
  },
  {
    path: '/rendez-vous',
    element: <AppointmentPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
