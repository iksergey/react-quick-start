import React from 'react';

const FooterItem = () => {
    return (
        <div>
            <p className="m-3">&copy; Все права..., {new Date().getFullYear()}</p>
        </div>
    );
}
export default FooterItem;