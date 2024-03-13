import { Flex, Text } from 'theme-ui'

import type { ThemeUIStyleObject } from 'theme-ui'

export interface Props {
  category: {
    label: string
  }
  sx?: ThemeUIStyleObject | undefined
}

export const Category = (props: Props) => {
  const { category, sx } = props
  return (
    <Flex sx={{ alignItems: 'start' }}>
      <Text
        sx={{
          fontSize: 1,
          color: '#555555',
          backgroundColor: '#cccccc',
          paddingX: 1,
          borderRadius: 1,
          ...sx,
        }}
      >
        {category.label}
      </Text>
    </Flex>
  )
}
