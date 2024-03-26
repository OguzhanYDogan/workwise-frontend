import { useState } from "react";
import photo from "../../assets/static/images/faces/2.jpg"

function ProfileUpdate() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div id="main">
                <div id="app">
                    <div className='container'>
                        <header className="mb-3">
                            <a href="#" className="burger-btn d-block d-xl-none">
                                <i className="bi bi-justify fs-3"></i>
                            </a>
                        </header>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                            <div className="avatar avatar-2xl">
                                                <img src={selectedImage ? selectedImage : photo} alt="Avatar" />
                                            </div>
                                        </div>
                                        <label htmlFor="picture" className="form-label">Picture</label>
                                        <input type="file" id="picture" name="picture" className="form-control" onChange={handleFileChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">Phone</label>
                                                <input type="text" name="phone" id="phone" className="form-control" placeholder="5xxxxxxxxx" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="birthday" className="form-label">Address</label>
                                                <textarea rows={6} name="birthday" id="birthday" className="form-control" placeholder="Your Address.." />
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <button type="submit" className="btn btn-success">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileUpdate;