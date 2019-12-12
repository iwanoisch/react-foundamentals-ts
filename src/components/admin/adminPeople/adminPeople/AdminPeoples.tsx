import React from "react";
import {AppState} from "../../../../store/Store";
import {getPeoples} from "../../../../store/admin/AdminPeoplesActions";
import {connect} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {People} from "../../../../store/admin/AdminPeoplesTypes";
import WithLoader from "../../../common/loader/WithLoader";


interface Props {
    loading: boolean;
    peoples: People[] | null;
}


class AdminPeoplesComponent extends React.Component<Props> {

    render() {
        const peoples = this.props.peoples;
        return (
            <List component="nav" aria-label="secondary mailbox folders">
                {peoples && peoples.map(
                    people => {
                        if (people){
                            return (
                                <ListItem key={people.id} alignItems="center" button>
                                    <ListItemText  className='displayCenter' primary={people.id} secondary={
                                        <Typography

                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            {people.name}
                                            <br/>
                                            {people.username} - {people.email}
                                        </Typography>
                                    }/>
                                </ListItem>

                            )
                        } else {
                            return (<div>nessuna persona caricata</div>)
                        }
                    }
                )}
            </List>
        );
    }
}


export const AdminPeoples = WithLoader(AdminPeoplesComponent);
