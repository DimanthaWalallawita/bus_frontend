import { useState, useCallback } from "react";

const usePageLoader = () => {
    const [isLoading, setIsLoading] = useState(false);

    const triggerLoad = useCallback(() => {
        setIsLoading(true);
    }, []);

    const finishLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        triggerLoad,
        finishLoad,
    };
};

export default usePageLoader;