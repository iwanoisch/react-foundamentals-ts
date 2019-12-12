import React from "react";
import {AppState} from "../../../store/Store";
import {getPeoples} from "../../../store/admin/AdminPeoplesActions";
import {connect} from "react-redux";
import {People} from "../../../store/admin/AdminPeoplesTypes";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import './AdminPeoplesList.css'
import Container from "@material-ui/core/Container";
import {AdminPeoples} from "./adminPeople/AdminPeoples";

interface Props {
    loading: boolean;
    peoples: People[] | null;
    getPeoples: typeof getPeoples;
}


class AdminPeoplesListComponent extends React.Component<Props> {

    public componentDidMount() {
        this.props.getPeoples();
    }

    render() {
        const peoples = this.props.peoples;
        return (
            <Container maxWidth="xs">
                <div className='list'>
                    <AdminPeoples  loading={this.props.loading} peoples={peoples}/>
                </div>
            </Container>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        loading: state.adminPeople.loading,
        peoples: state.adminPeople.peoples,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        getPeoples: () => dispatch(getPeoples())
    }
}

export const AdminPeoplesList = connect(mapStateToProps, mapDispatchToProps)(AdminPeoplesListComponent);
