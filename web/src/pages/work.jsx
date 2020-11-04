import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ImageContainer from '../components/ImageContainer'

export const query = graphql`
  query ProjectsQuery {
    allSanityProjects(sort: { fields: projectDate, order: DESC }) {
      projects: edges {
        project: node {
          id
          name: projectName
          description: _rawProjectDescription
          date: projectDate(formatString: "YYYY")
          images: projectImages {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            altText
          }
        }
      }
    }
  }
`

const Work = ({
  data: {
    allSanityProjects: { projects },
  },
}) => {
  const [selected, setSelected] = useState('')

  return (
    <Layout title='Work' url='/work' page='work'>
      <header className='header-title'>
        <h1 className='title-cash'>Work</h1>
        <ul className='work__projectList'>
          {projects.map(({ project }) => (
            <li key={project.id}>
              <button
                onClick={() => setSelected(project.id)}
                style={
                  project.id === selected
                    ? {
                        color: 'var(--color-blue)',
                        borderBottom: '1px solid var(--color-blue)',
                      }
                    : {}
                }>
                <span>{project.name}</span> <span>{project.date}</span>
              </button>
            </li>
          ))}
        </ul>
      </header>

      <button
        onClick={() => setSelected('')}
        className={`close-work ${selected ? 'open' : 'closed'}`}>
        close
      </button>

      {projects.map(({ project }) => (
        <ImageContainer
          key={project.id}
          title={project.name}
          description={project.description}
          year={project.date}
          image={project.images.image}
          altText={project.images.altText}
          objectFit='contain'
          display={project.id === selected ? 'block' : 'none'}
        />
      ))}
    </Layout>
  )
}

export default Work
