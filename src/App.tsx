// Main navigation containing the LoggedIn and LoggedOut navigation
import Navigation from "./Navigation";
// Redux
import { store } from './store';
import { Provider } from 'react-redux';

// React Query
import { QueryClientProvider } from 'react-query';
import {QueryClient} from 'react-query';

export default function App() {

    const client = new QueryClient();

    return (
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Navigation />
        </QueryClientProvider>
      </Provider>
    );
}
