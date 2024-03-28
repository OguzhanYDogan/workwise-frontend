import { useEffect, useState } from "react";
import photoExample from "../../assets/static/images/faces/2.jpg"
import axios from "axios";

function ProfileUpdate() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [photo, setPhoto] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const id = "ec8159d1-4388-4fb9-8b51-767b64273296";
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
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(uri + id + "&PhoneNumber=" + phone + "&Address=" + address, {
            //"Address": JSON.stringify(address),
            "Picture": JSON.stringify(selectedImage)
            // "PhoneNumber": JSON.stringify(phone)
        });
        alert("Güncellendi");
    }

    return (
        <>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    <div className="avatar avatar-2xl">
                                        <img src={selectedImage ? selectedImage : photoExample} alt="Avatar" />
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