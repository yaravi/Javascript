import React from 'react';
import './AcercaDeMi.css';

export default class AcercaDeMi extends React.Component{
    constructor (props) {
        super(props);
    }
    render() {
        return (
        <section className="col-12 col-md-8">
            <h2 className="h2">Acerca de mi</h2>
            <article>
                <p className="text-break">
                Acerca de mi
                </p>
                <span> Aprendiz de todo... Experto en nada</span>
                <ul>
                    <li>Lista 1</li>
                    <li>Lista 2</li>
                    <li>Lista 3</li>
                </ul>
            </article>

        </section>
        );    
    }
}