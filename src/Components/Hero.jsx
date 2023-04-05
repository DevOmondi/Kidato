import HeroImg from "../assets/hero-image.jpg"
import { Link } from '@chakra-ui/react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Kidato
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Class Management
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Welcome to our class management system! 
          This platform will help you stay organized and informed throughout the semester. 
          Please pick your category
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            
            <Link href="/student-login" className="category-link">
              Student
            </Link>
            <Link href="/lec-login" className="category-link">
              Lecturer
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Hero Image'}
          objectFit={'cover'}
          src={HeroImg}
        />
      </Flex>
    </Stack>
  );
}