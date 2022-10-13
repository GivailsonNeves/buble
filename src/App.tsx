import { useMemo, useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import AppFlyingMenu from "./components/organisms/app-flying-menu";
import AppMenu from "./components/organisms/app-menu";
import { HeaderMode } from "./components/organisms/app-menu/AppMenu";
import SideMenu from "./components/organisms/side-menu";
import Splash from "./components/organisms/splash";
import { BUILDINGS } from "./mock/data";
import BuildingPage from "./pages/building-page";
import BuildingDetailPage from "./pages/building-detail-page";
import HomePage from "./pages/home-page";
import StartPage from "./pages/start-page";
import AppContext from "./context/AppContext";

import PicturesPage from "./pages/pictures-page";
import App360View from "./components/organisms/app-360-view";
import AppPlayerView from "./components/organisms/app-player-view";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<any>({});
  const [modalMode, setModalMode] =
    useState<"video" | "360" | "map" | undefined>(undefined);

  const hdlNavigationBar = (element: string) => {
    if (element === "logo") {
      navigate("/");
    } else if (element === "menu") {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const id = location.pathname.split("/").pop();
    if (!!id && !isNaN(parseInt(id))) {
      const b = BUILDINGS.find((b) => (id ? b.id === parseInt(id) : undefined));
      if (b) {
        setBuilding(b);
      } else {
        setBuilding({});
      }
    } else {
      setBuilding({});
    }
  }, [location.pathname]);

  const inABuilding = useMemo(
    () => location.pathname.includes("/building/"),
    [location.pathname]
  );

  const appMenuMode = useMemo(() => {
    setModalMode(undefined);
    return location.pathname.includes("/building/")
      ? HeaderMode.user
      : HeaderMode.none;
  }, [location.pathname]);

  const hdlFlyingMenuActions = (item: string) => {
    console.log(item);
    if (["video", "location"].includes(item)) {
      //@ts-ignore
      setModalMode(item);
    } else {
      navigate(`building/${item}/${building?.id}`);
    }
  };

  const show360View = () => {
    setModalMode("360");
  };

  return (
    <AppContext.Provider value={{ building, buildings: BUILDINGS }}>
      <Splash />
      <AppMenu onClick={hdlNavigationBar} mode={appMenuMode} />
      {inABuilding && <AppFlyingMenu onItemClick={hdlFlyingMenuActions} />}
      <SideMenu
        open={isMenuOpen}
        imgPath={building?.bigLogo}
        onClose={() => setMenuOpen(false)}
        onItemClick={console.log}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start/:id" element={<StartPage />} />
        <Route
          path="/building/:id"
          element={<BuildingPage on360View={show360View} />}
        />
        <Route path="/building/detail/:id" element={<BuildingDetailPage />} />
        <Route path="/building/pictures/:id" element={<PicturesPage />} />
      </Routes>
      {modalMode === "360" && <App360View />}
      {modalMode === "video" && <AppPlayerView />}
    </AppContext.Provider>
  );
}

export default App;
