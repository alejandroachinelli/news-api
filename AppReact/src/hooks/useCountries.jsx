import { useState, useEffect } from 'react';
import { countries } from 'countries-list';

function useCountries() {

    const [allCountries, setCountries] = useState(null);
    useEffect(() => {
        const countriesArray = Object.entries(countries).map(([unicode, name]) => ({ key: unicode, value: unicode, text: name.name }));
        setCountries(countriesArray);
    }, []);
  
  return allCountries;
}

export default useCountries;