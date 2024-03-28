
import { Link } from "react-router-dom";
import single from "../../assets/compiled/jpg/motorcycle.jpg";

function CompanyCard() {
    return (
        <>
            <div className="col-xl-4 col-md-6 col-sm-12">
                <Link to="/company-profile">
                    <div className="card">
                        <div className="card-content">
                            <img src={single} className="card-img-top img-fluid"
                                alt="singleminded" />
                            <div className="card-body">
                                <h5 className="card-title">Be Single Minded</h5>
                                <p className="card-text">
                                    Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                    bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default CompanyCard;