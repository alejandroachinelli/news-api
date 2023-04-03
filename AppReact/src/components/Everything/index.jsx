import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNews } from "../../actions";
import {
  Form,
  Button,
  Dropdown,
  Pagination,
  List,
  Container,
  Dimmer,
  Loader,
  Message,
  Icon
} from "semantic-ui-react";
import useLanguage from "../../hooks/useLanguage";
import NewsCard from "../NewsCard";

const Everything = () => {
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [language, setLanguage] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [errorInput, setErrorInput] = useState(false);
  const [quantityElement, setQuantityElement] = useState(0);

  const handleQueryChange = (e) => setQuery(e.target.value);

  const handleStartDateChange = (e) => setDateFrom(e.target.value);

  const handleEndDateChange = (e) => setDateTo(e.target.value);

  const handleLanguageChange = (e, { value }) => setLanguage(value.toUpperCase());

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
    console.log(activePage);
    dispatch(searchNews(query, dateFrom, dateTo, language, activePage, pageSize));
  };

  const handlePageSizeChange = (_, { value }) => {
    setPageSize(value);
    setActivePage(1);
    dispatch(searchNews(query, dateFrom, dateTo, language, 1, value));
  };

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const totalArticles = useSelector((state) => state.news.totalArticles);
  const loading = useSelector((state) => state.news.loading);
  const error = useSelector((state) => state.news.message);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if(totalArticles > 100){
      setQuantityElement(100);
    }else{
      setQuantityElement(totalArticles);
    }
  }, [totalArticles])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.length === 0 || language === null){
      setErrorInput(true);
    }else{
      setErrorInput(false);
      setActivePage(1);
      dispatch(searchNews(query, dateFrom, dateTo, language, 1, pageSize));
    }
  };

  const allLanguage = useLanguage();

  return (
    <Container textAlign='center' style={{paddingBottom: '24px'}}>
      <Form onSubmit={handleSubmit} style={{display: 'inline-block'}}>
        <Form.Group>
          <Form.Field required>
            <label>Palabra Clave</label>
            <Form.Input
              placeholder="Palabra Clave"
              value={query}
              onChange={handleQueryChange}
              error={errorInput}
            />
          </Form.Field>
          <Form.Field>
            <label>Fecha Desde</label>
            <Form.Input
              type="date"
              placeholder="Fecha Desde"
              value={dateFrom}
              onChange={handleStartDateChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Fecha Hasta</label>
            <Form.Input
              type="date"
              placeholder="Fecha Hasta"
              value={dateTo}
              onChange={handleEndDateChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Lenguaje</label>
            <Dropdown
              placeholder="Lenguaje"
              selection
              options={allLanguage}
              onChange={handleLanguageChange}
              error={errorInput}
            />
          </Form.Field>
          <Form.Field style={{marginTop:'24px'}}>
            <Button type="submit">Buscar</Button>
          </Form.Field>
        </Form.Group>
      </Form>
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
            {(totalArticles !== 0) ? (
                <>
                  <div style={{marginTop: '24px'}}>
                    <Pagination
                      activePage={activePage}
                      onPageChange={handlePageChange}
                      totalPages={Math.ceil(quantityElement / pageSize)}
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
                  <Button onClick={handleScrollToTop} style={{ position: 'fixed', bottom: 20, right: 20, borderRadius: '24px' }}>
                      <Icon name='arrow up' style={{ margin: 'auto' }} />
                  </Button>
                </>
              ) : (
                <Message warning>
                  <Message.Header>Ingrese opciones para comenzar a buscar noticias.</Message.Header>
                  <p>Recuerde que algunos campos son obligatorios.</p>
                </Message>
              )
            }
    </Container>
  );
};

export default Everything;