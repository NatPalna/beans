import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { FactsPage } from "./pages/Facts/Facts";
import { BeansPage } from "./pages/Beans";
import { RecipesPage } from "./pages/Recipes";
import { store } from "./Redux/store";
import { CombinationsPage } from "./pages/Combinations";
import { Home } from "./pages/Home";
import { HistoryPage } from "./pages/History";
import { BeanPage } from "./pages/BeanPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beans" element={<BeansPage />} />
            <Route path="/facts" element={<FactsPage />} />
            <Route path="/bean/:id" element={<BeanPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/combinations" element={<CombinationsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
