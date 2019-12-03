import React from "react";
import {mockAdminusersData, User} from "../AdminUsersData";
import {NavLink, Route} from "react-router-dom";
import {AdminUser} from "./AdminUser/AdminUser";

export interface State {
    adminUserData: User[];
}

class AdminUsersComponent extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            adminUserData: [],
        }
    }

    public componentDidMount() {
        this.setState({adminUserData: mockAdminusersData})
    }
    render() {
        return (
            <div>
                <ul className='admin-sections'>
                    {this.state.adminUserData.map( user => (
                        <li key={user.id}>
                            <NavLink
                                to={`/admin/users/${user.id}`}
                                activeClassName='admin-link-active'
                            >
                                {user.name}
                            </NavLink>
                        </li>
                    ) )}
                </ul>
                <Route path='/admin/users/:id' component={AdminUser} />
            </div>
        );
    }
}

export const AdminUsers = AdminUsersComponent;
