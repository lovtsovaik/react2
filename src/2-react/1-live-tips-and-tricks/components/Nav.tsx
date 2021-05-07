/* Core */
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/* Instruments */
import { icons } from '../theme/icons/nav';
import { Context } from '../lib/settingsContext';

export const Nav: React.FC = () => {
    const navigate = useNavigate();

    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    return (
        <nav className="nav">
            <h1 onClick={() => navigate('/')} title="Типсы и Триксы">
                T и T
            </h1>

            <NavLink to="/all-topics">
                <icons.Home />
                Все темы
            </NavLink>
            <NavLink to="/topic-by-tag">
                <icons.Tag />
                По тэгам
            </NavLink>
            <NavLink to="/publish">
                <icons.Publish />
                Опубликовать
            </NavLink>
            <a
                className={isSettingsOpen ? 'active' : ''}
                onClick={() => setSettingsOpen(true)}>
                <icons.Settings />
                Настройки
            </a>
            <NavLink to="/login">
                <icons.Bolt />
                Войти
            </NavLink>
            <NavLink to="/profile">
                <icons.Profile />
                Профиль
            </NavLink>
            <NavLink to="/profile">
                <icons.Logout />
                Выйти
            </NavLink>
        </nav>
    );
};
