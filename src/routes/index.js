import { Routes, Route, Navigate } from "react-router-dom";

import Home from "~/pages/Home";
import Video from "~/pages/Video";

function RouteWrapper() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aula/:video" element={<Video />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RouteWrapper;
