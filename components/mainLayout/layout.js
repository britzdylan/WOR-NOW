import Botnav from './botNav';
import MobAppbar from './MobAppbar';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div>
           <MobAppbar></MobAppbar>
            {props.children}
            <Botnav></Botnav>
            <Footer></Footer>
        </div>
    )
}

export default Layout;