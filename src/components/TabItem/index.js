import "./index.css"

const TabItem = props => {
    const {tabDetails,isActive,clickTabItem} = props 
    const {tabId, displayText} = tabDetails;

    const tabClassName = isActive ? 'highlight-text' : ''

    const onClickTabItem = () => {
        clickTabItem(tabId)
        console.log("Clicked");
    }

    return(
        <li>
            <button 
                type="button" onClick={onClickTabItem}
                className={`tab-button ${tabClassName}`}>
                {displayText}
            </button>
        </li>
    )
}
export default TabItem

