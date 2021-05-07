/* Core */
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

/* Components */
import { AllTopicsPage } from './pages/all-topics';
import { TopicByTagPage } from './pages/topic-by-tag';
import { PublishPage } from './pages/publish';
import { LoginPage } from './pages/login';
import { TipByIdPage } from './pages/:tip-by-id';
import { Settings } from './components';

export const App = () => {
    return (
        <>
            <Settings />

            <Routes>
                <Route path="/all-topics" element={<Outlet />}>
                    <Route path="/" element={<AllTopicsPage />} />
                    <Route path=":id" element={<TipByIdPage />} />
                </Route>

                <Route path="/topic-by-tag" element={<Outlet />}>
                    <Route path="/" element={<TopicByTagPage />} />
                    <Route path=":id" element={<TipByIdPage />} />
                </Route>

                <Route path="/publish" element={<PublishPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="*"
                    element={<Navigate to="/all-topics" replace />}
                />
            </Routes>
        </>
    );
};
