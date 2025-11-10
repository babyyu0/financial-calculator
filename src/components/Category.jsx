import "../css/Category.css"

function Category() {
    return (
        <div className="category-frame">
            <Link to={`/`} class="btn btn-outline-primary">예금 계산기</Link>
            <Link to={`/`} class="btn btn-outline-primary">적금 계산기</Link>
            <Link to={`/`} class="btn btn-outline-primary">대출 이자 계산기</Link>
        </div>
    );
};

export default Category