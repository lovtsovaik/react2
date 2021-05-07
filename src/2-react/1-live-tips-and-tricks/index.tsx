/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { configure } from 'mobx';

configure({ enforceActions: 'never' });

/* Components */
import { App } from './App';

/* Instruments */
import './theme/main.scss';
import { queryClient } from './lib/react-query';
import { SettingsProvider } from './lib/settingsContext';

render(
    <QueryClientProvider client={queryClient}>
        <SettingsProvider>
            <Router>
                <App />
            </Router>
        </SettingsProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById('root'),
);

// import './_examples';
