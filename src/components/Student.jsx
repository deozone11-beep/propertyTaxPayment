import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
                <tr>
                    <th>Name: </th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Aga: </th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>isMarried: </th>
                    <td>{props.isMarried? "Yes" : "No"}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
}

Student.defaultProps = {
    name: "No Name",
    age: 0,
    isMarried: false,
}
