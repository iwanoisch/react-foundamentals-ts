import React, {FunctionComponent} from "react";
import {RouteComponentProps} from "react-router";
import {mockAdminusersData, User} from "../../AdminUsersData";



const AdminUserComponent: React.FunctionComponent<RouteComponentProps<{id: string}>> = props => {

    let user: User;
    if(props.match.params.id) {
      const id: number = parseInt(props.match.params.id, 10);
      user = mockAdminusersData.filter(u => u.id === id)[0]

    } else {
        return null;
    }

    return (
        <div>
           <div>
               <b>Id: </b>
               <span>{user.id.toString()}</span>
           </div>
            <div>
                <b>Is Admin: </b>
                <span>{user.isAdmin.toString()}</span>
            </div>
        </div>
    );

}

export const AdminUser = AdminUserComponent;
