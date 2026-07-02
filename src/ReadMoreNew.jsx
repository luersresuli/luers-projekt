import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReadMoreNew = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div>
            <p>
                Ky eshte paragrafi i pare.
            </p>

            {showText && (
                <p>Ky eshte paragrafi i dyte.</p>
            )}
            <Button variant="primary" onClick={() => setShowText(!showText)}>
                {showText ? 'Read Less' : 'Read More'}
            </Button>
        </div>
    );
};

export default ReadMoreNew;