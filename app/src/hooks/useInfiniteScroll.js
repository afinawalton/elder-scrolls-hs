// REFERENCE: https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks

import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('fetchMoreCards called!')
    });
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
