const Mobi = (props) => {
    const { ammount } = props
    const initPrice = typeof ammount === 'string' ? changeData(ammount) : ammount;

    function changeData(ammount) {
        const checkforCommas = /[,]/.test(ammount);
        const checkforDashes = /[-]/.test(ammount);

        const arrPrice = checkforDashes ? ammount.split("-") : ammount
        let newPrice = "";
        if (Array.isArray(arrPrice)) {
            newPrice = arrPrice[1]
        } else {
            newPrice = arrPrice
        }
        const commaRemovedPrice = checkforCommas ? newPrice.replace(',', '') : newPrice
        const finalPrice = commaRemovedPrice.replace('R', '')

        return finalPrice
    }
    return (
        <div id="instalmentCalc"
            data-amount={initPrice}
            data-before="Credit Amount:"
            data-after="per month"
            data-textColor="#D52626"
            data-bgColor="transparent"
            data-padding="0"
            data-margin="5"
            data-fontFamily="inherit"
            data-fontSize="16"
            data-fontWeight="normal"
            data-merchantId="4311"
        >
        </div >
    )
}

export default Mobi