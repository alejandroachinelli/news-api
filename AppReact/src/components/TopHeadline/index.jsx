import React, { useState, useEffect } from 'react'
import NewsCard from '../NewsCard';
import { Dropdown, Container, Pagination, Dimmer, Loader, List, Button, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, resetSearch } from "../../actions";

export default function TopHeadline() {
    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const dispatch = useDispatch();
    const country = useSelector((state) => state.news.country);
    const articles = useSelector((state) => state.news.topHeadline);
    const totalTopHeadline = useSelector((state) => state.news.totalTopHeadline);
    const loading = useSelector((state) => state.news.loading);
    const error = useSelector((state) => state.news.message);

    const handlePageChange = (e, { activePage }) => {
        setActivePage(activePage);
        dispatch(fetchNews(country, activePage, pageSize));
      };
    
      const handlePageSizeChange = (_, { value }) => {
        setPageSize(value);
        setActivePage(1);
      };

      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    useEffect(() => {
        dispatch(resetSearch());
        dispatch(fetchNews(country, 1, pageSize));
      }, [country, dispatch, pageSize]);

    return (
        <>
            {loading && 
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            }
            {error && 
                <Dimmer active>
                    {error}
                </Dimmer>
            }
            {articles &&
                    <>
                        <div style={{marginBottom: '24px'}}>
                            <Pagination
                                activePage={activePage}
                                onPageChange={handlePageChange}
                                totalPages={Math.ceil(totalTopHeadline / pageSize)}
                                boundaryRange={0}
                                ellipsisItem={null}
                                siblingRange={1}
                                size='mini'
                            />
                            <Dropdown
                                style={{marginLeft: '12px'}}
                                compact
                                selection
                                options={[
                                    { key: '10', text: '10', value: '10' },
                                    { key: '25', text: '25', value: '25' },
                                    { key: '50', text: '50', value: '50' },
                                    { key: '100', text: 'All', value: '100' },
                                ]}
                                defaultValue='10'
                                onChange={handlePageSizeChange}
                            />
                        </div>
                        <Container textAlign='center' style={{paddingBottom: '24px'}}>
                        <List celled>
                            {articles.map((news, index) => (
                                <NewsCard
                                key={index}
                                imageUrl={news.urlToImage}
                                header={news.title}
                                description={news.description}
                                date={news.publishedAt}
                                link={news.url}
                                />
                            ))}
                        </List>
                        </Container>
                    </>
                }
            <Button onClick={handleScrollToTop} style={{ position: 'fixed', bottom: 20, right: 20, borderRadius: '24px' }}>
                <Icon name='arrow up' style={{ margin: 'auto' }} />
            </Button>
        </>
    )
}
