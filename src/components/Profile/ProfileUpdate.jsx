import React from "react";
import { useEffect, useState } from "react";
import photoExample from "../../assets/static/images/faces/2.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfileUpdate() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState(null);
    const [address, setAddress] = useState("");
    const id = "65342f61-6495-4d37-bc33-dda877e6e99e";
    const uri = "https://workwisewebapi.azurewebsites.net/api/user?id="

    useEffect(() => {
        Get();
    }, []);

    async function Get() {
        try {
            const response = await axios.get(uri + id);
            if (response.data && response.data.personalDetail) {
                setAddress(response.data.personalDetail.address);
                setPhone(response.data.phoneNumber);
                setSelectedImage(response.data.personalDetail.filePath);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await axios.put(uri + id + "&PhoneNumber=" + phone + "&Address=" + address, {
    //         //"Address": JSON.stringify(address),
    //         "Picture": JSON.stringify(selectedImage)
    //         // "PhoneNumber": JSON.stringify(phone)
    //     });
    //     alert("Güncellendi");
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('PhoneNumber', phone);
        formData.append('Address', address);
        formData.append('Picture', photo);

        try {
            const response = await axios.put(`${uri}${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            alert("Güncellendi");
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    return (
        <>
            <div className="row">
                <h1 className='fw-normal text-center'>Update Profile</h1>
                <hr />
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    <div className="avatar avatar-2xl">
                                        <img src={selectedImage ? selectedImage : ""} alt="Avatar" />
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
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="5xxxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="birthday" className="form-label">Address</label>
                                    <textarea rows={6} name="birthday" id="birthday" className="form-control" placeholder="Your Address.." value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileUpdate;