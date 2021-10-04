import Data from "../components/data";
import { connect } from "react-redux";
import { fetchAPIRequest } from "../actions/index";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { actDeleteProductRequest, actEditProduct } from "../actions/index";

const List = (props) => {
    const onDelete = (id) => {
        props.actDeleteProductRequest(id);
    };
    const onEdit = (value) => {
        props.actEditProduct(value);
    };
    const fetchData = (sv) => {
        let html = null;
        if (sv) {
            html = sv.map((value) => {
                return (
                    <Data value={value} onDelete={onDelete} onEdit={onEdit} />
                );
            });
        }
        return html;
    };
    const { sv } = props;
    useEffect(() => {
        props.fetchAPIRequest();
    }, [fetchAPIRequest]);
    return (
        <div className="container">
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Function</th>
                        <th>Status</th>
                        <th>Employed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{fetchData(sv)}</tbody>
            </table>
            <Link to="form">
                <button className="btn btn-primary">Thêm</button>
            </Link>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        sv: state.sv,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAPIRequest: () => {
            dispatch(fetchAPIRequest());
        },
        actDeleteProductRequest: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
        actEditProduct: (value) => {
            dispatch(actEditProduct(value));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
