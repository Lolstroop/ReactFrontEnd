import React, {Component} from 'react';

class GetAllProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('http://localhost:8080/armazem/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;   
        }

        else {

            return (
                <div className="GetAllProducts">
                    Data has been Loaded.
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.nome} | {item.quantidade} | {item.tipo} | {item.descricao}
                            </li>
                        ))};
                    </ul>
                </div>
            );
        }
    }
}

export default GetAllProducts;