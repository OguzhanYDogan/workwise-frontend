import { Link } from "react-router-dom";
import errorimg from "../../assets/compiled/svg/error-404.svg";

function Error() {
    return (
        <>
            <div class="error-page container">
                <div class="col-md-8 col-12 offset-md-2">
                    <div class="text-center">
                        <img class="img-error" src={errorimg} alt="Not Found" />
                        <h1 class="error-title">NOT FOUND</h1>
                        <p class='fs-5 text-gray-600'>The page you are looking not found.</p>
                        <Link to="/" class="btn btn-lg btn-outline-primary mt-3">Go Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;