import React from 'react';
export const LoadingContext = React.createContext({})

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};