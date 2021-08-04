import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

export const AppContext = React.createContext();
//  api url
const apiKey=process.env.REACT_APP_API

// const apiKey = "e3ec7ebd4c5c577e926849806f0407e3";

const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${apiKey}&language=en-US`;



export const AppProvider = ({ children }) => {
  

  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [allmovies, setAllMovies] = useState({
    movies: [],
    searchterms: "",
  });

  const searchUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=en-US&query=${allmovies.searchterms}`;
  // const searchUrl = `https://api.themoviedb.org/3/search/movie/popular/?api_key=${apiKey}&language=en-US&query=${allmovies.searchterms}`;

  // fetch data
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${allmovies.searchterms}`);
      // pars to json
      const moviess = await response.json();
      const { results } = moviess;
      if (results) {
        setLoading(false);
        setAllMovies({ movies: [...moviess.results] });
      } else {
        setAllMovies({ movies: [] });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  },[]);

  // refs
  const searchRef = useRef(null);
  const changeRef = useRef(null);
  const changeMobileRef = useRef(null);


  const openNavbar = () => {
    setShowNav(true);
    console.log("navbar is opened");
  };
  const closeNavbar = () => {
    setShowNav(false);
  };
  const openSearch = () => {
    setShowSearch(true);
    changeRef.current.focus();
  };
  const closeSearch = () => {
    setShowSearch(false);
  };
  const searchHandle = (e) => {
    console.log(e.target);
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      closeSearch();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(searchUrl)
      .then((data) => data.json())
      .then((data) => {
        if (data.results) {
          console.log(data.results);
          setLoading(false);
          setAllMovies({ movies: [...data.results] });
          closeNavbar();
          
          if(data.results.length<2){
            setLoading(false);
            fetchMovies();
            closeNavbar();
          }
        }else {
          setLoading(false);
          // setAllMovies([]);
          console.log(data.results);
          fetchMovies();
          closeNavbar();
        }
      });
  };

  const handleChange = (ref) => {
    setAllMovies({...allmovies, searchterms: ref.current.value });
  };

  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        allmovies,
        showNav,
        openNavbar,
        closeNavbar,
        showSearch,
        openSearch,
        closeSearch,
        searchRef,
        searchHandle,
        handleSubmit,
        handleChange,
        changeRef,
        changeMobileRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
