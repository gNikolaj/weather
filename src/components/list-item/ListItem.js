import './ListItem.css';

const ListItem = ({day, degree, description}) => {
    return(
        <li className="list-elem">
            <div className="li-content">
                <h3>{day}</h3>
                <div className="degrees">
                    <span>{degree}&#8451;</span>
                </div>
                <div className="details">
                    <span>{description}</span>
                </div>
            </div>
        </li>
    );
}

export default ListItem;