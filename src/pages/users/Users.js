import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, Spinner} from "reactstrap";

import {SMALL_DATA_URL, BIG_DATA_URL} from '../../redux/constants';
import {
    getUsersList,
    setSelectData
} from "../../redux/users/actions";
import UsersTable from './UsersTable';
import SelectRowData from './SelectRowData';

class Users extends Component {
    constructor(props) {
        super(props);

        this.handleLoadUsersList = this.handleLoadUsersList.bind(this);
    }
    handleLoadUsersList(dataSize) {
        this.props.getUsersList(dataSize);
    }
    render() {
        const selectData = this.props.selectData || '';
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={12}>
                        <div align="center" className="w-100 py-5">
                            <Button
                                color="primary"
                                onClick={()=>this.handleLoadUsersList(SMALL_DATA_URL)}
                                className="mx-2"
                                active
                            >
                                Маленький список
                            </Button>
                            <Button
                                color="primary"
                                onClick={()=>this.handleLoadUsersList(BIG_DATA_URL)}
                                className="mx-2"
                                active
                            >
                                Большой список
                            </Button>
                        </div>
                    </Col>
                </Row>
                {
                    selectData && <SelectRowData selectData={selectData} setSelectData={this.props.setSelectData}/>
                }
                <Row>
                    <Col md={12}>
                        <div className="w-100">
                            {
                                this.props.getUserListStatus ? (
                                    <div align="center">
                                        <Spinner className="m-2" color="primary" style={{ width: '6rem', height: '6rem'}} />
                                    </div>
                                ): this.props.usersList && (
                                    <UsersTable
                                        usersList={this.props.usersList}
                                        getUserListStatus={this.props.getUserListStatus}
                                        setSelectData={this.props.setSelectData}
                                    />
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    usersList: state.Users.usersList,
    getUserListStatus: state.Users.getUserListStatus,
    selectData: state.Users.selectData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsersList,
    setSelectData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);