import { capitalizeFirstLetter } from "../../utils/helpers.js";
import PhotoList from "../PhotoList";

const Gallery = ({ currentCategory }) => {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
};

export default Gallery;

// {gallerySelected ? (
//   <>
// <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
//       <p>{description}</p>
//       <PhotoList category={currentCategory.name} />
//     </section>
//   </>
// ) : (

// )}
