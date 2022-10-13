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
import AppMapView from "./components/organisms/app-map-view";
import PicturePage from "./pages/picture-page";
import PlansPage from "./pages/plans-page";
import ContactPage from "./pages/contact-page";
import ContentPage from "./pages/content-page";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [building, setBuilding] = useState<any>({});
  const [modalMode, setModalMode] =
    useState<"video" | "360" | "location" | undefined>(undefined);

  const hdlNavigationBar = (element: string) => {
    setModalMode(undefined);
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

  const inContact = useMemo(
    () => location.pathname.includes("/building/contact"),
    [location.pathname]
  );
  const inGallery = useMemo(
    () => location.pathname.includes("/building/gallery"),
    [location.pathname]
  );
  const isDark = useMemo(
    () =>
      location.pathname.includes("/building/plans") ||
      location.pathname.includes("/building/project") ||
      location.pathname.includes("/building/architects") ||
      location.pathname.includes("/building/developers") ||
      location.pathname.includes("/building/datasheet") ||
      location.pathname.includes("/building/contact"),
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
      setModalMode(undefined);
      navigate(`building/${item}/${building?.id}`);
    }
  };

  const show360View = () => {
    setModalMode("360");
  };

  return (
    <AppContext.Provider value={{ building, buildings: BUILDINGS }}>
      <Splash />
      <AppMenu
        darkMode={modalMode !== undefined || inGallery || isDark}
        onClick={hdlNavigationBar}
        mode={appMenuMode}
      />
      {inABuilding && !inGallery && !inContact && (
        <AppFlyingMenu onItemClick={hdlFlyingMenuActions} />
      )}
      <SideMenu
        open={isMenuOpen}
        imgPath={building?.bigLogo}
        onClose={() => setMenuOpen(false)}
        onLogoClick={() => {
          navigate(`building/${building.id}`);
          setMenuOpen(false);
        }}
        onItemClick={(item) => {
          navigate(`building/${item}/${building.id}`);
          setMenuOpen(false);
        }}
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
        <Route path="/building/gallery/:id" element={<PicturePage />} />
        <Route path="/building/plans/:id" element={<PlansPage />} />
        <Route
          path="/building/project/:id"
          element={<ContentPage title="Project" />}
        />
        <Route
          path="/building/architects/:id"
          element={<ContentPage title="Architects" />}
        />
        <Route
          path="/building/developers/:id"
          element={<ContentPage title="Developers" />}
        />
        <Route
          path="/building/datasheet/:id"
          element={<ContentPage title="Datasheet" />}
        />
        <Route path="/building/contact/:id" element={<ContactPage />} />
      </Routes>
      {modalMode === "360" && <App360View />}
      {modalMode === "video" && <AppPlayerView />}
      {modalMode === "location" && <AppMapView />}
    </AppContext.Provider>
  );
}

export default App;
