import React from 'react';
import { graphql } from 'gatsby';
import tw, { css } from 'twin.macro';
import { useCSSMediaQuery } from '~hooks';

import Layout from '~components/Layout';
import Image from '~components/Image';
import Go from '~components/Go';
import PortableText from '~components/PortableText';
import SwiperCarousel from '~components/SwiperCarousel';

import { simple } from '../utils/serialisers';

const Project = ({ data: { sanityProject } }) => {
  const { isDesktop } = useCSSMediaQuery();

  return (
    <Layout title="Work" url="/work">
      <section tw="relative md:sticky flex flex-col items-stretch h-auto md:h-[calc(100vh - 16rem)] col-start-1 col-span-full md:col-span-6 top-0">
        <header tw="flex justify-between mb-4">
          <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium text-body mb-2">
            {sanityProject.name}
          </h1>

          <date tw="font-main font-medium text-body">{sanityProject.date}</date>
        </header>

        <ul tw="">
          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-body">Website</h3>

            <Go
              to={sanityProject.website}
              _css={[tw`font-main font-medium text-body`]}
              newTab
            >
              {sanityProject.website}
            </Go>
          </li>

          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-body">Role</h3>

            <p tw="font-main font-medium text-body">
              {sanityProject.role.map((job, index, array) => (
                <span>
                  {job}
                  {index !== array.length - 1 && `, `}
                </span>
              ))}
            </p>
          </li>

          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-body">Team</h3>

            <p tw="font-main font-medium text-body">
              {sanityProject.team.map((member, index, array) => (
                <span>
                  {member}
                  {index !== array.length - 1 && `, `}
                </span>
              ))}
            </p>
          </li>

          <li tw="">
            <h3 tw="font-main font-medium text-body mb-4">Description</h3>

            <PortableText
              blocks={sanityProject.description}
              serializer={simple}
            />
          </li>
        </ul>
      </section>

      <section tw="md:col-start-7 col-span-full md:col-span-6 order-first md:order-1 mb-16 md:mb-0">
        {sanityProject?.images[0] && (
          <>
            {isDesktop ? (
              <ul tw="relative w-full">
                {sanityProject.images.map(image => (
                  <li key={image._key} tw="mb-8">
                    <figure>
                      <Image image={image} />
                    </figure>
                  </li>
                ))}
              </ul>
            ) : (
              <SwiperCarousel
                options={{ loop: true }}
                slides={sanityProject.images.map(image => (
                  <figure>
                    <Image image={image} />
                  </figure>
                ))}
              />
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query ProjectQuery($id: String!) {
    sanityProject: sanityProjects(id: { eq: $id }) {
      name: projectName
      description: _rawProjectDescription
      date: projectDate(formatString: "YYYY")
      website
      role
      team
      images {
        _key
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        altText
      }
    }
  }
`;
