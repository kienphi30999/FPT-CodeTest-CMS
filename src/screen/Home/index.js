import React from "react";
import "./styles.css";

import Header from "component/Header";
import Body1 from "component/Body1";
import Body2 from "component/Body2";
import Footer from "component/Footer";

import { fetchApi } from "api";
import Loading from "component/Loading";

const Home = () => {
  const [config, setConfig] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      await fetchApi(
        "https://638df3824190defdb751f026.mockapi.io/config/1",
        "GET",
        (res) => {
          if (res) {
            setConfig(res);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    })();
  }, []);
  return (
    <>
      {config ? (
        <div className="wrapper">
          <Header
            headerName={config.headerName}
            headerMenu={config.headerMenu}
          />
          <Body1
            headerTitle={config.headerTitle}
            headerDescription={config.headerDescription}
            headerBtnText={config.headerBtnText}
            headerStatistic={config.headerStatistic}
          />
          <Body2
            bodyTitle={config.bodyTitle}
            bodyDescription={config.bodyDescription}
            leftBodyBtnText={config.leftBodyBtnText}
            rightBodyBtnText={config.rightBodyBtnText}
          />
          <Footer
            footerTitle={config.footerTitle}
            footerDescription={config.footerDescription}
            footerListCard={config.footerListCard}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
