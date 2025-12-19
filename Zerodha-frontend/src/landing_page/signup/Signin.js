import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/signin", formData);
      if (res.data?.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "http://localhost:3001";
      } else {
        setError(res.data?.error || "SignIn failed");
      }
    } catch (err) {
      setError(err.response?.data?.error || "SignIn failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container p-5 "
      style={{ width: "40%", border: "2px solid #424242" }}
    >
      <form onSubmit={onSubmit}>
        <div class="mb-3">
          <label for="" class="form-label fs-5">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label fs-5">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            value={formData.password}
            onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary fs-5 mb-5"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <a
        href="/signup"
        className="fs-4 text-center p-1"
        style={{ width: "40%", textDecoration: "none" }}
      >
        i don't have account.
      </a>
    </div>
  );
}

export default Signin;
