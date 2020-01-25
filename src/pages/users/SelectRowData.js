import React from 'react';
import {Row, Col, Jumbotron, Button} from "reactstrap";

const SelectRowData = props => {
    const selectData = props.selectData;
    return (
        <Row>
            <Col className="pb-2">
                <Jumbotron fluid={false}>
                    <p className="lead">
                        Выбран пользователь <b>{`${selectData.firstName} ${selectData.lastName}`}</b>
                    </p>
                    <hr className="my-2" />
                    <p>Описание:</p>
                    <p>{selectData.description}</p>
                    <p>Адрес проживания: <b>{selectData.address.streetAddress}</b></p>
                    <p>Город: <b>{selectData.address.city}</b></p>
                    <p>Провинция/штат: <b>{selectData.address.state}</b></p>
                    <p>Индекс: <b>{selectData.address.zip}</b></p>
                    <p className="lead">
                        <Button
                            color="primary"
                            onClick={() => props.setSelectData('')}
                        >
                            Закрыть
                        </Button>
                    </p>
                </Jumbotron>
            </Col>
        </Row>
    )
};

export default SelectRowData;