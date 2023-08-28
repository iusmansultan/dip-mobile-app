import React, {createContext, useContext, useState} from 'react';

interface ApiContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: Error | null | string;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

interface ApiProviderProps {
  children: React.ReactNode;
}
export const useApiContext = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null | string>(null);

  const value = {
    loading,
    setLoading,
    error,
    setError,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
