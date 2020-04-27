import * as React from 'react';
import WeatherContainer from "../../containers/WeatherContainer";

const MainLayout: React.FC = () => {
  return (
    <main className="main-layout">
      <WeatherContainer />
    </main>
  )
}

export default MainLayout;
