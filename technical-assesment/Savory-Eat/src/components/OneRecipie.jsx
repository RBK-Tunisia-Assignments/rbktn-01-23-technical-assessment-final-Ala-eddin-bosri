const OneRecipe = ({ one }) => {
  return (
    <div>
      <div className="recipe-content-area">
        <div className="container">
          <div className="recipe-header">
             <img width="500" height="600" src={one.recepie_Image} alt="Image of the recipe" />
            <div className="icon">
              <a href="/" aria-label="Add to favorites">
                <i className="fa fa-heart-o" />
              </a>
            </div>
          </div>
          <div className="recipe-details">
            <h1 className="food">{one.recepie_Name}</h1>
            <i className="fa fa-clock-o"> {one.Cook_Time} Mins</i>
            <i className="fa fa-users"> Serves {one.Serves}</i>

            <p className="info">{one.recepie_Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneRecipe;

