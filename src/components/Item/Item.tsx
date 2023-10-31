import React from 'react';

interface IItem {
    listing_id: number,
    url: string,
    MainImage: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
}

type TItemProps = {
    item: IItem,
}

export const Item = ({ item }: TItemProps) => {

   const finalTitle = item.title.length <= 50 ? item.title : `${item.title.slice(0, 50)}...`;
   const finalQuantity = item.quantity <= 10 ? 'low' : item.quantity > 20 ? 'high' : 'medium';

  return (
    <div>
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{finalTitle}</p>
                <p className="item-price">{item.currency_code === 'USD' || item.currency_code === 'EUR' ? `${item.currency_code}${item.price}` : `${item.price} ${item.currency_code}`}</p>
                <p className={`item-quantity level-${finalQuantity}`}>{`${item.quantity} left`}</p>
            </div>
        </div>
    </div>
  )
}
