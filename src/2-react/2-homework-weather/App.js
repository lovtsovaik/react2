import { Filter } from './components/Filter'
import { Header } from './components/Head'
import { CurrentWeather } from './components/CurrentWeather'
import { Days } from './components/Days'

export const App = () => {
    return (
        <main>
            <Filter/>
            <Header/>
            <CurrentWeather/>
            <Days/>
        </main>
    );
};
