import { useEffect } from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import './AddRecipe.css';

export default function AddRecipe() {
  const [addInfo, setAddInfo] = useState(false);
  const [url, setUrl] = useState('');
  const [recipeName, setRecipeName] = useState('');

  const upLoader = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('recent-image', reader.result);
      setUrl(localStorage.getItem('recent-image'));
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {}, []);

  const toggleModal = () => {
    setAddInfo(!addInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const recipe = {
      name: target.name.value,
      description: target.description.value,
      recipe: target.recipe.value,
      // image: getBase64Image(target.image.value),
    };
    await localStorage.setItem(`${recipeName}`, JSON.stringify(recipe));
    toggleModal();
  };

  const recipes = JSON.parse(localStorage.getItem('recipe'));

  console.log(typeof recipes);

  return (
    <div className="addRecipe">
      <div className="recipesData">
        <div id="add" className="crudData" onClick={toggleModal}>
          <FaPlusCircle className="addItem" />
        </div>
        {/* {recipes?.map((recipe) => {
          setRecipeName(recipe.name);
          return (
            <div className="crudData" key={recipe.name}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>{recipe.recipe}</p>
            </div>
          );
        })} */}
        {/* <div className="crudData">
          <h3>{recipes.name}</h3>
          <p>{recipes.description}</p>
          <p>{recipes.recipe}</p>
        </div> */}
      </div>

      {addInfo && (
        <div className="modal">
          <div className="overLay">
            <form className="addData" onSubmit={handleSubmit}>
              <h2>Add a meal</h2>
              <div className="signupCard">
                <h2>Name</h2>
                <input type="text" placeholder="name" name="name" required />
              </div>
              <div className="signupCard">
                <h2>Description</h2>
                <textarea
                  type="text"
                  placeholder="description"
                  name="description"
                  required
                />
              </div>
              <div className="signupCard">
                <h2>Recipe</h2>
                <textarea
                  type="text"
                  placeholder="recipe"
                  name="recipe"
                  required
                />
              </div>
              <div className="signupCard">
                <h2>Add image</h2>
                <input type="file" placeholder="image" name="image" required />
              </div>

              <button type="submit" className="add">
                Add
              </button>
              <button type="button" className="close" onClick={toggleModal}>
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
