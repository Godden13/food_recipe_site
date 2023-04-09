import './AddRecipe.css';

export default function AddREcipe() {
  const [add, setAdd] = useState(false);

  return (
    <div className="addRecipe">
      <button type="submit" className="addBtn">
        Add Recipe
      </button>

      {add && (
        <form className="modal">
          <div className="overlay">
            <div className="adder">
              <h2>Add Recipe</h2>
              <div className="inputs">
                <input type="text" id="dishName" />
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
