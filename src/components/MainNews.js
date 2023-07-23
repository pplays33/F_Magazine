import { publicUrl } from '../utils/publicUrl';

import { Link } from 'react-router-dom';


function MainNews(){
    return (
        <>
            <section className="main-news">
                <div className="titel">
                    <h1> Football </h1>
                </div>
                
                <div className="img">
                    <img src={publicUrl('/football.png')} alt="titel-img" className="titel-img"/>
                </div>

                <div className="main-news-container">

                    <div className="item-news">
                        <div className="news-container">
                            <h2 className="titel-news">About transfer</h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG</p>
                        </div>
                        <div className="news-container">
                            <h2 className="titel-news">About transfer</h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG iaidfhaihdfidaoa y two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG ajifhsidhfahdfaofdhaoaf asidhahafhudhfhasdf adfudhfiafai</p>
                        </div>
                        <div className="news-container">
                            <h2 className="titel-news">About transfer</h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG ajifhsidhfahdfaofdhaoaf asidhahafhudhfhasdf adfudhfiafai</p>
                        </div>
                    </div>

                    <div className="item-news">

                        <div className="news-container">
                            <h2 className="titel-news"><Link to="/Article">About transfer</Link></h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG</p>
                        </div>
                        <div className="news-container">
                            <h2 className="titel-news">About transfer</h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG</p>
                        </div>
                        <div className="news-container">
                            <h2 className="titel-news">About transfer</h2>
                            <p className="news-main-data">today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG today two plaers in Liverpool hope about transfer to PSG</p>
                        </div>

                    </div>

                </div>

            </section>            
        </>
    );
}

export default MainNews;