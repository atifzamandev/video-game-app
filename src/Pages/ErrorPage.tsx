import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
  const error = useRouteError()

  const hasRouteError = isRouteErrorResponse(error)

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>{hasRouteError && error.data}</Heading>
        <Text>
          {hasRouteError ? ' This url does not exists' : 'Something went wrong'}
        </Text>
      </Box>
    </>
  )
}

export default ErrorPage
