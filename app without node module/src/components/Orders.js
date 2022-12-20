import React from 'react';

function Orders(){

    const []
    return(
        <div>
            <h1>Welcome Sales Agent</h1>
	    <hr/>
        <form>
            <p>
                <b>Customer ID</b><br/>
                <input type="text" id="customerIdInput" required="required"/>
                <input type="button" id="invoiceButton" value="Invoice"/>
            </p>
            <p>
                <b>Product No</b><br/>
                <input type="number" id="productNoInput" required="required"/>
            </p>
            <p>
                <b>Quantity</b><br/>
                <input type="number" id="quantityInput" required="required"/>
            </p>
	    	<input type="button" id="orderButton" value="Order"/>
        </form>
        </div>
    )
}
export default Orders;