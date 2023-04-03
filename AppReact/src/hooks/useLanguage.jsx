import { useState, useEffect } from 'react';
import iso6391 from 'iso-639-1';

function useLanguage() {
    const [allLanguage, setLanguage] = useState(null);
    useEffect(() => {
      const languageAPI = [
        'AF','AN','AR','AZ','BG','BN','BR','BS','SV','ZH',
        'CA','CS','CY','DA','DE','EL','EN','EO','ES','ET',
        'EU','FA','FI','FR','GL','HE','HI','HR','HT','HU',
        'HY','ID','IS','IT','JP','JV','KK','KO','LA','LB',
        'LT','LV','MG','MK','ML','MR','MS','NL','NN','NO',
        'OC','PL','PT','RO','RU','SH','SK','SL','SQ','SR',
        'SW','TA','TE','TH','TL','TR','UK','UR','VI','VO',
      ];
      const languages = languageAPI.map((key) => {
          const languageName = iso6391.getName(key.toLowerCase());
          return {
              key,
              text: languageName,
              value: languageName ? iso6391.getCode(languageName) : ''
          };
      });
      const languageList = languages.filter(obj => Boolean(obj.text));
      console.log(languageList)
      setLanguage(languageList);
    }, []);
  
  return allLanguage;
}

export default useLanguage;