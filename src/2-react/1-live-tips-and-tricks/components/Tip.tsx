import { icons } from '../theme/icons/nav';

const TagIcon = icons.Search

export const Tip = () => {
    return (

        <article key={1}>
            <header>
                <TagIcon/> <h1>Заголовок</h1>
            </header>

            <main>
                <time>
                    <TagIcon/>

                    <div>
                        <span>01.01.2021</span>
                        <span>Author</span>
                    </div>
                </time>

                <h2>Заголовок</h2>
                <p>Text</p>
            </main>

            <footer>
                <p>&nbsp;Читать полностью &rarr;</p>
            </footer>
        </article>
    );
}
