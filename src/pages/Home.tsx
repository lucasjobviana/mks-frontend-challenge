import { HomeWrapper } from '../styles';
import { Header, Main , Footer, ShopMenu } from '../components';

export const Home = () => {
    return (
        <HomeWrapper>
            <Header />
            <Main />
            <Footer />   
            <ShopMenu />
        </HomeWrapper>
    )
}