import Layout from "@/layouts/Layout";
import HomePage from "@/screen";
import MonthlyVideoProduction from "@/screen/monthly-video";
import OnDemadVideoProduction from "@/screen/on-demand-video";
import ContactUs from "@/screen/contact";

export const restaurantRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'monthly-video-production',
                element: <MonthlyVideoProduction />
            },
            {
                path: 'on-demand-video-production',
                element: <OnDemadVideoProduction />
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
        ]
    }
];

export default restaurantRoutes;