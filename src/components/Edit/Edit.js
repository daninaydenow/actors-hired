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
    <button className="btn btn-warning mt-5" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
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
          <button type="submit" className="btn">
            <i class="far fa-edit"></i>
            <span className="hide"> Edit</span>
          </button>
        </div>
      </form>
    </>
    // <form id="edit-form" method="POST" onSubmit={editPortfolioHandler}>
    //   <div className={`card  ${styles.style}`}>
    //     <div className="row h-100 text-start">
    //       <div className={`col-3 ps-3 pe-3`}>
    //         <div className={`h-100`}>
    //           <div
    //             className={` ${styles.border} ${styles.imgsize} text-center mb-2`}
    //           >
    //             <h2 className="mb-5">Edit Portfolio</h2>
    //             <label htmlFor="profImgUrl" className="mt-4">
    //               {" "}
    //               Profile Image Url <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="profImgUrl"
    //               className="form-control"
    //               value={formValues.profImgUrl}
    //               onChange={onChangeHandler}
    //             />
    //             <span className="text-danger">{formErrors.profImgUrl}</span>
    //           </div>
    //           <div
    //             className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}
    //           >
    //             <label htmlFor="name" className="ps-2 pe-4 mt-1">
    //               Name <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="name"
    //               className="form-control"
    //               value={formValues.name}
    //               onChange={onChangeHandler}
    //             />
    //             <span className="text-danger">{formErrors.name}</span>
    //           </div>
    //           <div
    //             className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}
    //           >
    //             <label htmlFor="genre" className="ps-2 pe-4 mt-1">
    //               Genre <span className="text-danger">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="genre"
    //               className="form-control"
    //               value={formValues.genre}
    //               onChange={onChangeHandler}
    //             />
    //             <span className="text-danger">{formErrors.genre}</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={`col-9 pe-3`}>
    //         <div className={`h-100`}>
    //           <div className={` ${styles.border}  ps-2 pt-2 h-50 mb-2`}>
    //             <div className={`${styles.imgUrl}`}>
    //               <label htmlFor="imgOneUrl">Image 1 Url</label>
    //               <input
    //                 type="text"
    //                 name="imgOneUrl"
    //                 className="form-control"
    //                 value={formValues.imgOneUrl}
    //                 onChange={onChangeHandler}
    //               />
    //               <span className="text-danger">{formErrors.imgOneUrl}</span>
    //             </div>
    //             <div className={`${styles.imgUrl} mt-3`}>
    //               <label htmlFor="imgTwoUrl">Image 2 Url</label>
    //               <input
    //                 type="text"
    //                 name="imgTwoUrl"
    //                 className="form-control"
    //                 value={formValues.imgTwoUrl}
    //                 onChange={onChangeHandler}
    //               />
    //               <span className="text-danger">{formErrors.imgTwoUrl}</span>
    //             </div>
    //             <div className={`${styles.imgUrl} mt-3`}>
    //               <label htmlFor="imgThreeUrl">Image 3 Url</label>
    //               <input
    //                 type="text"
    //                 name="imgThreeUrl"
    //                 className="form-control"
    //                 value={formValues.imgThreeUrl}
    //                 onChange={onChangeHandler}
    //               />
    //               <span className="text-danger">{formErrors.imgThreeUrl}</span>
    //             </div>
    //           </div>
    //           <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
    //             <h4>
    //               Experience: <span className="text-danger">*</span>
    //             </h4>
    //             <textarea
    //               className="form-control"
    //               rows="5"
    //               name="experience"
    //               value={formValues.experience}
    //               onChange={onChangeHandler}
    //             />
    //             <span className="text-danger">{formErrors.experience}</span>
    //           </div>
    //           <div className="text-center">
    //             {loading ? (
    //               loadButton
    //             ) : (
    //               <button className={"btn btn-warning mt-5"}>
    //                 Edit Portfolio
    //               </button>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
};

export default Edit;
