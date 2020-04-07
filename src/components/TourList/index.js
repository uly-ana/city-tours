import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';


export default class TourList extends Component {
    render() {
        return (
            <div>
                Hello from tour list
                <Tour />
            </div>
        );
    }
}
