import { useState } from "react";

import "./style.css";

const Page = ({ content }) => {
  const [pageFull, togglePageFull] = useState(false);

  return (
    <div className={`page ${pageFull && "page-full"}`}>
      <div className="page-container">
        <div className="page-content">{content}</div>
        <div className="page-toggle" onClick={() => togglePageFull(!pageFull)}>
          <div className="page-toggle-hover-text">
            {pageFull && "exit"} fullscreen
          </div>
          <div className="page-toggle-lines">
            <div className="page-toggle-line page-toggle-line-1"></div>
            <div className="page-toggle-line page-toggle-line-2"></div>
            <div className="page-toggle-line page-toggle-line-3"></div>
            <div className="page-toggle-line page-toggle-line-4"></div>
            <div className="page-toggle-line page-toggle-line-5"></div>
            <div className="page-toggle-line page-toggle-line-6"></div>
            <div className="page-toggle-line page-toggle-line-7"></div>
            <div className="page-toggle-line page-toggle-line-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
