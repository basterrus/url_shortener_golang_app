import React from "react";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    moveChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    moveSubmit(event) {
        this.props.login(this.state.username, this.state.password)
        event.preventDefault()
    }

    render() {
        return (

            <div className="auth_form">
                <p className="fw-bold fs-2">Регистрация</p>
                <form className="" onSubmit={(event) => this.moveSubmit(event)}>
                    <br/>
                    <label htmlFor="username">Логин</label>
                    <input type="text" className="form-control" name="username" value={this.state.login}
                           onChange={(event) => this.moveChange(event)}/>
                    <br/>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" name="password" value={this.state.password}
                           onChange={(event) => this.moveChange(event)}/>
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
                </form>
            </div>
        );
    }
}

export default RegisterForm