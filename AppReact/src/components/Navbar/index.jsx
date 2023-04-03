import React, { useState } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';
import { setCountry } from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

function NavigationBar() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  

  const countries = useCountries();

  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleChange = (e, {value}) => {
    dispatch(setCountry(value));
  };

  return (
    <Menu fixed="top" inverted>
        <Menu.Item
          name="Inicio"
          as={Link}
          to="/"
          active={activeItem === 'Inicio'}
          onClick={handleItemClick}
        >
        <Icon name='home' />
        Inicio
        </Menu.Item>
        <Menu.Item
          name="Ultimas Noticias"
          as={Link}
          to="/api/news/top-headline"
          active={activeItem === "Ultimas Noticias"}
          onClick={handleItemClick}
        >
          <Icon name='newspaper' />
          Ultimas Noticias
        </Menu.Item>
        <Menu.Item
          name="Buscar Noticias"
          as={Link}
          to="/api/news/search"
          active={activeItem === 'Buscar Noticias'}
          onClick={handleItemClick}
        >
          <Icon name='search' />
          Buscar Noticias
        </Menu.Item>
      <Menu.Menu position='right'>
        {(activeItem === 'Ultimas Noticias') &&
          (
            <>
              <Icon inverted name='world' style={{margin: 'auto'}} />
              <Dropdown
                item 
                placeholder='Pais'
                options={countries}
                selection
                search
                onChange={handleChange}
                value={country}
                defaultValue="AR"
              />
            </>
          )
        }
      </Menu.Menu>
    </Menu>
  );
}

export default NavigationBar;