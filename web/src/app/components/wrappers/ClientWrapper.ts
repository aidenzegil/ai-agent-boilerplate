import { useState, useEffect } from "react";

const ClientWrapper = <P,>(Component: JSX.Element<P>) => {
  const WrappedComponent = <P,>(props: P & JSX.IntrinsicAttributes) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
    
    return <div><Component {...props} /></div>
  };
  return WrappedComponent;
};


export default ClientWrapper;