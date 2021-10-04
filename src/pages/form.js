import React, { Component } from "react";
import { connect } from "react-redux";
import {
    actAddProductRequest,
    actEditProductRequest,
    actUpdateProductRequest,
} from "../actions/index";
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtEmail: "",
            numPhone: "",
            txtLocation: "",
            txtAbout: "",
        };
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actEditProductRequest(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.edit) {
            var { edit } = nextProps;
            console.log(edit);
            this.setState({
                id: edit.id,
                txtName: edit.name,
                txtEmail: edit.email,
                numPhone: edit.phone,
                txtLocation: edit.location,
                txtAbout: edit.about,
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        });
    };
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;

        var { id, txtName, txtEmail, numPhone, txtLocation, txtAbout } =
            this.state;
        var product = {
            id: id,
            name: txtName,
            email: txtEmail,
            phone: numPhone,
            location: txtLocation,
            about: txtAbout,
        };
        if (id) {
            this.props.actUpdateProductRequest(product);
            history.goBack();
        } else {
            this.props.actAddProductRequest(product);
            history.goBack();
        }
    };

    render() {
        const { txtName, txtEmail, numPhone, txtLocation, txtAbout } =
            this.props;

        return (
            <div className="container mt-5">
                <form className="form" onSubmit={this.onSave}>
                    <div className="col-md-12 row mt-3">
                        <div className="col-md-6">
                            <label>Name</label>
                            <input
                                className="form-control"
                                value={txtName}
                                onChange={this.onChange}
                                name="txtName"
                            ></input>
                        </div>
                        <div className="col-md-6">
                            <label>Email</label>
                            <input
                                className="form-control"
                                value={txtEmail}
                                onChange={this.onChange}
                                name="txtEmail"
                            ></input>
                        </div>
                    </div>
                    <div className="col-md-12 row mt-3">
                        <div className="col-md-6">
                            <label>Phone</label>
                            <input
                                className="form-control"
                                value={numPhone}
                                onChange={this.onChange}
                                name="numPhone"
                            ></input>
                        </div>
                        <div className="col-md-6">
                            <label>Location</label>
                            <input
                                className="form-control"
                                value={txtLocation}
                                onChange={this.onChange}
                                name="txtLocation"
                            ></input>
                        </div>
                    </div>
                    <div className="col-md-12 mt-3">
                        <label>About me</label>
                        <textarea
                            className="form-control"
                            value={txtAbout}
                            onChange={this.onChange}
                            name="txtAbout"
                            placeholder="..."
                        ></textarea>
                    </div>
                    <div className="float-right mt-3">
                        <button type="submit" className="btn btn-success">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        edit: state.edit,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddProductRequest: (product) => {
            dispatch(actAddProductRequest(product));
        },
        actEditProductRequest: (id) => {
            dispatch(actEditProductRequest(id));
        },
        actUpdateProductRequest: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
