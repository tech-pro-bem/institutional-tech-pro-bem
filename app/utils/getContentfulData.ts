import { createClient } from 'contentful'
import { Tables } from '../protocols'

export async function getContentfulData(table: string) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
  })

  const res = await client.getEntries({
    content_type: table,
  })

  const results: Tables<unknown>[] = res.items

  return results
}
