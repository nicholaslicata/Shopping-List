
function List({ shopList, FaChevronLeft, FaChevronRight, FaCheck, handleIncrement, handleDecrement, handleComplete }) {
    return (
        <div className="list-container">
            {shopList.length > 0 ? 
            <ul>
                {shopList.map((shopItem, index) => (
                    <div className="item-container" key={shopItem.id}>
                        <li className={shopItem.complete ? "shop-item-complete" : "shop-item"}>{shopItem.name}</li>
                        <div className="quantity-container">
                            <button type="button" className="quantity-btn" onClick={() => handleDecrement(index)}><FaChevronLeft /></button>
                            <span className="quantity">{shopItem.quantity}</span>
                            <button type="button" className="quantity-btn" onClick={() => handleIncrement(index)}><FaChevronRight /></button>
                            <button type="button" className="complete-btn" onClick={() => handleComplete(shopItem.id)}><FaCheck /></button>
                        </div>
                    </div>
                ))} 
            </ul> : 
                  <h1 className="list-empty">Your list is empty</h1>}
        </div>
    )
}

export default List;