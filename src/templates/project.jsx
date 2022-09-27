import React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";
import { v4 as uuidv4 } from "uuid";

import { Layout, Grid, Image, Go, PortableText, Carousel } from "~components";
import { useDevice } from "~hooks";

const Header = tw.header`w-full col-span-full flex justify-between py-2.5 border-b border-white font-main text-main text-white uppercase`;
const GridItem = tw.div`relative w-full col-span-full block md-t:flex justify-between py-2.5 border-b border-white font-main text-main text-white uppercase`;
const ItemHead = tw.h3`mb-2.5`;
const ImageWrapper = tw.div`w-full col-span-full md-t:col-start-2 md-t:col-span-2`;

const Project = ({ data: { sanityProject } }) => {
  const { deviceAbove } = useDevice();

  return (
    <Layout>
      <Grid css={[tw`gap-y-0! sticky! top-0 mix-blend-difference`]}>
        <Header>
          <h1>{sanityProject?.name}</h1>

          <time dateTime={sanityProject?.date}>{sanityProject?.date}</time>
        </Header>

        <GridItem>
          <ItemHead>Website</ItemHead>

          <Go to={sanityProject?.website} newTab>
            {sanityProject?.website}
          </Go>
        </GridItem>

        <GridItem>
          <ItemHead>Role</ItemHead>

          <p>
            {sanityProject?.role.map((job, index, array) => (
              <span key={uuidv4()} tw="text-white">
                {job}
                {index !== array.length - 1 && `, `}
              </span>
            ))}
          </p>
        </GridItem>

        <GridItem>
          <ItemHead>Team</ItemHead>

          <p>
            {sanityProject?.team.map((member, index, array) => (
              <span key={uuidv4()}>
                {member}
                {index !== array.length - 1 && `, `}
              </span>
            ))}
          </p>
        </GridItem>

        <GridItem tw="border-none">
          <h3>Description</h3>
        </GridItem>

        <PortableText
          blocks={sanityProject?.description}
          tw="col-span-full md-t:col-span-1"
        />
      </Grid>

      <Grid tw="relative md-t:absolute md-t:top-[2.6875rem] w-full mt-2.5! md-t:mt-0! md-t:z-[-1]!">
        <ImageWrapper>
          {sanityProject?.images[0] && (
            <>
              {deviceAbove(`sm-t`) ? (
                <ul tw="relative w-full">
                  {sanityProject?.images.map((image) => (
                    <li key={image?._key} tw="mb-8">
                      <figure>
                        <Image image={image} />
                      </figure>
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <Carousel
                    slides={() =>
                      sanityProject.images.map((image) => {
                        const { width, height } = image.asset.gatsbyImageData;
                        const widthRatio = width / height;

                        return (
                          <figure>
                            <Image
                              image={image}
                              css={[
                                tw``,
                                css`
                                  width: calc(${widthRatio} * 48.6vw);
                                  height: 48.6vw;
                                `
                              ]}
                            />
                          </figure>
                        );
                      })
                    }
                    spaceBetween="0.625rem"
                  />
                </>
              )}
            </>
          )}
        </ImageWrapper>
      </Grid>
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
