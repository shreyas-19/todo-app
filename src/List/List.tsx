import { ListItemType } from '../App';
import ListItem from '../ListItem/ListItem';
import {Wrapper} from './List.styles'

export type ListProps = {
    list: ListItemType[]
    removeFromList: (id: string) => void
}
 
const List: React.FC<ListProps> = ({ list, removeFromList }) => {
    return ( 
        <Wrapper>
            {list.map(listItem => (
                <ListItem key={listItem.id} listItem={listItem} removeFromList={removeFromList} />
            ))}
        </Wrapper>
     );
}
 
export default List;