import {
  useColorModeValue,
  Container,
  HStack,
  Flex,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  useBreakpointValue,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiHelpCircle,
  FiMenu,
  FiSearch,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import { signout } from 'src/helpers'

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const auth = useAuth()

  const userMetadata = auth.currentUser?.user_metadata as {
    avatar_url: string
    name: string
  }

  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container maxW="full" py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <div>Social Events</div>
            {isDesktop ? (
              auth.isAuthenticated ? (
                <HStack spacing="4">
                  <ButtonGroup variant="ghost" spacing="1">
                    <IconButton
                      icon={<FiSearch fontSize="1.25rem" />}
                      aria-label="Search"
                    />
                    <IconButton
                      icon={<FiSettings fontSize="1.25rem" />}
                      aria-label="Settings"
                    />
                    <IconButton
                      icon={<FiHelpCircle fontSize="1.25rem" />}
                      aria-label="Help Center"
                    />
                  </ButtonGroup>
                  <Menu>
                    <MenuButton
                      as={Avatar}
                      boxSize="10"
                      name={userMetadata.name}
                      src={userMetadata.avatar_url}
                    >
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem icon={<FiLogOut />} onClick={signout}>
                        Log out
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              ) : (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {/* {['Product', 'Pricing', 'Resources', 'Support'].map(
                    (item) => (
                      <Button key={item}>{item}</Button>
                    )
                  )} */}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Link to={routes.login()}>
                      <Button variant="ghost">Sign in</Button>
                    </Link>
                    <Button variant="primary">Sign up</Button>
                  </HStack>
                </Flex>
              )
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Navbar
