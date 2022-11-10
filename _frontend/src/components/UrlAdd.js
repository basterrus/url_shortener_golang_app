import React from "react";


class UrlAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            longurl: '',
            description: ''
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
        this.props.createItem(this.state.longurl, this.state.description)
        event.preventDefault()
    }


    render() {
        return (
            <div className="col-4 border border-primary auth_form">
                <form className="form-control" onSubmit={(event) => this.moveSubmit(event)}>
                    <br/>
                    <label htmlFor="longurl">Оригинальная ссылка</label>
                    <input type="text" className="form-control" name="longurl" value={this.state.longurl}
                           onChange={(event) => this.moveChange(event)}/>
                    <br/>
                    <label htmlFor="description">Описание ссылки</label>
                    <input type="description" className="form-control" name="description" value={this.state.description}
                           onChange={(event) => this.moveChange(event)}/>
                    <br/>
                    <input type="submit" className="btn btn-primary col-8" value="Создать"/>
                </form>
            </div>
        );
    }
}

export default UrlAdd;
