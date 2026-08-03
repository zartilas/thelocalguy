import {
    Box, Button, Container, Flex, Heading, SimpleGrid,
    Text, VStack, HStack, Badge,
    Tabs, Link, Center, Icon,
} from "@chakra-ui/react"
import {useState} from "react"
import {
    PiForkKnife,
    PiCirclesFour,
    PiPersonSimpleSwim,
    PiMapPinArea,
    PiBeerSteinFill
} from "react-icons/pi";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {SiGooglemaps, SiPaypal, SiRevolut} from "react-icons/si";
import {LiaBeerSolid} from "react-icons/lia";
import {GiHeartOrgan} from "react-icons/gi";
import {locations} from "./constants/locations.ts";
import {CookieBanner} from "./components/ui/cookie-banner.tsx";


export default function App() {
    const [city, setCity] = useState("Ammochostos")
    const [cat, setCat] = useState("All")

    const filtered = locations.filter(l =>
        (l.city === city) && (cat === "All" || l.category === cat)
    )

    return (
        <Box bg="#4E5B31" color="#4A3728" minH="100vh" w="100%" overflowX="hidden">
            {/* HERO */}
            <Flex h="95vh" bg="#D4AF37" color="white" direction="column" justify="center" px="10" w="100%">
                <VStack align="flex-start" maxW="5xl" gap="8"> {/* Πρόσθεσε αυτό το VStack για στοίχιση */}
                    <Heading fontSize={{base: '5xl', md: '8xl'}} fontWeight="900" textTransform="uppercase"
                             lineHeight="0.9" mb="6" overflowWrap="break-word">
                        DON'T ASK,<br/>JUST GO.
                    </Heading>
                    <Box
                        bg="whiteAlpha.200"
                        p={{base: "6", md: "6"}}
                        borderRadius="3xl"
                        border="1px solid whiteAlpha.400"
                        backdropFilter="blur(15px)"
                        maxW="5xl"
                        w="100%"
                        position="relative"
                    >
                        <Text
                            fontSize={{base: "lg", md: "large"}}
                            fontWeight="700"
                            fontStyle="italic"
                            lineHeight="1.5"
                            color="white"
                            whiteSpace="normal"
                        >
                            I'm a
                            <Text
                                as="span"
                                color="#4A3728"
                                fontWeight="800"
                                fontSize="xl"
                                fontStyle="italic"
                                ml="2"
                                mr="2"
                            >
                                Certified Local
                            </Text>
                            and I'm sending you to the places where I would actually go myself. No tourist traps.
                            Enjoy!!
                        </Text>
                    </Box>
                    <HStack gap="4" w="100%" flexWrap="wrap" mt="8">
                        <Button
                            size="lg"
                            bg="#4A3728"
                            color="white"
                            px="8"
                            height="14"
                            borderRadius="full"
                            fontWeight="900"
                            _hover={{transform: "scale(1.05)", bg: "#2D1F16"}}
                            onClick={() => document.getElementById('filters')?.scrollIntoView({behavior: 'smooth'})}
                        >
                            SHOW ME THE SPOTS
                        </Button>

                        <Button
                            size="lg"
                            bg="rgba(255, 253, 245, 0.9)"
                            color="#4A3728"
                            px="8"
                            height="14"
                            borderRadius="full"
                            fontWeight="900"
                            _hover={{transform: "scale(1.05)", bg: "white"}}
                            onClick={() => document.getElementById('support')?.scrollIntoView({behavior: 'smooth'})}
                        >
                            WANNA SAY THANKS?
                        </Button>
                    </HStack>
                </VStack>
            </Flex>

            {/* STICKY FILTERS */}
            <Box id="filters" position="sticky" top="0" bg="rgba(255,253,245,0.85)" backdropFilter="blur(10px)"
                 zIndex="20"
                 borderBottom="1px solid #D4AF3722" w="100%">
                <VStack align="center" gap="4" maxW="full" mx="auto" py="6">
                    {/* CATEGORY BUTTONS */}
                    <Tabs.Root
                        value={cat}
                        onValueChange={(e) => setCat(e.value)}
                        variant="subtle"
                        size="md"
                        maxW="100%"
                    >
                        <Tabs.List
                            gap="4"
                            px="6"
                            overflowX="auto"
                            display="flex"
                            flexWrap="nowrap"
                            whiteSpace="nowrap"
                            justifyContent={{base: "flex-start", md: "center"}}
                            css={{
                                '&::-webkit-scrollbar': {display: 'none'},
                                '-ms-overflow-style': 'none',
                                'scrollbar-width': 'none',
                            }}
                        >
                            {[
                                {value: "All", label: "ALL", icon: <PiCirclesFour/>},
                                {value: "Food", label: "FOOD", icon: <PiForkKnife/>},
                                {value: "Sea", label: "SEA", icon: <PiPersonSimpleSwim/>},
                                {value: "Landmarks", label: "LANDMARKS", icon: <PiMapPinArea/>}
                            ].map((item) => (
                                <Tabs.Trigger
                                    key={item.value}
                                    value={item.value}
                                    color="#4A3728"
                                    px={{base: "3", md: "4"}}
                                    py="3"
                                    borderRadius="md"
                                    flexShrink={0}
                                    _selected={{
                                        bg: "transparent",
                                        color: "#4A3728",
                                        border: "1px solid #4A3728",
                                        fontWeight: "bold"
                                    }}
                                    _hover={{bg: "rgba(74, 55, 40, 0.05)"}}
                                >

                                    <Box fontSize={{base: "26px", md: "22px"}}>
                                        {item.icon}
                                    </Box>
                                    <Box as="span" display={{base: "none", md: "inline"}} ml="2">
                                        {item.label}
                                    </Box>
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </Tabs.Root>
                </VStack>
            </Box>

            {/* GRID */}
            <Container maxW="6xl" pb="16">
                <VStack align="center" gap="4" px="4" py="6" w="100%" maxW="full">
                    <Flex align="center" w="100%" justify="center" gap="3">
                        {/* left nav */}
                        <Button
                            onClick={() => {
                                const el = document.getElementById("city-tabs-container");
                                if (el) el.scrollBy({left: -120, behavior: "smooth"});
                            }}
                            display={{base: "inline-flex", md: "none"}}
                            minW="36px"
                            h="36px"
                            p="0"
                            borderRadius="full"
                            bg="#D4AF3710"
                            color="white"
                            boxShadow="sm"
                            _hover={{bg: "#D4AF3720"}}
                        >
                            <FaAngleLeft/>
                        </Button>

                        <HStack
                            id="city-tabs-container"
                            bg="#D4AF3710"
                            borderRadius="full"
                            p="1"
                            overflowX="auto"
                            gap="2"
                            whiteSpace="nowrap"
                            css={{
                                "&::-webkit-scrollbar": {display: "none"},
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                            maxW={{base: "86%", md: "auto"}}
                        >
                            {[
                                "Ammochostos",
                                "Paphos",
                                "Larnaca",
                                "Limassol",
                                "Nicosia",
                                "Kyrenia",
                            ].map((c) => (
                                <Button
                                    key={c}
                                    onClick={() => setCity(c)}
                                    borderRadius="full"
                                    fontWeight="700"
                                    fontSize="11px"
                                    letterSpacing="0.05em"
                                    color="white"
                                    bg={city === c ? "#D57800" : "transparent"}
                                    _hover={{bg: city === c ? "#D57800" : "whiteAlpha.200"}}
                                    flexShrink={0}
                                    px="4"
                                    py="2"
                                    minW="fit-content"
                                    height="auto"
                                    variant="ghost"
                                    border="none"
                                    _focus={{boxShadow: "none"}}
                                >
                                    {c.toUpperCase()}
                                </Button>
                            ))}
                        </HStack>

                        {/* right nav */}
                        <Button
                            onClick={() => {
                                const el = document.getElementById("city-tabs-container");
                                if (el) el.scrollBy({left: 120, behavior: "smooth"});
                            }}
                            display={{base: "inline-flex", md: "none"}}
                            minW="36px"
                            h="36px"
                            p="0"
                            borderRadius="full"
                            bg="#D4AF3710"
                            color="white"
                            boxShadow="sm"
                            _hover={{bg: "#D4AF3720"}}
                        >
                            <FaAngleRight/>
                        </Button>
                    </Flex>
                </VStack>

                {filtered.length > 0 ? (
                    <SimpleGrid columns={{base: 1, md: 3}} gap="8">
                        {filtered.map((loc, i) => (
                            <Box
                                key={i}
                                bg="white"
                                p="6"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="#E2E8F0"
                                transition="all 0.3s ease"
                                _hover={{
                                    transform: "translateY(-4px)",
                                    shadow: "lg",
                                    borderColor: "#CBD5E0",
                                }}
                                overflow="hidden"
                            >
                                <Flex direction="column" mb="6">
                                    <Flex justify="space-between" align="start" mb="3">
                                        <Box>
                                            <Heading
                                                size="md"
                                                fontWeight="800"
                                                textTransform="uppercase"
                                                color="#2D3748"
                                                letterSpacing="tight"
                                                lineHeight="1.2"
                                                mb="1"
                                            >
                                                {loc.name}
                                            </Heading>
                                            <Text
                                                fontSize="sm"
                                                color="#718096"
                                                fontStyle="italic"
                                                fontWeight="500"
                                            >
                                                {loc.subname || "Local favorite spot"}
                                            </Text>
                                        </Box>
                                        <Badge
                                            size="sm"
                                            bg="#EDF2F7"
                                            color="#4A5568"
                                            borderRadius="lg"
                                            px="2"
                                            py="1"
                                            fontSize="12px"
                                            fontWeight="600"
                                        >
                                            {loc.village}
                                        </Badge>
                                    </Flex>
                                </Flex>

                                <HStack gap="3" mt="4" wrap="wrap" justify="center">
                                    <Link
                                        href={loc.maps?.google}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        textDecoration="none"
                                        flex="1"
                                        minW="80px"
                                    >
                                        <Button
                                            width="full"
                                            size="sm"
                                            borderRadius="xl"
                                            bg="#4A3728"
                                            color="white"
                                            _hover={{bg: "#4285F4", color: "white"}}
                                            fontWeight="semibold"
                                            fontSize="11px"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            gap="2"
                                            height="36px"
                                            py="2"
                                        >
                                            <Icon as={SiGooglemaps} boxSize="14px"/>
                                            <Text display={{base: "none", sm: "block"}}>Google Maps</Text>
                                            <Text display={{base: "block", sm: "none"}}>Google Maps</Text>
                                        </Button>
                                    </Link>
                                    {/*<Link*/}
                                    {/*    href={loc.maps?.apple}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noopener noreferrer"*/}
                                    {/*    textDecoration="none"*/}
                                    {/*    flex="1"*/}
                                    {/*    minW="80px"*/}
                                    {/*>*/}
                                    {/*    <Button*/}
                                    {/*        width="full"*/}
                                    {/*        size="sm"*/}
                                    {/*        borderRadius="xl"*/}
                                    {/*        bg="#4A3728"*/}
                                    {/*        color="white"*/}
                                    {/*        _hover={{bg: "#000000", color: "white"}}*/}
                                    {/*        fontWeight="semibold"*/}
                                    {/*        fontSize="11px"*/}
                                    {/*        display="flex"*/}
                                    {/*        alignItems="center"*/}
                                    {/*        justifyContent="center"*/}
                                    {/*        gap="2"*/}
                                    {/*        height="36px"*/}
                                    {/*        py="2"*/}
                                    {/*    >*/}
                                    {/*        <Icon as={FaApple} boxSize="14px"/>*/}
                                    {/*        <Text display={{base: "none", sm: "block"}}>Apple</Text>*/}
                                    {/*        <Text display={{base: "block", sm: "none"}}>Apple</Text>*/}
                                    {/*    </Button>*/}
                                    {/*</Link>*/}

                                    {/*<Link*/}
                                    {/*    href={loc.maps?.open}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noopener noreferrer"*/}
                                    {/*    textDecoration="none"*/}
                                    {/*    flex="1"*/}
                                    {/*    minW="80px"*/}
                                    {/*>*/}
                                    {/*    <Button*/}
                                    {/*        width="full"*/}
                                    {/*        size="sm"*/}
                                    {/*        borderRadius="xl"*/}
                                    {/*        bg="#4A3728"*/}
                                    {/*        color="white"*/}
                                    {/*        _hover={{bg: "#2D6A4F", color: "white"}}*/}
                                    {/*        fontWeight="semibold"*/}
                                    {/*        fontSize="11px"*/}
                                    {/*        display="flex"*/}
                                    {/*        alignItems="center"*/}
                                    {/*        justifyContent="center"*/}
                                    {/*        gap="2"*/}
                                    {/*        height="36px"*/}
                                    {/*        py="2"*/}
                                    {/*    >*/}
                                    {/*        <Icon as={FaMapMarkerAlt} boxSize="14px"/>*/}
                                    {/*        <Text display={{base: "none", sm: "block"}}>Open</Text>*/}
                                    {/*        <Text display={{base: "block", sm: "none"}}>Open</Text>*/}
                                    {/*    </Button>*/}
                                    {/*</Link>*/}
                                </HStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                ) : (
                    <Box
                        bg="whiteAlpha.200"
                        p="8"
                        borderRadius="2xl"
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        backdropFilter="blur(15px)"
                        textAlign="center"
                        maxW="2xl"
                        mx="auto"
                        mt="8"
                    >
                        <Text
                            fontSize="lg"
                            color="white"
                            fontWeight="600"
                            fontStyle="italic"
                        >
                            Unfortunately, I haven't had the time to visit any places here yet, <br/>or the ones I
                            visited weren't worth mentioning.
                        </Text>
                        <Text
                            fontSize="md"
                            color="whiteAlpha.800"
                            mt="4"
                        >
                            However, feel free to explore on your own!! <br/> If you find a spot you love, let me know
                            so I can go check it out myself.
                        </Text>
                    </Box>
                )}
            </Container>

            {/* Support */}
            <Box id="support" bg="#D4AF37" py="20" px="10">
                <VStack gap="8" maxW="3xl" mx="auto" textAlign="center">
                    <Center gap="0" mb="4">
                        <Box transform="rotate(15deg) scaleX(-1)" fontSize="8xl" color="#4A3728" mr="-2">
                            <LiaBeerSolid/>
                        </Box>
                        <Box transform="rotate(-15deg)" fontSize="8xl" color="#4A3728" ml="-2">
                            <LiaBeerSolid/>
                        </Box>
                    </Center>
                    <Heading color="white" size="2xl" textTransform="uppercase">
                        A local never says no to a beer
                    </Heading>
                    <Text color="#4A3728" fontSize="lg" fontWeight="600">
                        If you found a spot you loved and want to say thanks, feel free to support the guide!!
                    </Text>

                    <SimpleGrid columns={{base: 1, md: 3}} gap="4" w="100%">
                        <Link
                            href="https://paypal.me/zartilas"
                            target="_blank"
                            rel="noopener noreferrer"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            h="14"
                            bg="#4A3728"
                            color="white"
                            borderRadius="xl"
                            fontWeight="bold"
                            textDecoration="none"
                            _hover={{bg: "#2D1F16", transform: "translateY(-2px)"}}
                            transition="all 0.2s"
                        >
                            <SiPaypal/> PAYPAL
                        </Link>

                        <Link
                            href="https://revolut.me/zartilas"
                            target="_blank"
                            rel="noopener noreferrer"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            h="14"
                            bg="#4A3728"
                            color="white"
                            borderRadius="xl"
                            fontWeight="bold"
                            textDecoration="none"
                            _hover={{bg: "#2D1F16", transform: "translateY(-2px)"}}
                            transition="all 0.2s"
                        >
                            <SiRevolut/> REVOLUT
                        </Link>

                        <Link
                            href="https://buymeacoffee.com/zartilas"
                            target="_blank"
                            rel="noopener noreferrer"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            h="14"
                            bg="#4A3728"
                            color="white"
                            borderRadius="xl"
                            fontWeight="bold"
                            textDecoration="none"
                            _hover={{bg: "#2D1F16", transform: "translateY(-2px)"}}
                            transition="all 0.2s"
                        >
                            <Box fontSize="22px">
                                <PiBeerSteinFill/>
                            </Box> BUY ME A BEER
                        </Link>
                    </SimpleGrid>
                </VStack>
            </Box>

            {/* Disclaimer */}
            <Container maxW="4xl" py="16" textAlign="center">
                <VStack gap="6" opacity="0.8">
                    <Box w="50px" h="1px" bg="rgba(255,253,245,0.85)"/>

                    <Text fontSize="xs" color="rgba(255,253,245,0.85)" fontWeight="bold" textTransform="uppercase"
                          letterSpacing="widest">
                        The Boring Stuff
                    </Text>

                    <VStack gap="3">
                        <Text fontSize="md" color="rgba(255,253,245,0.85)" fontStyle="italic" lineHeight="tall">
                            Just a heads up: I’m sharing my personal favorites. I don’t own these places, and I don’t
                            get paid to list them.<br/>
                            Things change, so double-check before you go.
                        </Text>

                        <Text fontSize="md" color="rgba(255,253,245,0.85)" lineHeight="tall">
                            We might have different tastes and preferences, so if you don’t like a place... <br/>it’s
                            probably your company's fault, call me the next time!!
                        </Text>

                        <Text fontSize="sm" color="rgba(255,253,245,0.85)">
                            Have a beer for me too!!
                        </Text>
                    </VStack>
                </VStack>
            </Container>

            {/* Footer */}
            <Box bg="rgba(255,253,245,0.85)" backdropFilter="blur(10px)" borderTop="1px solid #D4AF3722"
                 py="8" px="10" display="flex" flexDirection="column" alignItems="center" gap="2" w="100%">
                <Text fontSize="17px" color="#4A3728" fontWeight="600" letterSpacing="0.03em" display="flex"
                      alignItems="center" gap="1.5">
                    Made with
                    <Box as="span" color="#8E3232" display="inline-flex" alignSelf="center">
                        <GiHeartOrgan size="18px"/>
                    </Box>
                    by
                    <Link
                        href="https://zartilas.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        fontWeight="bold"
                        color="#4A3728"

                        _hover={{color: "#D57800"}}
                    >Zartilas
                    </Link>
                </Text>
                <Text fontSize="13px" color="#9a8070" letterSpacing="0.05em">
                    © {new Date().getFullYear()} The Local Guy. All rights reserved.
                </Text>
            </Box>
            <CookieBanner/>
        </Box>
    )
}