import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {PaginationListStandalone, PaginationProvider} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import styles from './styles.module.css';
import * as tableOptions from './tableOptions';
import AddNewUser from './AddNewUser';


const UsersTable = props => {

    const userList = props.usersList;
    const options = {
        custom: true,
        sizePerPage: 50,
        totalSize: userList.length
    };
    const { SearchBar } = Search;

    const selectRow = {
        onSelect: (row) => {
            props.setSelectData(row);
        },
        mode: 'radio',
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: '#00BFFF',
        selectColumnStyle: { backgroundColor: 'blue' }
    };

    return (
        <>
            <ToolkitProvider
                keyField="id"
                data={ userList }
                columns={ tableOptions.columns }
                style={{marginBottom: 0}}
                bootstrap4
                search
            >
                { props => (
                    <div>
                        <PaginationProvider pagination={ paginationFactory(options) }>
                            {
                                ({ paginationProps, paginationTableProps }) => (
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <AddNewUser/>
                                            <div>
                                                <SearchBar
                                                    { ...props.searchProps }
                                                    style={{marginBottom: 0}}
                                                />
                                                <PaginationListStandalone
                                                    className="mx-2"
                                                    { ...paginationProps }
                                                />
                                            </div>
                                        </div>
                                        <BootstrapTable
                                            keyField="id"
                                            data={ userList }
                                            columns={ tableOptions.columns }
                                            defaultSorted={ tableOptions.defaultSorted }
                                            classes={styles.usersTable}
                                            selectRow={selectRow}
                                            {...paginationTableProps}
                                            { ...props.baseProps }
                                        />
                                    </div>
                                )
                            }
                        </PaginationProvider>
                    </div>
                )
                }
            </ToolkitProvider>
        </>
    )
};


export default UsersTable;