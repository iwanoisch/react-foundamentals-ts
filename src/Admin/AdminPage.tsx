import React from 'react';


class AdminPageComponent extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="page-container">
                <h1>Admin Panel</h1>
                <p>You should only be here if you have logged in</p>
            </div>
        )
    }
}

export const AdminPage = AdminPageComponent;

