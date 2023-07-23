import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <footer className="footer">
                <div class="new-article">
                    <h2><Link to="/NewArticle" className='new-article'>create new article</Link></h2>
                    <h2>@2023</h2>
                </div>
            </footer>
        </>
    );
}

export default Footer;