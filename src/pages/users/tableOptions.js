import React from 'react';

const columns = [
    {
        dataField: 'id',
        text: 'Id',
        sort: true
    },
    {
        dataField: 'firstName',
        text: 'FirstName',
        sort: true
    },
    {
        dataField: 'lastName',
        text: 'LastName',
        sort: true
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true
    },
    {
        dataField: 'phone',
        text: 'Phone',
        sort: true
    },
    {
        dataField: 'address.streetAddress',
        text: 'StreetAddress',
        sort: true
    },
    {
        dataField: 'address.city',
        text: 'City',
        sort: true
    },
    {
        dataField: 'address.state',
        text: 'State',
        sort: true
    },
    {
        dataField: 'address.zip',
        text: 'Zip',
        sort: true
    },
    {
        dataField: 'description',
        text: 'Description',
        sort: true,
    }
];

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];

export const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const options = {
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
};

export {columns, defaultSorted, options};