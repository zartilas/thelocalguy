import { useState } from 'react';
import { Link } from '@chakra-ui/react';
import { SiBitcoin } from 'react-icons/si';

import {PiCopySimpleThin} from "react-icons/pi";

const BitcoinButton = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("bc1qkcqr3unvk8p8h8u868txnh6xf0vchkm52e7drg")
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <Link
            onClick={(e) => {
                e.preventDefault();
                copyToClipboard();
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="14"
            bg="#4A3728"
            color="white"
            borderRadius="xl"
            fontWeight="bold"
            textDecoration="none"
            _hover={{
                bg: copied ? "#4E5B31" : "#2D1F16",
                transform: "translateY(-2px)"
            }}
            transition="all 0.2s"
        >
            {copied ? 'ADDRESS COPIED' : (
                <>
                    <SiBitcoin style={{ marginRight: '0.2rem' }} /> BITCOIN <PiCopySimpleThin />
                </>
            )}
        </Link>
    );
};

export default BitcoinButton;