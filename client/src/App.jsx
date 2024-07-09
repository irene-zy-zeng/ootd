import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClosetPage from "./pages/ClosetPage/ClosetPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import EditDetailsPage from "./pages/EditDetailsPage/EditDetailsPage";
import OutfitPage from "./pages/OutfitPage/OutfitPage";
import AddOutfitPage from "./pages/AddOutfitPage/AddOutfitPage";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ClosetPage />} />

          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/closet/:id" element={<ItemDetailsPage />} />
          <Route path="/closet/:id/edit" element={<EditDetailsPage />} />
          <Route path="/upload" element={<UploadPage />} />

          <Route path="/outfit" element={<OutfitPage />} />
          <Route path="/outfit/new" element={<AddOutfitPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
