import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]); //second argument directs this hook to re-render the component upon change to the value of this 'currentCategory' state..

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
              data-testid="about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={
                //as long as 'currentCategory.name === category.name' is valuated to 'true' the "navActive" className is appiled/returned(it's a color change class)..
                `mx-1 ${
                  currentCategory.name === category.name &&
                  !contactSelected &&
                  "navActive"
                }`
              }
              key={category.name}
            >
              <span
                onClick={() => {
                  //for each catagory in the array this onClick 'listener' is placed on the the title in a span within a list element
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {/* //this is the actual name of the title you see in the nav bar */}
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
