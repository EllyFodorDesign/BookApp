import  { useState } from "react";
import type { ReactNode } from "react";

function PasswordGate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(
    sessionStorage.getItem("ok") === "true"
  );
  const [pw, setPw] = useState("");


  if (ok) return children;


  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <button
          onClick={() => {
            if (pw === import.meta.env.VITE_SITE_PASSWORD) {
              sessionStorage.setItem("ok", "true");
              setOk(true);
            }
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default PasswordGate;



