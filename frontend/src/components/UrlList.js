// import React from 'react'
// import {Table} from "react-bootstrap";
// import {Link} from "react-router-dom";
//
// const UrlListListItem = ({item, deleteItem}) => {
//     return (
//         <tbody>
//         <tr>
//             <td>{item.id}</td>
//             <td>{item.long_url}</td>
//             <td>{item.short_url}</td>
//             <td>{item.description}</td>
//             {/*<td>*/}
//             {/*    <button className="btn btn-danger text-dark"*/}
//             {/*            type='button'*/}
//             {/*            onClick={() => deleteItem(item.id)}*/}
//             {/*            onClick={() => deleteItem(item.id)}*/}
//             {/*    >Удалить*/}
//             {/*    </button>*/}
//             {/*</td>*/}
//         </tr>
//         </tbody>
//     )
// }
//
// const UrlList = ({items, deleteItem}) => {
//     return (
//         <div className="pt-5">
//             <Link className="btn btn-primary mt-2 mb-2" to={'/todos/create'}>Создать</Link>
//             <Table striped hover>
//                 <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Полная ссылка</th>
//                     <th>Сокращенная ссылка</th>
//                     <th>Описание</th>
//                     <th></th>
//                     <th></th>
//                     {/*{items.map((item) => <UrlListListItem item={item} deleteItem={deleteItem}/>)}*/}
//                 </tr>
//                 </thead>
//                 {/*{items.map((item) => <UrlListListItem item={item}/>)}*/}
//             </Table>
//         </div>
//     )
// }
//
// export default UrlList

import Table from 'react-bootstrap/Table';

const UrlListListItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.longurl}</td>
            <td>{item.shorturl}</td>
            <td>{item.description}</td>
            <td></td>
        </tr>
    )
}


const UrlList = ({items}) => {
    return (
        <div className="pt-5">
            <h1 className="mb-5">Список ссылок</h1>
            <Table striped>
                <thead>
                <tr className="">
                    <th>#</th>
                    <th>Оригинальная ссылка</th>
                    <th>Короткая ссылка</th>
                    <th>Описание</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {items.map((item) => <UrlListListItem item={item}/>)}
                </tbody>
            </Table>
        </div>
    );
}

export default UrlList;