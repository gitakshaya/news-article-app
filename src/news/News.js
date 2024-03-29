import React, { useEffect, useState } from 'react';
import { Card, Col, Input, Row, Skeleton } from 'antd';
import { apiKey } from '..';
import axios from 'axios';
const { Search } = Input;
const { Meta } = Card;
const proxyUrl = ""
function News() {
    const [newsItems, setNewsItems] = useState([]);
    const [query, setQuery] = useState("india");
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        getNewsArticle();
    }, [query]);

    const getNewsArticle = () => {
        isLoading(true);
        axios
            .get(`https://saurav.tech/NewsAPI/everything/cnn.json?pageSize=20&q=${query}`,
             { 
            withCredentials:false })
            .then((response) => {
                const data = response.data;
                isLoading(false);
                if (data && data.articles) {
                    setNewsItems([...data.articles])
                }
            })
            .catch(error => {
                isLoading(false);
                console.log(error)
            });
    };
    return (
        <div className='news-wrap'>
           
               <Row  >
                    <Search
                        placeholder="input search text"
                        onSearch={(value, e) => setQuery(value)}
                        onChange={(e) => setQuery(e.target.value)}
                        className='query-area'
                        value={query}
                    />
                </Row>
                   {loading ? <Skeleton /> :
                   <>
                    <Row gutter={16} >
                        {newsItems && newsItems.length > 0 ? newsItems.filter(item => item.author != null).map((item,index) => (
                            <Col key={index} lg={8} md={8} sm={24}>
                                <Card
                                    className='news-card'
                                    cover={<img alt="news" src={item.urlToImage} />}
                                    >
                                    <Meta title={item.title} description={item.description} />
                                   <a href={item.url}>More</a>
                                </Card>
                            </Col>
                        )) : <div>
                            Enter Something to search
                        </div>}
                    </Row>
                </>}
        </div>
    );
}

export default News;
