import { Link } from 'react-router-dom';
import "../css/Category.css"

function Category({ active }) {
    return (
        <div className="category-frame">
            <Link to={`/deposit`} className={`btn btn-outline-primary ${active == 'deposit' ? 'active' : ''}`}>예금 계산기</Link>
            <Link to={`/savings`} className={`btn btn-outline-primary ${active == 'savings' ? 'active' : ''}`}>적금 계산기</Link>
        </div>
    );
};

export default Category