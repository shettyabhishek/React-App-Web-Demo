import React, { Component } from 'react';
import developer from '../../img/Abhi.jpg'; // relative path to image

class RctFtrs extends Component{
    render() {
        return (<div className='container prflContent'>
                <h3>Abhishek H Shetty</h3>
                <div className="row">
                    <div className="col-sm-3">
                        <img alt="Abhishek H Shetty" src={developer}/>
                    </div>
                    <div className="col-sm-9">
                        <section>
                        <h4> About Me </h4>
                            I have a Bachelor of Engineering Degree in Computer Science.
                            I have an developer since over 11+ years and have been working in UI technologies mostly.
                            Lately I have been working with UI technologies like Angular JS 1.x & 2.x, React 4.x.<br/>
                            Have experience in  MEAN stack, Ionic hybrid app development and soon.
                        </section>
                        <br/><br/>
                        <h4> Tech Stack </h4>
                        <section>
                            <div className="row"><div className="col-sm-4"><strong>UI Core : </strong></div><div>HTML 4 & HTML 5, JavaScript(Vanila), CSS3 </div></div>
                            <div className="row"><div className="col-sm-4"><strong>JavaScript Frameworks : </strong></div><div>jQuery 2.x, React 4.0  </div></div>
                            <div className="row"><div className="col-sm-4"><strong>UI MVC Frameworks : </strong></div><div>Angular JS(1.x & 2.x), Backbone </div></div>
                            <div className="row"><div className="col-sm-4"><strong>UI Client Frameworks : </strong></div><div>Bootstrap 3.0</div></div>
                            <div className="row"><div className="col-sm-4"><strong>NoSQL DB : </strong></div><div>MongoDB & CouchDB</div></div>
                            <div className="row"><div className="col-sm-4"><strong>UI Test Frameworks : </strong></div><div>Karma-Jasmine, Sinon</div></div>
                            <div className="row"><div className="col-sm-4"><strong>Hybrid Mobile Frameworks : </strong></div><div>Ionic Framework, jQuery Mobile, Enyo</div></div>
                        </section>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-9">
                        <h4> Github open source contributions </h4>
                        <div>
                          <span>Mean App(Social Networking Demo):  </span>
                          <span>
                              <a target='_blank' href='https://github.com/shettyabhishek/meanStackApp-Social-Networking'>https://github.com/shettyabhishek/meanStackApp-Social-Networking</a>
                          </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RctFtrs;
