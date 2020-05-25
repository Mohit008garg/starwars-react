/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CommonRenderList = ({ list }) =>
    (
        <ListGroup>
            {
               list && list.map((listItem, index) => <ListGroupItem style={{fontSize: 30-(index*2)}}>{listItem.name}</ListGroupItem>)
            }
        </ListGroup>
    );

CommonRenderList.propTypes = {
    list: PropTypes.arrayOf(Object).isRequired,
}
export default CommonRenderList;