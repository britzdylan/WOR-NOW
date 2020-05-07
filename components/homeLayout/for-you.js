import CatPreview from '../global/category-preview'
import InfoCard from './components/infoCards'
import FeaturedItem from './components/featured-item'
import Subrcibe from '../global/subscribe'

const forYou = () => {

    return (
        <div>
            <CatPreview />
            <CatPreview />
            <InfoCard/>
            <FeaturedItem/>
            <Subrcibe />
        </div>
        
    )
}

export default forYou;