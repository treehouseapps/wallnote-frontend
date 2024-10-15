import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="section profile">
            <div className="row">
                <div className="shadow border d-flex p-5 flex-column align-items-center probox">
                    <img src="clip.jpg" alt="Profile" className="rounded-circle" />
                    <h3>Tree House</h3>
                    <h4>Web Developer</h4>
                    <div className="social-links d-flex mt-2">
                        <Link href="#" className="twitter"><i className="bi bi-twitter"></i></Link>
                        <Link href="#" className="facebook"><i className="bi bi-facebook"></i></Link>
                        <Link href="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link href="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
                <div class="shadow border pt-2 max">

                    <div class="tab-pane fade show active profile-overview p-5" id="profile-overview" role="tabpanel">
                        <h5 class="card-title">About</h5>
                        <p class="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor.
                            Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                        <h5 class="card-title">Profile Details</h5>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label ">Full Name</div>
                            <div class="col-lg-12 col-md-8">Tree House</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-10 col-md-4 label">Company</div>
                            <div class="col-lg-12 col-md-8">TreeHouse</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label">Job</div>
                            <div class="col-lg-12 col-md-8">Web Developer</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label">Country</div>
                            <div class="col-lg-12 col-md-8">Ethiopia</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label">Address</div>
                            <div class="col-lg-12 col-md-8">Addis Abeba</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label">Phone</div>
                            <div class="col-lg-12 col-md-8">(+251) 912345678</div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-4 label">Email</div>
                            <div class="col-lg-12 col-md-8">treehouse@gmail.com</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;