/**
    File name: homePageComponent.js
    Author: Abhishek H Shetty
    This component is used to render the content for the home page.
**/

import React, { Component } from 'react';
import sampleCompImg from '../../img/scenario1.png'; // relative path to image

class Home extends Component{

    render() {
        return (
            <div className='container homeContent'>
                <h1> React </h1>
                <p>React is a JavaScript library for building user interfaces developed by Facebook. It is a view only library and does not have a
                controller or model component. Hence not a MVC framework. Its a component based library, in the sense it can be
                used to make encapsulated components that manager their own state. These components can be used together to make
                complex pages. React uses an XML-like syntax called JSX and writing it feels like writing HTML.</p>
                <p>           React can also render on the server using Node and power mobile apps using React Native</p>
                <br/>
                <h4> Sample Component </h4>
                <div className='row'>
                    <div className="col-sm-8"><img src={sampleCompImg} alt={sampleCompImg}/></div>
                    <div className="col-sm-4">
                        <pre>&lt;MyComponent/&gt;&lt;/MyComponent&gt;
                            <div className='mrkUp'><strong>Markup rendered</strong></div>
                            &lt;div&gt;&lt;p&gt;Any component should have a single root parent.&lt;/p&gt;&lt;/div&gt;
                        </pre>
                    </div>
                </div>
                <br/>
                <h4> Virtual DOM </h4>
                <div className='row'>
                    <div className="col-sm-12">
                        <p>In React, for every DOM object, there is a corresponding "virtual DOM object".React creates an in-memory data
                        structure cache, computes the resulting differences, and then updates the browser DOM only with the differences.
                        Hence proving a high performance rendering.</p>
                    </div>
                </div>
                <h4> References </h4>
                <div className='row'>
                    <p className="col-sm-12"><a href="https://facebook.github.io/react/">Learn React</a></p>
                    <p className="col-sm-12"><a href="https://github.com/facebook/react">https://github.com/facebook/react</a></p>
                    <p className="col-sm-12"><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">https://en.wikipedia.org/wiki/React_(JavaScript_library)</a></p>
                </div>
            </div>
        );
    }
}
export default Home;
