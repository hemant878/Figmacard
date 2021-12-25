// import React from 'react'
import React from 'react';
import '../Css/Page.css'
import { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
// import Button from './Button';




// import Navs from "./Navs"

// const Nav = lazy(() => import('./Navs'));


function Data() {

    const [articles, setArticles] = useState([])





    useEffect(() => {

        fetch('http://127.0.0.1:8000/articles/', {

            'method': 'GET',

            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(resp => resp.json())
            .then(resp => setArticles(resp))
            .catch(error => console.log(error))



    }, [])



    return (
        <div>



            {articles.slice(0, 1).map(article => {
                return (


                    <div className='blog' key={article.id}>

                        <div>
                            <div className='card'>
                                <div className='image'>
                                    <img src={article.image} />
                                </div>
                                <div className='info'>
                                    <div className='head'>
                                        <h1 className='heading'>{article.name}</h1>
                                        <p><i class="fa fa-map-marker" style={{color: '#5BC2A8', marginRight:'3px'}}></i>{article.location}</p>
                                    </div>
                                    <div className='subhead' style={{color: '#5BC2A8'}}>
                                        <p>	<i class="fa fa-briefcase"></i></p>
                                        <p className='pp'>EXPERIENCE</p>
                                        <button style={{backgroundColor:'#5BC2A8'}}>2 year expt</button>
                                    </div>


                                    <div className='para'>
                                        <div className='icon'> JBM</div>
                                        <div className='pack'>
                                            <h2>{article.company}</h2>
                                            <h3>{article.title}</h3>
                                            <p>{article.date}</p>
                                            <div className='subpara'>{ReactHtmlParser(article.subtitle)}</div>
                                        </div>

                                    </div>

                                    <div className='para1'>
                                        <div className='icon'> </div>
                                        <div className='pack'>
                                            <h3 style={{fontSize:'14px',fontWeight:'900',color: '#5BC2A8'}}>EDUCATION</h3>
                                            <div className='subpara'>{ReactHtmlParser(article.education)}</div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>







                )
            })}

            {/* <Button/> */}

        </div>





    );
}

export default Data
