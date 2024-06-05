import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import Error404 from './pages/Error404';
import UserAccount from './pages/UserAccount';
import Layout from './components/Layout/Layout';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Layout>
                <Header />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user-account" element={<UserAccount />} />
                    <Route path="/error404" element={<Error404 />} />
                    <Route
                        path="*"
                        element={<Navigate to="/error404" replace />}
                    />
                </Routes>

                <Footer />
            </Layout>
        </Router>
    );
}
