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
import UrlAdd from "./components/UrlAdd";
import RegisterForm from "./components/Register";
import NotFound404 from "./components/NotFound404";


const URL = 'http://127.0.0.1:8000/'
const fullUrl = (url) => `${URL}${url}`


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {name: 'Главная', href: '/'},
                {name: 'Список ссылок', href: '/lists'},
                {name: 'Добавить ссылку', href: '/lists/add'}
            ],

            'lists': [],
            auth: {username: '', is_login: false},
        };
    }

    componentDidMount() {
        const username = localStorage.getItem('login')
        if ((username !== '') && (username != null)) {
            this.setState({'auth': {username: username, is_login: true}}, () => this.getData())
        }
    }

    register(username, password) {
        axios.post(fullUrl("auth/sign-up"), {username: username, password: password}).then(response => {
            alert("Пользователь успешно зарегистрирован!")
            console.log(response)
        }).catch(error => {
            if (error.response.status !== 200) {
                alert('Неверный логин или пароль')
            } else {
                console.log(error)
            }
        })
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

    createItem(longurl, description) {
        const headers = this.getHeaders()
        const projectData = {longurl: longurl, description: description}
        axios.post('http://127.0.0.1:8000/api/lists/', projectData, {headers}).then(
            response => {
                this.getData()
                alert("Запись успешно создана!")
            }
        ).catch(error => {
            console.log(error)
            this.setState({lists: []})
        })
    }

    deleteItem(id) {
        const headers = this.getHeaders()
        axios.delete(`http://127.0.0.1:8000/api/lists/${id}`, {headers})
            .then(response => {
                this.getData()
                console.log("Запись упешно удалена! ")
            })
            .catch(error => {
                this.setState({lists: []})
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
            headers['Authorization'] = 'Bearer ' + token
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
                    <Header menuItems={this.state.menuItems} register={this.state.register} auth={this.state.auth} logout={() => this.logout()}/>
                </header>

                <div className="App">
                    <main role="main">
                        <div className="container">
                            <Routes>
                                <Route exact path="/" element={<Main />}/>
                                <Route path='/register' element={<RegisterForm
                                                        register={(username, password) => this.register(username, password)}/>}/>
                                <Route path='/login' element={<AuthForm
                                    login={(username, password) => this.login(username, password)}/>}/>
                                <Route path="/lists" element={<UrlList items={this.state.lists}
                                                                       deleteItem={(id) => this.deleteItem(id)}/>}/>
                                <Route path="/lists/add" element={<UrlAdd items={this.state.lists}
                                                                          createItem={(longurl, description) => this.createItem(longurl, description)}/>}/>

                                <Route element={NotFound404}/>

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
