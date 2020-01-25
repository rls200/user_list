import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Label, FormGroup, Row, Col} from 'reactstrap';
import {AvFeedback, AvForm, AvGroup, AvInput} from "availity-reactstrap-validation";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setAddUserStatus, setNewUserData} from '../../redux/users/actions';

class AddNewUser extends Component {
    constructor(props) {
        super(props);

        this.toggleNested = this.toggleNested.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    toggleNested() {
        this.props.setAddUserStatus();
    };
    handleValidSubmit(event, values) {
        this.props.setNewUserData(values);
    };

    render() {
        return (
            <React.Fragment>
                <Button
                    color="primary"
                    onClick={this.toggleNested}
                >
                    Добавить
                </Button>
                <Modal
                    isOpen={this.props.addUserStatus}
                    toggle={this.toggleNested}
                >
                    <ModalHeader toggle={this.toggleNested}>Добавить пользователя</ModalHeader>
                    <ModalBody className="px-5 pb-4">
                        <AvForm
                            onValidSubmit={this.handleValidSubmit}
                            className="authentication-form"
                        >
                            <AvGroup>
                                <Label for="id">id</Label>
                                <AvInput type="text" name="id" id="id" placeholder="001" required />
                                <AvFeedback>Поле обязательно для заполнения!</AvFeedback>
                            </AvGroup>
                            <AvGroup>
                                <Label for="firstName">firstName</Label>
                                <AvInput type="text" name="firstName" id="firstName" placeholder="Ivan" required />
                                <AvFeedback>Поле обязательно для заполнения!</AvFeedback>
                            </AvGroup>
                            <AvGroup>
                                <Label for="lastName">lastName</Label>
                                <AvInput type="text" name="lastName" id="lastName" placeholder="Ivanov" required />
                                <AvFeedback>Поле обязательно для заполнения!</AvFeedback>
                            </AvGroup>
                            <AvGroup>
                                <Label for="email">email</Label>
                                <AvInput type="email" name="email" id="email" placeholder="email@email.com" required />
                                <AvFeedback>Поле обязательно для заполнения!</AvFeedback>
                            </AvGroup>
                            <AvGroup>
                                <Label for="phone">phone</Label>
                                <AvInput type="phone" name="phone" id="phone" placeholder="+79xxxxxxxx" required />
                                <AvFeedback>Поле обязательно для заполнения!</AvFeedback>
                            </AvGroup>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <FormGroup className="form-group mb-0 text-center">
                                        <Button color="primary">Добавить в таблицу</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </AvForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        addUserStatus: state.Users.addUserStatus
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    setAddUserStatus,
    setNewUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser);

