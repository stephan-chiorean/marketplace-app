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

        </div>
        
    </div>
  )
}

export default Order