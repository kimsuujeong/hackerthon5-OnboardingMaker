import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import theme from "./theme"; // MUI 테마가 있으면

// 페이지 컴포넌트 lazy 로딩 (선택)
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중…</div>}>
        <Routes>
          {/* 기본 경로는 로그인으로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth 관련 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* 인증 필요 경로 */}
          {/* <Route */}
          {/*   path="/home" */}
          {/*   element={ */}
          {/*       <HomePage /> */}
          {/*   } */}
          {/* /> */}

          {/* 404 */}
          <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

