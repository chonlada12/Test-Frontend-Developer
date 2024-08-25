import { Provider } from 'react-redux';
import { HashRouter, useRoutes } from 'react-router-dom';
import AppLanguageProvider from './provider/app-language';
import APP_ROUTES from './router';
import store from './store/store';

const AppRoute = () => {
  const appRoute = useRoutes(APP_ROUTES);
  return appRoute;
};

function App() {
  return (
    <HashRouter>
      <AppLanguageProvider>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </AppLanguageProvider>
    </HashRouter>
  );
}

export default App;
