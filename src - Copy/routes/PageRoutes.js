import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EndPoints } from '../api/EndPointes';
import Navbar from '../components/Navbar'
import Form from '../service/Form';
import Notes from '../service/Home';
import Modify from '../service/Modify';
import Profile from '../service/Profile';
import Footer from '../components/footer';
import ErrorPage from '../service/404Page';

const PageRoutes = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route exact path={EndPoints.home} Component={Notes}></Route>
                    <Route exact path={EndPoints.form} Component={Form}></Route>
                    <Route exact path={EndPoints.modify} Component={Modify}></Route>
                    <Route exact path={EndPoints.profile} Component={Profile}></Route>
                    <Route exact path={EndPoints.errorPage} Component={ErrorPage}></Route>
                </Routes>
                <Footer />
            </div>
        </Router >
    );
}

export default PageRoutes;