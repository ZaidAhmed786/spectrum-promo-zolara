import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Internet Providers" />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.png" />
      <title>{pageTitle && `${pageTitle}`}</title>
    </Head>
  </>
);
 
export default SEO;
