import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { validate } from "../../helpers/formValidator";
import * as actorService from "../../services/actorService";

import "./Edit.css";
const Edit = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const { actorId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if (formValues.length === 0) {
        actorService
          .getOne(actorId)
          .then((snapshot) => {
            setFormValues(snapshot.data());
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (Object.keys(formErrors).length === 0 && isSubmit) {
        actorService
          .update(actorId, formValues)
          .then(() => {
            navigate(`/details/${actorId}`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 1000);
  }, [actorId, formErrors, formValues, isSubmit, navigate]);

  const editPortfolioHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (e) => {
    console.log(formValues);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsSubmit(false);
  };

  const loadButton = (
    <button type="submit" className="btn">
      <i class="far fa-edit"></i>
      <span className="hide"> Loading ...</span>
    </button>
  );

  return (
    <>
      <form method="POST" onSubmit={editPortfolioHandler} className="edit-form">
        <div className="form-heading">
          <h1>Edit</h1>
        </div>
        <div className="inputs-container">
          <label htmlFor="profile-image">Profile Picture URL *</label>
          <input
            type="url"
            id="profile-image"
            name="profImgUrl"
            value={formValues.profImgUrl}
            onChange={onChangeHandler}
          />
          <p className="error">{formErrors.profImgUrl}</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={onChangeHandler}
          />
          <p className="error">{formErrors.name}</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formValues.age}
            onChange={onChangeHandler}
          />
          <p className="error">{formErrors.age}</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="genre">Genre *</label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={formValues.genre}
            onChange={onChangeHandler}
          />
          <p className="error">{formErrors.genre}</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="experience">Experience *</label>
          <textarea
            name="experience"
            id="experience"
            rows="10"
            value={formValues.experience}
            onChange={onChangeHandler}
          ></textarea>
          <p className="error">{formErrors.experience}</p>
        </div>
        <div className="inputs-container">
          <label htmlFor="porfolio-one">Portfolio Image Url</label>
          <input
            type="url"
            id="profile-one"
            name="imgOneUrl"
            value={formValues.imgOneUrl}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="porfolio-two">Portfolio Image Url</label>
          <input
            type="url"
            id="profile-two"
            name="imgTwoUrl"
            value={formValues.imgTwoUrl}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="porfolio-three">Portfolio Image Url</label>
          <input
            type="url"
            id="profile-three"
            name="imgThreeUrl"
            value={formValues.imgThreeUrl}
            onChange={onChangeHandler}
          />
        </div>
        <div className="edit-actions">
          {loading && loadButton}
          {loading || (
            <button type="submit" className="btn">
              <i class="far fa-edit"></i>
              <span className="hide"> Edit</span>
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Edit;
