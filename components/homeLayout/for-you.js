import CatPreview from '../global/category-preview'
import InfoCard from './components/infoCards'
import FeaturedItem from './components/featured-item'
import Subrcibe from '../global/subscribe'
import Hero from './components/hero'

const forYou = () => {

    return (
        <div>
            <Hero/>
            <InfoCard/>
            <CatPreview />
            <CatPreview />  
            <FeaturedItem/>
            <Subrcibe />
        </div>
        
    )
}

export default forYou;