import { useState, useEffect } from "react";

const ClientWrapper = <P,>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P & JSX.IntrinsicAttributes) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
    return <Component C {...props} />;
  };
  return WrappedComponent;
};

export default ClientWrapper;
