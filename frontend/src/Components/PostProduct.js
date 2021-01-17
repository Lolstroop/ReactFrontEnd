import React, { Component } from 'react';

class PostProduct extends Component {

    async postData() {
        try {

            let result = await fetch('http://localhost:8080/armazem/post', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    key1: 'id',
                    name: 'nome',
                    quantidade: 'quantidade',
                    tipo: 'tipo',
                    descricao: 'descricao'

                })
            });

            console.log('Result: ' + result)

        } catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <div className="PostProduct">
                <button onClick={ () => this.postData() }>Press me to post some data</button>
            </div>
        )
    }

}

export default PostProduct;