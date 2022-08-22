import { Header } from '../shared/Header/Header';
import { Footer } from '../shared/Footer/Footer';

type LayoutProps = {
    children: React.ReactNode;
};


export const Layout = (props: LayoutProps) => {
    return (
        <>
            <Header/>
            {props.children}

            <Footer/>
        </>
    )
}

export default Layout;

