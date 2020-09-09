import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

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
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const Experiments = ({
  data: {
    allSanityProjects: { projects },
  },
}) => {
  const [selected, setSelected] = useState('')

  return (
    <Layout title='Work' url='/work' page='work'>
      <div className='container-1'>
        <header className='header-title'>
          <h1 className='title-cash'>Work</h1>
          <ul className='work__projectList'>
            {projects.map(({ project }) => (
              <li
                key={project.id}
                // onMouseEnter={() => setSelected(project.id)}
                // onMouseLeave={() => setSelected('')}
                onClick={() => setSelected(project.id)}>
                <Link className='' to={`#`}>
                  <span>{project.name}</span> <span>{project.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </div>
      <div className='container-2'>
        {projects.map(({ project }) => (
          <div
            key={project.id}
            style={{
              display: `${project.id === selected ? 'block' : 'none'}`,
            }}>
            <ImageContainer
              title={project.name}
              description={project.description}
              year={project.date}
              image={project.images[0]}
              objectFit='contain'
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Experiments
