import { useEffect } from "react";

const PublitWebshop: React.FC = () => {
    useEffect (() => {
        const script = document.createElement("script");
        script.src = "https://webshop.publit.com/publit-webshop-1.0.js";
    script.async = true;
    script.setAttribute ("loading", "lazy");
    script.innerHTML = JSON.stringify({
      id: "5846",
      sortBy: "availible_date:desc",
    });
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div id="publit-webshop-container">
        <p>webshop</p>
    </div>
  )
    };

export default PublitWebshop;