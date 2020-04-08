import React, { Component } from 'react'
import './tour.scss'


export default class Tour extends Component {
    state ={
        showInfo: false
    };
    handleInfo =()=>{
        this.setState ({
            showInfo: !this.state.showInfo
        })
    }

    render() {

        const {id, city, img, info, name} = this.props.tour;
        const {removeTour} = this.props;

        return (
          <article className="tour">
            <div className="img-container">
              <img src={img} alt="tour image" />
              <span className="close-btn" onClick={()=>removeTour(id)}>
                <i className="fas fa-window-close" />
              </span>
            </div>
            <div className="tour-info">
              <h3>{city}</h3>
              <h4>{name}</h4>
              <h5>
                More info{" "}
                <span onClick={this.handleInfo}>
                  <i class="fas fa-caret-square-down"></i>
                </span>
              </h5>
              {this.state.showInfo && <p className="overflow">{info}</p>}
            </div>
          </article>
        );
    }
}
