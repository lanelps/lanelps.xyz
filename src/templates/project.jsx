import React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import { Layout, Image, Go, PortableText, SwiperCarousel } from "~components";
import { useDevice } from "~hooks";

const Project = ({ data: { sanityProject } }) => {
  const { isDesktop } = useDevice();

  return (
    <Layout title="Work" url="/work">
      <section tw="relative lg-t:sticky flex flex-col items-stretch h-auto lg-t:h-[calc(100vh - 16rem)] col-start-1 col-span-full lg-t:col-span-6 top-0">
        <header tw="flex justify-between mb-4">
          <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium text-main mb-2">
            {sanityProject.name}
          </h1>

          <date tw="font-main font-medium text-main">{sanityProject.date}</date>
        </header>

        <ul tw="">
          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-main">Website</h3>

            <Go
              to={sanityProject.website}
              css={[tw`font-main font-medium text-main`]}
              newTab
            >
              {sanityProject.website}
            </Go>
          </li>

          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-main">Role</h3>

            <p tw="font-main font-medium text-main">
              {sanityProject.role.map((job, index, array) => (
                <span>
                  {job}
                  {index !== array.length - 1 && `, `}
                </span>
              ))}
            </p>
          </li>

          <li tw="flex justify-between mb-3 pb-1 border-b">
            <h3 tw="font-main font-medium text-main">Team</h3>

            <p tw="font-main font-medium text-main">
              {sanityProject.team.map((member, index, array) => (
                <span>
                  {member}
                  {index !== array.length - 1 && `, `}
                </span>
              ))}
            </p>
          </li>

          <li tw="">
            <h3 tw="font-main font-medium text-main mb-4">Description</h3>

            <PortableText blocks={sanityProject.description} />
          </li>
        </ul>
      </section>

      <section tw="lg-t:col-start-7 col-span-full lg-t:col-span-6 order-first lg-t:order-1 mb-16 lg-t:mb-0">
        {sanityProject?.images[0] && (
          <>
            {isDesktop ? (
              <ul tw="relative w-full">
                {sanityProject.images.map((image) => (
                  <li key={image._key} tw="mb-8">
                    <figure>
                      <Image image={image} />
                    </figure>
                  </li>
                ))}
              </ul>
            ) : (
              <SwiperCarousel
                options={{ loop: true, simulateTouch: true }}
                slides={sanityProject.images.map((image) => (
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

export const Head = () => {
  const seo = {
    description: ``,
    domain: `https://lanelps.xyz/work/project`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    image: ``,
    keywords: [``],
    robots: `index, follow`,
    title: `Project`
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
      <meta name="robots" content={seo?.robots} />
      <meta name="googlebot" content={seo?.robots} />
      <link rel="canonical" href={seo.domain} />
      <link rel="icon" type={seo?.favicon?.mimeType} href={seo?.favicon?.url} />

      {/* open graph/ twitter */}
      <meta property="og:title" content={seo?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:url" content={seo.domain} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
