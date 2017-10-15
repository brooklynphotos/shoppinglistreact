import * as React from 'react';
import ShoppingList from './ShoppingList';
import './ShoppingListItem';

class ShoppingListContainer extends React.Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount(){
        fetch('/shoppinglist')
        .then(res=>res.json())
        .then(items=>this.setState({items}));
    }

    render(){
        return <ShoppingList items={this.state.items}/>;
    }
}

export default ShoppingListContainer;

interface Props{}
interface State{
    items: ShoppingListItem[];
}