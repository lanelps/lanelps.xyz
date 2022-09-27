import React from "react";

const NotFound = () => <div>404 Page not found :(</div>;

export default NotFound;

export const Head = () => {
  const seo = {
    title: `Gatsby Tinderbox`,
    description: `A simplified bare-bones starter for Gatsby`,
    domain: `https://example.com/404`,
    keywords: [`boilerplate`, `error`],
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    }
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
      <link rel="icon" type={seo?.favicon?.mimeType} href={seo?.favicon?.url} />

      {/* open graph/ twitter */}
      <meta property="og:title" content={seo?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo?.image?.url} />
      <meta property="og:url" content={seo?.domain} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
