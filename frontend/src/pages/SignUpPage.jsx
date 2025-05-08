import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Box,
} from "@mui/material";

function SignUpPage() {
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const [error, setError] = useState(""); // 에러 메시지 상태

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nickname, email, password, isAdmin } = form;

    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        nickname,
        email,
        password,
        isAdmin,
      });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "로그인에 실패했습니다.";
      setError(message);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          회원가입
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField
            label="닉네임"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            fullWidth
            required
          />
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
          <FormControlLabel
            control={
              <Checkbox
                checked={form.isAdmin}
                onChange={handleChange}
                name="isAdmin"
              />
            }
            label="관리자 권한"
          />
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            회원가입
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default SignUpPage;
