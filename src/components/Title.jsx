import '../css/Title.css'

function Title({title}) {
    return (
        <div className={`title-frame`}>
            {title} 계산기
        </div>
    );
}

export default Title;