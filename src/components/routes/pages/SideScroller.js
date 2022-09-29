import Page from "../../utils/Page";

import "./style.css";

const SideScroller = () => {
  const content = <div className="content side-scroller">SideScroller</div>;

  return <Page content={content} />;
};

export default SideScroller;
