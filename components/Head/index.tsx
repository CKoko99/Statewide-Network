import Head from "next/head";

type HeadComponentPropsType = {
  title: string;
  metaData: string;
}

const HeadComponent = ({ title, metaData }: HeadComponentPropsType) => {
  return (
    <Head>
      <title>{title || "Statewide Insurance"}</title>
      <meta name="description" content={metaData || "Statewide Insurance provides you with insurance coverage options, benefits and discounts at a price you can afford."} />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/sw-favicon.ico?alt=media&token=ac2dfddc-b5e2-4dae-9eab-14d602b002dc" />
      <meta name="google-site-verification" content="eBcP0RUizk4nbWiQlzGJKWaFZaPuYTm9Fzo2S954WJE" />
    </Head>
  )
}

export default HeadComponent;
