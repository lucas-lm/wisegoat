import React from 'react'
import Link from 'next/link'
import { Text } from './styles'

export default function Logo({ size }) {
  return (
    <Link href="/home" passHref>
      <Text size={size}>
        <Text.Small>Wise</Text.Small>
        <br />
        Goat
      </Text>
    </Link>
  )
}
