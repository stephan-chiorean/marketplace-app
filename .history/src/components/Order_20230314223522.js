import React from 'react'
import moment from 'moment'
import Currency from "react-currency-formatter"

function Order( {id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-marketplace-light text-sm text-gray-600">
            <div>
                <p className="font-bold text-xs">ORDER PLACED</p>
                <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
            </div>
            <div>
                <p className="text-xs font-bold">TOTAL</p>
                <p>
                    <Currency quantity={amount}/> -Next Day Delivery{" "}
                    <Currency quantity={amountShipping}/>
                </p>
            </div>
            <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length} items</p>

        </div>
        
    </div>
  )
}

export default Order