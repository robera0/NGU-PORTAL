import { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

export const CountryProvider = ({ children }) => {
  const [Selectedcountry, setSelectedCountry] = useState([]);
  const [countries, setCountries] = useState("");
  
  const countryApi = 'https://countriesnow.space/api/v0.1/countries/population';

  const fetchApi = async () => {
    try {
      const res = await fetch(countryApi);
      const data = await res.json();
      const countries = data.data.map(item => item.country).filter(Boolean).sort();
      setSelectedCountry([...new Set(countries)]);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <UserContext.Provider value={{ Selectedcountry, setSelectedCountry,countries, setCountries}}>
      {children}
    </UserContext.Provider>
  );
};

export const useCountryApi = () => useContext(UserContext);
