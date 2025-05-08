import React, { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직 추가
    console.log("Form Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-10 rounded-2xl shadow-md w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-600">
          로그인
        </h2>

        {/* 필드 컨테이너 */}
        <div className="bg-gray-300 p-8 rounded-lg mx-auto w-3/4 space-y-6">
          {/* 닉네임 */}
          <div>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleChange}
              className="w-full h-12 bg-gray-200 rounded-lg"
              placeholder="닉네임"
              required
            />
          </div>
          {/* 이메일 */}
          <div>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-12 bg-gray-200 rounded-lg"
              placeholder="이메일"
              required
            />
          </div>
          {/* 비밀번호 */}
          <div>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full h-12 bg-gray-200 rounded-lg"
              placeholder="비밀번호"
              required
            />
          </div>
        </div>

        {/* 관리자 체크박스 */}
        <div className="flex items-center justify-center mt-6">
          <input
            id="isAdmin"
            name="isAdmin"
            type="checkbox"
            checked={form.isAdmin}
            onChange={handleChange}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-400 rounded"
          />
          <label htmlFor="isAdmin" className="ml-2 text-gray-600">
            관리자 권한
          </label>
        </div>

        {/* 제출 버튼 */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}
