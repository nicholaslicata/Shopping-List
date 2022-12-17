
function Clear({ handleClear }) {
    return (
        <div>
            <button onClick={handleClear} type="button" className="clear-btn">Clear</button>
        </div>
    )
}

export default Clear;