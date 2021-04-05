import { Card, CardContent } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemType } from "../App";
import { Wrapper } from "./ListItem.styles";

export type ListItemProps = {
    listItem: ListItemType
    removeFromList: (id: string) => void
}
 
const ListItem: React.FC<ListItemProps> = ({ listItem, removeFromList }) => {
    return ( 
        <Wrapper>
            <Card>
                <CardContent>
                    <h3>
                        {listItem.title}
                        <IconButton className="deleteIcon" aria-label="delete" onClick={() => removeFromList(listItem.id)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </h3>
                    <div>{listItem.details}</div>
                    
                </CardContent>
            </Card>
        </Wrapper>
     );
}
 
export default ListItem;