import {useState} from 'react';
import {Box, Text, Button} from '@chakra-ui/react';
import {COOKIE_CONSENT_EVENT} from '../../hooks/useCookieConsent';

const STORAGE_KEY = 'cookie_consent_the_local_guy';

export function CookieBanner() {
    const [visible, setVisible] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) === null;
    });

    if (!visible) return null;

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
        setVisible(false);
    };

    return (
        <Box
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            zIndex={2000}
            bg="rgba(255, 253, 245, 0.95)"
            backdropFilter="blur(10px)"
            borderTop="2px solid"
            borderColor="#D4AF37"
            boxShadow="0 -4px 20px rgba(0,0,0,0.1)"
            px={{base: 6, md: 10}}
            py={{base: 5, md: 4}}
        >
            <Box
                maxW="6xl"
                mx="auto"
                display="flex"
                flexDirection={{base: 'column', md: 'row'}}
                alignItems={{base: 'flex-start', md: 'center'}}
                gap={4}
            >
                <Text flex="1" fontSize="sm" color="#4A3728" fontWeight="600" lineHeight="1.6">
                    We use "Sheftalies", aka "cookies" for basic site functionality.
                    We don’t track you or collect personal data.
                </Text>

                <Button
                    size="sm"
                    bg="#4A3728"
                    color="white"
                    borderRadius="full"
                    px={8}
                    fontWeight="900"
                    _hover={{bg: '#2D1F16', transform: 'scale(1.05)'}}
                    transition="all 0.2s"
                    onClick={handleAccept}
                >
                    PASS THE LEMON
                </Button>
            </Box>
        </Box>
    );
}