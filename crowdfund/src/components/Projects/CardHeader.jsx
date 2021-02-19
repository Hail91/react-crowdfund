import React from "react";
// Imports
import { ReactComponent as ProjectLogo } from "../../images/logo-mastercraft.svg";
import { ReactComponent as BookmarkLogo } from "../../images/icon-bookmark.svg";

const CardHeader = () => {
  return (
    <div className="project-card-header">
      <ProjectLogo className="project-card-logo" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="card-header-btns">
        <button className="back-project">Back this project</button>
        <button className="bookmark-project">
          <BookmarkLogo className="Bookmark-logo" /> <span>Bookmark</span>
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
