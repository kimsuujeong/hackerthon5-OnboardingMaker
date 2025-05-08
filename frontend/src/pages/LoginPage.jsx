// src/LoginPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CssBaseline,
} from "@mui/material";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // 에러 메시지 상태

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(""); // 입력이 시작되면 에러 초기화
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // 제출 직전에 에러 초기화

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        form,
      );
      console.log("Response:", response.data);
      // TODO: 로그인 성공 처리(토큰 저장, 페이지 이동 등)
    } catch (err) {
      // 서버 응답 메시지 또는 기타 에러를 error 상태에 담는다
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "로그인에 실패했습니다.";
      setError(message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xs"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            로그인
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="이메일"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="비밀번호"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* 오류 메시지 */}
            {error && (
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            )}

            {/* 회원가입 링크 */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Link to="/signup">회원 가입</Link>
            </Box>

            {/* 로그인 버튼 */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              로그인
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
