import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2021-10-21'

export const sanityClient = createClient({
  dataset,
  projectId,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', 
})