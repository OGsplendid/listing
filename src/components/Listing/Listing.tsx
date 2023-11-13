import { Item } from '../Item/Item';
import { IItem } from '../Item/Item';

type TItemProps = {
  items: IItem[],
}

export const Listing = ({ items }: TItemProps) => {

  return (
    <div className="item-list">
      {items.map((item: IItem) => (
        <Item key={item.listing_id} item={item} />
      ))}
    </div>
  )
}