import React from 'react';
import { Item } from '../Item/Item';
import etsy from '../data';

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
  items: IItem[],
}

export const Listing = ({ items }: TItemProps) => {

  return (
    <div className="item-list">
      {items.map((item: IItem) => (
        <Item item={item} />
      ))}
    </div>
  )
}