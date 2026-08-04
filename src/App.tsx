import {Routes, Route} from 'react-router-dom';
import {Box} from '@chakra-ui/react';

import Home from "./page/Home.tsx";
import {NotFound} from "./page/NotFound.tsx";
import {CookieBanner} from "./components/ui/cookie-banner.tsx";


function App() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
                <CookieBanner/>
                <Routes>
                <Route
                    path="/*"
                    element={
                        <>
                            <Box flex="1">
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                                </Routes>
                            </Box>
                        </>
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;