import { useEffect, useState, useCallback } from 'react';

const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleResize = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const responsizeWidth = 640;

  return windowSize <= responsizeWidth;
};

export default useWindowWidth;
