// NotificationContext.tsx
import React, {createContext, useContext, useState, ReactNode} from 'react';

interface NotificationContextType {
  error: string | null;
  loading: boolean;
  toaster: boolean;
  success: string | null;
  showError: (errorMessage: string) => void;
  showLoading: (loadingState: boolean) => void;
  showSuccess: (successMessage: string) => void;
  showToaster: (toasterState: boolean) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [toaster, setShowToaster] = useState<boolean>(false);

  const showError = (errorMessage: string) => {
    setShowToaster(true);
    setError(errorMessage);
    setTimeout(() => {
      setShowToaster(false);
      setError(null);
    }, 3000);
  };

  const showLoading = (loadingState: boolean) => {
    setLoading(loadingState);
  };
  const showToaster = (loadingState: boolean) => {
    setShowToaster(loadingState);
  };

  const showSuccess = (successMessage: string) => {
    setSuccess(successMessage);
    setShowToaster(true);
    setTimeout(() => {
      setShowToaster(false);
      setSuccess(null);
    }, 3000);
  };

  const contextValue: NotificationContextType = {
    error,
    loading,
    success,
    showError,
    showLoading,
    showSuccess,
    toaster,
    showToaster,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
