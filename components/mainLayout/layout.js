import MobilenNav from './mobileNav';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div>
           <Header></Header>
            {props.children}
            <MobilenNav></MobilenNav>
            <Footer></Footer>
        </div>
    )
}

export default Layout;