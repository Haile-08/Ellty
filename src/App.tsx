import './App.css';
import AppProvider from './providers/app';
import PublicRoutes from './routes/public';

function App() {
    return (
        <AppProvider>
            <PublicRoutes/>
        </AppProvider>
    );
}

export default App;
