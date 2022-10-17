import Table from 'react-bootstrap/Table';

const UrlListListItem = ({item, deleteItem}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.longurl}</td>
            <td>{item.shorturl}</td>
            <td>{item.description}</td>
            <td>
                <button className="btn btn-danger text-dark"
                        type='button'
                        onClick={() => deleteItem(item.id)}>Удалить
                </button>
            </td>
        </tr>
    )
}


const UrlList = ({items, deleteItem}) => {
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
                {items.map((item) => <UrlListListItem item={item} deleteItem={deleteItem}/>)}
                </tbody>
            </Table>
        </div>
    );
}

export default UrlList;