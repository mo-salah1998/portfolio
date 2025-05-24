import React, { createContext, useContext, useState, useEffect } from 'react';
import Loader from '../components/ui/loader/loader';
import '../components/ui/loader/loader.css';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
  initialLoadingTime?: number; // Time in milliseconds
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ 
  children, 
  initialLoadingTime = 2000 // Default 2 seconds 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialLoadingTime);

    return () => clearTimeout(timer);
  }, [initialLoadingTime]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? (
        <div className="loading-overlay">
          <Loader />
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};

// You can export a withLoading HOC if you need it for specific components
export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & { loading?: boolean }> => {
  return ({ loading = false, ...props }) => {
    const { isLoading } = useLoading();
    const showLoader = loading || isLoading;

    if (showLoader) {
      return <Loader />;
    }

    return <Component {...props as P} />;
  };
}; 