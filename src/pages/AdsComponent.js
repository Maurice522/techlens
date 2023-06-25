import React, { useEffect  } from 'react';

export default class AdsComponent extends React.Component {
    componentDidMount() {
      const installGoogleAds = () => {
        const elem = document.createElement("script");
        elem.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7283129222281584";
        elem.async = true;
        elem.defer = true;

        document.body.insertBefore(elem, document.body.firstChild);
      };
      installGoogleAds();
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render(){
    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-adtest="on" 
                data-ad-client="ca-pub-7283129222281584"
                data-ad-slot="7810258282"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
    }
};
