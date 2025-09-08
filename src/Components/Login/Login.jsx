// Login.jsx
import React, { useState } from "react";

/**
 * Props:
 * - onSubmit?: async ({ email, password }) => void  // call your login API
 * - loading?: boolean                                // show loading state
 * - error?: string                                   // show server error (e.g. "Invalid credentials")
 *
 * Example:
 * <Login
 *   onSubmit={async ({email, password}) => {
 *     // await api.post('/auth/login', { email, password })
 *   }}
 *   loading={authLoading}
 *   error={authError}
 * />
 */
export default function Login({ onSubmit, loading = false, error = "" }) {
  const [email, setEmail] = useState("admin@foodease.com");
  const [password, setPassword] = useState("admin123");
  const [showPw, setShowPw] = useState(false);
  const [localErr, setLocalErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLocalErr("");
    if (!email || !password) {
      setLocalErr("Please enter email and password.");
      return;
    }
    try {
      if (onSubmit) {
        await onSubmit({ email, password });
      }
    } catch (e) {
      // if parent doesn't pass `error`, we can still show something
      setLocalErr(
        typeof e === "string"
          ? e
          : e?.response?.data?.error || "Login failed. Please try again."
      );
    }
  }

  return (
    <div className="fe-login-wrap">
      <style>{styles}</style>

      <div className="fe-card">
        <h1 className="fe-title">Welcome back</h1>
        <p className="fe-sub">
          Sign in to manage products, categories, banners, content, coupons and users.
        </p>

        <form onSubmit={handleSubmit} className="fe-form" noValidate>
          <label className="fe-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="fe-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label className="fe-label" htmlFor="password">Password</label>
          <div className="fe-pw-wrap">
            <input
              id="password"
              className="fe-input fe-input-pw"
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="fe-eye"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? "🙈" : "👁️"}
            </button>
          </div>

          {(error || localErr) && (
            <div className="fe-error" role="alert" aria-live="polite">
              {error || localErr}
            </div>
          )}

          <button className="fe-btn" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <p className="fe-tip">
            Tip: use your backend’s default admin from <code>.env</code>.
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = `
:root{
  --bg:#0b1020;
  --panel:#111936;
  --panel-2:#0f1530;
  --text:#e6e9f2;
  --muted:#9aa2b2;
  --accent:#34d399;
  --danger:#ef4444;
}

.fe-login-wrap{
  min-height:100vh;
  display:grid;
  place-items:center;
  background:linear-gradient(180deg,#0a0f1f,#0b1020);
  color:var(--text);
  padding:24px;
  font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;
}

.fe-card{
  width:100%;
  max-width:520px;
  background:linear-gradient(160deg,var(--panel),var(--panel-2));
  border:1px solid rgba(255,255,255,0.08);
  border-radius:16px;
  box-shadow:0 10px 30px rgba(0,0,0,0.35) inset, 0 10px 35px rgba(0,0,0,0.2);
  padding:28px;
}

.fe-title{
  margin:0 0 6px 0;
  font-size:28px;
  letter-spacing:.2px;
}
.fe-sub{
  margin:0 0 18px 0;
  color:var(--muted);
}

.fe-form{
  display:grid;
  gap:12px;
}
.fe-label{
  font-size:12.5px;
  color:var(--muted);
}
.fe-input{
  width:100%;
  padding:12px 14px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.08);
  background:#0d1328;
  color:var(--text);
  outline:none;
  transition:border-color .15s ease;
}
.fe-input:focus{ border-color:var(--accent); }

.fe-pw-wrap{ position:relative; }
.fe-input-pw{ padding-right:46px; }
.fe-eye{
  position:absolute;
  right:8px; top:50%;
  transform:translateY(-50%);
  background:transparent;
  border:none;
  font-size:18px;
  cursor:pointer;
  opacity:.8;
}

.fe-btn{
  margin-top:6px;
  background:var(--accent);
  color:#062a22;
  border:none;
  border-radius:10px;
  padding:12px 16px;
  font-weight:700;
  cursor:pointer;
  transition:transform .15s ease, filter .15s ease;
}
.fe-btn:hover{ transform:translateY(-1px); }
.fe-btn:disabled{ filter:grayscale(.3); cursor:not-allowed; }

.fe-error{
  margin-top:4px;
  color:var(--danger);
  font-size:14px;
}

.fe-tip{
  opacity:.65;
  margin-top:12px;
  font-size:12.5px;
}
`;
