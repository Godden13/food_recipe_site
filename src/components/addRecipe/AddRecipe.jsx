import { useEffect } from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import './AddRecipe.css';

export default function AddRecipe() {
  const [addInfo, setAddInfo] = useState(false);
  // const [url, setUrl] = useState('');
  const [recipeName, setRecipeName] = useState('');
  // const [value, setValue] = useState();

  // const upLoader = (file) => {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     localStorage.setItem('recent-image', reader.result);
  //     setUrl(localStorage.getItem('recent-image'));
  //   });
  //   reader.readAsDataURL(file);
  // };

  // const convert2base64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // const uploadImage = async (event) => {
  //   const file = event.target.files[0];
  //   const base64 = await convert2base64(file);
  //   console.log(base64);

  //   setValue(() => ({ image: base64 }));
  // };

  useEffect(() => {}, []);

  const toggleModal = () => {
    setAddInfo(!addInfo);
  };

  const recipeArr = JSON.parse(localStorage.getItem('recipe') || '[]');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const recipe = {
      name: target.name.value,
      description: target.description.value,
      recipe: target.recipe.value,
    };

    recipeArr.push(recipe);

    await localStorage.setItem(`${recipe.name}`, JSON.stringify(recipeArr));
    toggleModal();
  };

  const recipes = JSON.parse(localStorage.getItem(recipeArr));

  console.log(typeof recipes);

  return (
    <div className="addRecipe">
      <div className="recipesData">
        <div id="add" className="crudData" onClick={toggleModal}>
          <FaPlusCircle className="addItem" />
        </div>
        {recipes?.map((recipe) => {
          setRecipeName(recipe.name);
          return (
            <div className="crudData" key={recipe.name}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>{recipe.recipe}</p>
            </div>
          );
        })}
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
