import React from "react";
import {AppState} from "../../../store/Store";
import {getPeoples} from "../../../store/admin/AdminPeoplesActions";
import {connect} from "react-redux";
import {People} from "../../../store/admin/AdminPeoplesTypes";

interface Props {
    isLoading: boolean;
    peoples: People[] | null;
    getPeoples: typeof getPeoples;
}

class AdminPeopleComponent extends React.Component<Props> {

    public componentDidMount() {
        this.props.getPeoples();
    }

    render() {
        const peoples = this.props.peoples;
        return (
            <div>
                <ul>
                {peoples && peoples.map(
                    people => {
                        if (people){
                            return (
                                <li key={people.id}>
                                    <p> {people.name}</p>
                                </li>
                                )
                        } else {
                            return (<div>nessuna persona caricata</div>)
                        }
                    }
                )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        isLoading: state.adminPeople.isLoading,
        peoples: state.adminPeople.peoples,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        getPeoples: () => dispatch(getPeoples())
    }
}

export const AdminPeople = connect(mapStateToProps, mapDispatchToProps)(AdminPeopleComponent);
