import React, {createContext, useContext, useState} from 'react';

interface ApiContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const value = {
    loading,
    setLoading,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
