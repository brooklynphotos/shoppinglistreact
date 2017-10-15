import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List,ListItem } from 'material-ui/List';

import './ShoppingListItem';
import './ShoppingList.css';

function ShoppingList(props: Props) {
    const list = props.items.map((item,index)=>{
        return <ListItem primaryText={item.name} key={index} />
    });
    return (
        <MuiThemeProvider>
            <List>
            {list}
            </List>
        </MuiThemeProvider>
    );
}

export default ShoppingList;

interface Props{
    items: ShoppingListItem[];
}