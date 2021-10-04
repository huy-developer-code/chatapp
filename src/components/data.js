import { Link } from "react-router-dom";

function Data(props) {
    const { value, onDelete, onEdit } = props;
    return (
        <tr key={value.name}>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.about}</td>
            <td>{value.phone}</td>
            <td>{value.location}</td>

            <td>
                <Link to={`/edit/${value.id}`}>
                    <button
                        className="btn btn-primary"
                        onClick={() => onEdit(value)}
                    >
                        Sửa
                    </button>
                </Link>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(value.id)}
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
}
export default Data;
