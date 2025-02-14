import { Route, Routes } from "react-router";

import Builder from "./pages/Builder";
import ListPage from "./pages/ListPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/builder/:surveyId" element={<Builder />} />
            </Routes>
        </div>
    );
}

export default App;
