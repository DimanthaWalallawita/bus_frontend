import { type ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./Pageloader";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const location = useLocation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {loading && <PageLoader />}
            {!loading && children}
        </>
    );
};

export default Layout;