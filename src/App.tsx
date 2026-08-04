import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Box} from '@chakra-ui/react';

import Home from "./page/Home.tsx";
import {NotFound} from "./page/NotFound.tsx";
import {CookieBanner} from "./components/ui/cookie-banner.tsx";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = sessionStorage.getItem('redirectPath');
        if (redirectPath && redirectPath !== '/') {
            sessionStorage.removeItem('redirectPath');
            navigate(redirectPath, {replace: true});
        }
    }, [navigate]);

    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <CookieBanner/>
            <Box flex="1">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Box>
        </Box>
    );
}

export default App;