import React, { useEffect } from 'react';
import { Header, Image, Container, Icon, Message } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, resetSearch } from "../../actions";
import Slider from 'react-slick';

const Carousel = () => {
    const dispatch = useDispatch();
    const country = useSelector((state) => state.news.country);
    const articles = useSelector((state) => state.news.topHeadline);

    useEffect(() => {
        dispatch(resetSearch());
        dispatch(fetchNews(country, 1, 5));
      }, [country, dispatch]);

      const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };

  return (
    <Container textAlign='center' text >
      <Header as='h3' block>
        Noticias destacadas del momento
      </Header>
      <Slider {...settings}>
        {articles.map((news, index)=> (
          <Container 
            key={index} 
            as='a'
            href={news.url}
            target='_blank'
          >
            {
              news.urlToImage ? (
                <Image 
                  src={news.urlToImage} 
                  fluid 
                  style={{borderRadius: '24px', width: '800px', height: '400px'}} 
                />
              ) : (
                <Icon name='image outline' size='massive' />
              )
            }
            <Header>{news.title}</Header>
          </Container>
        ))}
      </Slider>
      <Message info style={{marginTop: '104px'}}>
        <Message.Header>¡Bienvenido a nuestra página de noticias!</Message.Header>
        <p> 
          Aquí encontrarás las últimas noticias tanto nacionales como internacionales. 
          <br/>
          En la sección de <b>ultimas noticias</b>, podrás ver los principales titulares del día y filtrar por tu pais de interes. 
          <br/>
          En la sección de <b>buscar noticias</b> podrás encontrar noticias más específicas según tus intereses. 
        </p>
        <Message.Header>¡Explora nuestra página y mantente informado!</Message.Header>
      </Message>
    </Container>
  );
};

export default Carousel;