import { Button, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'

interface Props {
  children: string
}

const LIMIT = 300

const ExpandableText: FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  if (children.length <= LIMIT) return <Text>{children}</Text>

  const summary = expanded ? children : children.substring(0, LIMIT) + '...'

  return (
    <Text>
      {summary}
      <Button
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        marginLeft={2}
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  )
}

export default ExpandableText
