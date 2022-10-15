import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AuthForm from "./components/Auth";
import Main from "./components/Main";
import UrlList from "./components/UrlList";


const URL = 'http://127.0.0.1:8000/'
const fullUrl = (url) => `${URL}${url}`


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: 'Главная', href: '/'},
                {name: 'Список ссылок', href: '/lists'},
                {name: 'Добавить ссылку', href: '/add'}
            ],

            'lists': [],
            auth: {username: '', is_login: false}
        };
    }

    componentDidMount() {
        const username = localStorage.getItem('login')
        if ((username !== '') && (username != null)) {
            this.setState({'auth': {username: username, is_login: true}}, () => this.getData())
        }
    }


    login(username, password) {
        axios.post(fullUrl('auth/sign-in'), {username: username, password: password}).then(response => {
            const result = response.data
            const access = result.token
            localStorage.setItem('login', username)
            localStorage.setItem('access', access)
            this.setState({'auth': {username: username, is_login: true}})
            this.getData()

        }).catch(error => {
            if (error.response.status !== 200) {
                alert('Неверный логин или пароль')
            } else {
                console.log(error)
            }
        })
    }

    getData() {

        let headers = {
            'Content-Type': 'application/json'
        }

        if (this.state.auth.is_login) {
            const token = localStorage.getItem('access')
            headers['Authorization'] = 'Bearer ' + token
        }

        axios.get(fullUrl('api/lists/'), {headers}).then(response => {
            // console.log(response.data['data'])
            this.setState({lists: response.data['data']})
        }).catch(error => console.log(error))
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json'
        }
        // console.log(this.state.auth)
        if (this.state.auth.is_login) {
            const token = localStorage.getItem('access')
            headers['Authorization'] = 'Bearer  ' + token
        }

        return headers
    }

    logout() {
        localStorage.setItem('login', '')
        localStorage.setItem('access', '')
        this.setState({'auth': {username: '', is_login: false}})
    }


    render() {
        return (
            <BrowserRouter>
                <header>
                    <Header menuItems={this.state.menuItems} auth={this.state.auth} logout={() => this.logout()}/>
                </header>

                <div className="App">
                    <main role="main">
                        <div className="container">
                            <Routes>
                                <Route path='/login'
                                       element={<AuthForm
                                           login={(username, password) => this.login(username, password)}/>}/>
                                <Route exact path="/" element={<Main/>}/>
                                <Route path="/lists" element={<UrlList items = {this.state.lists} />} />

                            </Routes>
                        </div>
                    </main>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }


}

export default App;
