/**
 *
 * Asynchronously loads the component for FixedNavbar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
