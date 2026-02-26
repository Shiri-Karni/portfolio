import React from 'react';

const CVPage = () => (
    <div>
        <h2 className='middleHeadline'>My Resume</h2>
        <iframe src="/icons/CV - Shiri.pdf" width="100%" height="600px">
            <p>הדפדפן שלך לא תומך בתצוגה מקדימה. <a href="/icons/CV - Shiri.pdf">לחץ כאן להורדה</a></p>
        </iframe>
    </div>
);

export default CVPage;