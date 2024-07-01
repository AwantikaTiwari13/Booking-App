import "./Home.css";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import Featured from "../../components/featured/featured"
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredPRoperty"
import MailList from "../../components/mailList/mailList"
import Footer from "../../components/Footer/footer";
const Home = () => {
    return ( 
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured></Featured>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer></Footer>
            </div>
        </div>
     );
} 
 
export default Home;