import {
  Container,
  Stack,
  Heading,
  useBreakpointValue,
  Input,
  Button,
  HStack,
  Divider,
  Text,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import {
  GoogleIcon,
  TwitterIcon,
  GitHubIcon,
} from 'src/components/ProviderIcons/ProviderIcons'
import { signInWithGoogle } from 'src/helpers'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <Container maxW="md" py={{ base: '12', md: '24' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
                Log in to your account
              </Heading>
              <Text color="muted">Start making your dreams come true</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="4">
              <Input placeholder="Enter your email" />
              <Button variant="primary">Continue with email</Button>
            </Stack>
            <HStack>
              <Divider />
              <Text fontSize="sm" color="muted">
                OR
              </Text>
              <Divider />
            </HStack>
            <Stack spacing="3">
              <Button
                variant="secondary"
                leftIcon={<GoogleIcon boxSize="5" />}
                iconSpacing="3"
                onClick={signInWithGoogle}
              >
                Continue with Google
              </Button>
              <Button
                variant="secondary"
                leftIcon={<TwitterIcon boxSize="5" />}
                iconSpacing="3"
              >
                Continue with Twitter
              </Button>
              <Button
                variant="secondary"
                leftIcon={<GitHubIcon boxSize="5" />}
                iconSpacing="3"
              >
                Continue with GitHub
              </Button>
            </Stack>
          </Stack>
          <HStack spacing="1" justify="center">
            <Text fontSize="sm" color="muted">
              Having issues?
            </Text>
            <Button variant="link" colorScheme="blue" size="sm">
              Contact us
            </Button>
          </HStack>
        </Stack>
      </Container>
    </>
  )
}

export default LoginPage
