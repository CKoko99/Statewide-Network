import Script from 'next/script';



const MeasurementID = process.env.NODE_ENV === "development" ? "" : "G-4M8VZ8E6GQ"
export default function () {
    return <>
        <Script async
            strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${MeasurementID}`}
        />
        <Script
            async
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${MeasurementID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
    </>
}