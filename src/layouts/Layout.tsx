import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen">
            <ScrollToTop />
            {/* Main content */}
            <div >
                <main>
                    <Outlet />

                    {/* Footer Section */}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;


