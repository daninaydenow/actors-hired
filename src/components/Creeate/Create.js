import styles from './Create.module.css'
const Create = () => {
    return (
        <form id="create-form" method="POST">
            <div className={`card  ${styles.style}`}>
                <div className="row h-100 text-start">
                    <div className={`col-3 ps-3 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border} ${styles.imgsize} text-center mb-2`}>
                                <h2 className="mb-5">Create Portfolio</h2>
                                <label htmlFor="profileImg" className="mt-4"> Profile Image Url</label>
                                <input type="text" name="profileImg" className="form-control" />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="name" className="ps-2 pe-4 mt-1">Name</label>
                                <input type="text" name="name" className="form-control" />
                            </div>
                            <div className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}>
                                <label htmlFor="genre" className="ps-2 pe-4 mt-1">Genre</label>
                                <input type="text" name="genre" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className={`col-9 pe-3`}>
                        <div className={`h-100`}>
                            <div className={` ${styles.border}  ps-2 pt-2 h-50 mb-2`}>
                                <div className={`${styles.imgUrl}`}>
                                    <label htmlFor="imgOne">Image 1 Url</label>
                                    <input type="text" name="imgOne" className="form-control" />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgTwo">Image 2 Url</label>
                                    <input type="text" name="imgTwo" className="form-control" />
                                </div>
                                <div className={`${styles.imgUrl} mt-3`}>
                                    <label htmlFor="imgThree">Image 3 Url</label>
                                    <input type="text" name="imgThree" className="form-control" />
                                </div>
                            </div>
                            <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
                                <h4>Experience:</h4>
                                <textarea className="form-control" rows="5"></textarea>
                            </div>
                            <div className="text-center">
                                <button className={'btn btn-warning mt-5'}>Create Portfolio</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    )
}

export default Create;