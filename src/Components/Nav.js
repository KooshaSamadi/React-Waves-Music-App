import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
function Nav({ libraryStatus, setLibraryStatus }) {
  return (
    <nav>
      <h2>Wave</h2>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
}
export default Nav;
