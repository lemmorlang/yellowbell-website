import React, { Component } from 'react';
import Confirm from './Confirm';
import axios from 'axios';


const contactRegex = RegExp(/^[0-9]/);


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
    });

    return valid;
};

class Enrollmentform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gradelevel: { value: 'default' },
            firstName: null,
            lastName: null,
            mi: null,
            gender: { value: 'default' },
            address: null,
            contact: null,
            posts: [],
            ToConfirmPage: false,
            formErrors: {
                firstName: '',
                lastName: '',
                mi: '',
                address: '',
                contact: '',
            },
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            const enrollmentData = {
                gradelevel: this.state.gradelevel,
                firstName: this.state.firstName,
                mi: this.state.mi,
                lastName: this.state.lastName,
                gender: this.state.gender,
                address: this.state.address,
                contact: this.state.contact,
            };

            axios({
                url: '/api/save',
                method: 'POST',
                data: enrollmentData,
            })
                .then(() => {
                    console.log('Data has been sent to the server');
                    this.setState({ ToConfirmPage: true });

                })
                .catch(() => {
                    console.log('Internal Server Error');
                });

            console.log(`
          --SUBMITTING--
          Grade Level: ${this.state.gradelevel}
          First Name: ${this.state.firstName}
          MI: ${this.state.mi}
          Last Name: ${this.state.lastName}
          Gender: ${this.state.gender}
          address: ${this.state.address}
          contact: ${this.state.contact}
            `);
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };


    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                    value.length === 0 ? 'Input Your First Name' : '';
                break;
            case 'mi':
                formErrors.mi = value.length === 0 ? 'Input Your Middle Initial' : '';
                break;
            case 'lastName':
                formErrors.lastName = value.length === 0 ? 'Input Your Last Name' : '';
                break;
            case 'address':
                formErrors.address = value.length === 0 ? 'Input Your Address' : '';
                break;
            case 'contact':
                formErrors.contact =
                    contactRegex.test(value) && value.length > 11
                        ? 'You input an invalid contact number'
                        : '';
                break;

            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        const ToConfirmPage = this.state.ToConfirmPage;

        if (ToConfirmPage) {
            return <Confirm />
        }

        return (


            <div className="wrapper">

                <div className="form-wrapper">
                    <h1>Enrollment Form </h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="gradelevel">
                            <label htmlFor="gradelevel">Grade level:</label>
                            <select
                                name="gradelevel"
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <option value="default">(Please select your grade level this year)</option>
                                <option value="grade1">grade 1</option>
                                <option value="grade2">grade 2</option>
                                <option value="grade3">grade 3</option>
                                <option value="grade4">grade 4</option>
                                <option value="grade5">grade 5</option>
                                <option value="grade6">grade 6</option>
                            </select>
                            <br />
                        </div>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className={formErrors.firstName.length > 0 ? 'error' : null}
                                placeholder="First Name"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>

                        <div className="mi">
                            <label htmlFor="mi">M.I</label>
                            <input
                                type="text"
                                className={formErrors.mi.length > 0 ? 'error' : null}
                                placeholder="M.I."
                                name="mi"
                                size="1"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.mi.length > 0 && (
                                <span className="errorMessage">{formErrors.mi}</span>
                            )}
                        </div>

                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className={formErrors.lastName.length > 0 ? 'error' : null}
                                placeholder="Last Name"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <br />

                        <div className="gender">
                            <label htmlFor="gender">Gender</label>
                            <br />
                            <select
                                name="gender"
                                value={this.state.value}
                                onChange={this.handleChange}>
                                <option value="default">(Please select your gender)</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <br />
                        <br />

                        <div className="address">
                            <label htmlFor="address"> Home Address</label>
                            <input
                                type="text"
                                className={formErrors.address.length > 0 ? 'error' : null}
                                placeholder="Home Address"
                                name="address"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.address.length > 0 && (
                                <span className="errorMessage">{formErrors.address}</span>
                            )}
                        </div>

                        <div className="contact">
                            <label htmlFor="contact">Contact number</label>
                            <input
                                type="tel"
                                className={formErrors.contact.length > 0 ? 'error' : null}
                                placeholder="Contact number"
                                name="contact"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.contact.length > 0 && (
                                <span className="errorMessage">{formErrors.contact}</span>
                            )}
                        </div>
                        <div className="enrollButton">
                            <button type="submit">Submit</button>

                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Enrollmentform;
