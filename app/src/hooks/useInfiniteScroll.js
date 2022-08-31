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
    callback();
  }, [isFetching]);

  const handleScroll = () => {
    // innerHeight = height of viewport; scrollTop = how far document is scrolled from the top
    // offsetHeight = height of element, incl. vertical padding and borders
    // get to the point where we've scrolled near the bottom of the page
    const pageBottom = window.innerHeight + document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;

    // check if we're close enough to the bottom, within 20px less or more than offsetHeight
    const isNearBottom = pageBottom >= offsetHeight - 5 && pageBottom <= offsetHeight + 5;
    if (!isNearBottom) return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
