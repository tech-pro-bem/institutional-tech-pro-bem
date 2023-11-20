import { createClient } from 'contentful'
import { Tables } from '../protocols'

export async function getContentfulData(table: string) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
    environment:
      process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT === 'staging'
        ? 'staging'
        : 'master',
  })

  const getEntries = await client.getEntries({
    content_type: table,
  })

  const getTable = await client.getContentType(table)
  const tableName = getTable.name

  const entries: Tables<unknown>[] = getEntries.items

  return { entries, tableName }
}
