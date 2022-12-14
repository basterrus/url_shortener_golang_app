import React from "react";

class AuthForm extends React.Component {
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
            <div>
                <div className="auth_form border border-primary">
                    <h1>Авторизация</h1>
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
                        <input type="submit" className="btn btn-primary col-8" value="Войти"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthForm