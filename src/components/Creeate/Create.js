import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

import * as actorService from "../../services/actorService";
import { validate } from "../../helpers/formValidator";
import "./Create.css";

const initialFormValues = {
  profImgUrl: "",
  name: "",
  genre: "",
  imgOneUrl: "",
  imgTwoUrl: "",
  imgThreeUrl: "",
  experience: "",
};

const Create = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      actorService
        .create({ ...formValues, likes: [], _ownerId: currentUser.uid })
        .then(() => {
          navigate("/portfolios");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrors, isSubmit, currentUser, navigate, formValues]);

  const createPortfolioHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (e) => {
    console.log(formValues);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={createPortfolioHandler}
        className="create-form"
      >
        <div className="form-heading">
          <h1>Create</h1>
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
        <div className="create-actions">
          <button type="submit" className="btn">
            <i className="far fa-plus-square"></i>
            <span className="hide">Create</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
