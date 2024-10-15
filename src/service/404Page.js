import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

            <img src="clip.jpg" alt="Profile" className="rounded-circle" />
            <h2>404 Page Notfound !</h2>
            <h3>Treehouse</h3>
            <div className="social-links mt-2">
                <Link href="#" className="p-2 twitter"><i className="bi bi-twitter"></i></Link>
                <Link href="#" className="p-2 facebook"><i className="bi bi-facebook"></i></Link>
                <Link href="#" className="p-2 instagram"><i className="bi bi-instagram"></i></Link>
                <Link href="#" className="p-2 linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
        </div>
    );
}

export default ErrorPage;