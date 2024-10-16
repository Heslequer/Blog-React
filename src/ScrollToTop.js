import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();  // Obtém a rota atual

  useEffect(() => {
    window.scrollTo(0, 0);  // Rola para o topo quando a rota muda
  }, [pathname]);  // Executa o efeito toda vez que o pathname muda

  return null;
};

export default ScrollToTop;
