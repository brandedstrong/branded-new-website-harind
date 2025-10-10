import React from 'react';
import { useFont } from '../hooks/useFont';

const UbuntuFontExample: React.FC = () => {
    const ubuntuLight = useFont('ubuntu-light');
    const ubuntuRegular = useFont('ubuntu-regular');
    const ubuntuMedium = useFont('ubuntu-medium');
    const ubuntuBold = useFont('ubuntu-bold');

    return (
        <div className="p-8 bg-dark-950 text-white">
            <h1 className="font-ubuntu-bold text-4xl mb-6">
                Ubuntu Font Examples
            </h1>

            {/* Using Tailwind classes */}
            <div className="space-y-4 mb-8">
                <h2 className="font-ubuntu-light text-2xl">Light Ubuntu (300)</h2>
                <h3 className="font-ubuntu-regular text-xl">Regular Ubuntu (400)</h3>
                <h4 className="font-ubuntu-medium text-lg">Medium Ubuntu (500)</h4>
                <h5 className="font-ubuntu-bold text-base">Bold Ubuntu (700)</h5>
            </div>

            {/* Using useFont hook */}
            <div className="space-y-4 mb-8">
                <p style={ubuntuLight.style} className="text-lg">
                    This text uses Ubuntu Light via useFont hook
                </p>
                <p style={ubuntuRegular.style} className="text-lg">
                    This text uses Ubuntu Regular via useFont hook
                </p>
                <p style={ubuntuMedium.style} className="text-lg">
                    This text uses Ubuntu Medium via useFont hook
                </p>
                <p style={ubuntuBold.style} className="text-lg">
                    This text uses Ubuntu Bold via useFont hook
                </p>
            </div>

            {/* Combining with other styles */}
            <div className="space-y-4">
                <div className="font-ubuntu-medium text-primary-500 bg-primary-50 p-4 rounded-lg">
                    Ubuntu Medium with primary color
                </div>
                <div className="font-ubuntu-bold text-success-500 bg-success-50 p-4 rounded-lg">
                    Ubuntu Bold with success color
                </div>
                <div className="font-ubuntu-light text-warning-500 bg-warning-50 p-4 rounded-lg">
                    Ubuntu Light with warning color
                </div>
            </div>
        </div>
    );
};

export default UbuntuFontExample;
