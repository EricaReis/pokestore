import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from 'data/store/store';
import { AppRoutes } from 'shared/routes/AppRoutes';
import GlobalStyles from 'shared/styles/GlobalStyles';
import { defaultTheme } from 'shared/styles/themes/default.theme';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
