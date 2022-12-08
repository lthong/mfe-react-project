import { useRef, useEffect } from 'react';

const useServiceMount = (mountCb) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (typeof mountCb === 'function') mountCb(nodeRef.current);
  }, []);

  return nodeRef;
};

export default useServiceMount;
