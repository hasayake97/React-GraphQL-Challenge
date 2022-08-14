import { gql } from '@apollo/client'

export interface ILaunchesPast {
  id: string
  mission_name: string
  launch_date_local: string
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link: string
    video_link: string
  }
  rocket: {
    rocket_name: string
    rocket_type: string
  }
  launch_success: boolean
  details: string
}

export const past = gql`
  query PAST_LIST($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`

export interface ILauncheNext {
  launch_date_local: string
  id: string
  launch_site: {
    site_name_long: string
  }
  launch_success: boolean
  links: {
    article_link: string
    video_link: string
  }
  rocket: {
    rocket_name: string
    rocket_type: string
  }
  details: string
  mission_name: string
}

export const next = gql`
  query NEXT {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`
