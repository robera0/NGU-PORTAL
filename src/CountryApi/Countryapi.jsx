import { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  
  const countryApi = 'https://countriesnow.space/api/v0.1/countries/population';

  const fetchApi = async () => {
    try {
      const res = await fetch(countryApi);
      const data = await res.json();
      const countries = data.data.map(item => item.country).filter(Boolean).sort();
      setCountry([...new Set(countries)]);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <UserContext.Provider value={{ country, setCountry }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCountryApi = () => useContext(UserContext);
