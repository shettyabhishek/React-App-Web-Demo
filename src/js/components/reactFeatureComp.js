/**
    File name: homePageComponent.js
    Author: Abhishek H Shetty
    This component is used for displaying and understanding the various important features of
    of the react library.
**/
import React, { Component } from 'react';
import ModalComp from "./modalComp";
import { EventEmitter } from 'events';

import {MyComponent,RenderChild,PrarentNode,EventComponent,ComponentState,RefsComp,AnimateComp} from './featureComps/ftrComps';
import sampleCompImg1 from '../../img/scenario1.png'; // relative path to image
import sampleCompImg2 from '../../img/scenario2.png'; // relative path to image
import sampleCompImg3 from '../../img/scenario3.png'; // relative path to image
import sampleCompImg4 from '../../img/scenario4.png'; // relative path to image
import sampleCompImg5 from '../../img/scenario5.png'; // relative path to image

class RctFtrs extends Component{

    /** Component initializations are done in the constructor **/
    constructor(props){
        super(props);
        /** Declaring and defining all the required states for the component **/
        this.state = {
            showPreviewModal: false,
            imgSrcPath: ""
        }
    }

    componentWillMount(){
        /** Adding an event listener **/
        this.eventEmitter = new EventEmitter();
        /** Registering an event with the name "manageModal", and defined a callback/event handler whenever there is
            an event broadcasted with this name from anywhere across the application**/
        this.eventEmitter.addListener("manageModal",({handleModal}) =>{
            //The paramter that is passed with the broadcast event handler 'handleModal'
            //is currently not being used.
            this.setState({showPreviewModal: !this.state.showPreviewModal});
        });
    }

    showHidePreview({preview}){
        this.setState({showPreviewModal: !this.state.showPreviewModal});
        this.setState({imgSrcPath: preview});
        console.info("showHidePreview");
    }

    render() {
        return (
            <div className='container ftrsContent'>
                <ModalComp showModal={this.state.showPreviewModal} eventEmitter={this.eventEmitter} imgPath={this.state.imgSrcPath}></ModalComp>

                <h3> React Features implmented as components. </h3>
                <p> React provides lot of features and abilities to enhance the UI for better performance.Below are some of them
                implemented as components. Some of the features of React :</p>
                <div className='row'>
                      <div className='col-sm-4'><ul><li> Rendering Custom Component </li><li> Properties and Child elements/Child content </li><li> Handling Events </li></ul></div>
                      <div className='col-sm-4'><ul><li> States </li><li> Keys </li><li> Animations </li></ul></div>
                      <div className='col-sm-4'><ul><li> Refs </li><li> Forms </li></ul></div>
                </div>

                {/*For custom component */}
                <div className='row custComp'>
                      <div className='col-sm-12'>
                          <h4>Custom Component <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                              onClick={(event) => this.showHidePreview({preview:sampleCompImg1})}></i></h4>
                          <MyComponent/>
                          <div className='row'>
                              <pre>&lt;MyComponent/&gt;&lt;/MyComponent&gt;<br/>
                                  <strong className='mrkUp'>Markup rendered</strong><br/>
                                  &lt;div&gt;&lt;p&gt;Any component should have a single root parent.&lt;/p&gt;&lt;/div&gt;
                              </pre>
                          </div>
                      </div>
                </div>

                {/* Component to showcase Parent & Child nodes. Also to get the children nodes. */}
                <div className='row childPropComp'>
                      <div className='col-sm-12'>
                          <h4>Properties and Child elements/Child content <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                              onClick={(event) => this.showHidePreview({preview:sampleCompImg2})}></i></h4>
                          <div className='row'>
                              <div className='allignComp'>
                                <RenderChild myprop='This Property'>This text is added as the child element</RenderChild>
                              </div>
                              <pre>&lt;RenderChild myprop='This Property'&gt;This text is added as the child element&lt;/RenderChild&gt;
                                   <br/><strong className='mrkUp'>Markup rendered</strong><br/>
                                   &lt;div className="renderParent"&gt;&lt;div>Property(myprop) passed as attribute in the RenderChild custom element :
                                        &lt;strong&gt;this.props.myprop&lt;/strong&gt;
                                   &lt;/div&gt;
                                   &lt;div className="renderChild">Child content passed as inner text in the RenderChild custom element :
                                        &lt;strong&gt;this.props.children&lt;/strong&gt;
                                   &lt;/div&gt;
                                   &lt;/div&gt;
                              </pre>
                              <div className='allignComp'>
                                  <PrarentNode></PrarentNode>
                              </div>
                              <pre>&lt;PrarentNode&gt;&lt;/PrarentNode&gt;
                                  <br/><strong className='mrkUp'>Markup rendered</strong><br/>
                                  &lt;div className="parentChild"&gt;RenderChild custom  component added above is appended as a child node.
                                      &lt;RenderChild myprop='Child property'&gt;This is custom component inside another custom component&lt;/RenderChild&gt;
                                  &lt;/div&gt;
                              </pre>
                          </div>
                      </div>
                </div>

                {/* Events handling for components. */}
                <div className='row eventsComp'>
                    <div className='col-sm-12'>
                        <h4> Handling Events <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                            onClick={(event) => this.showHidePreview({preview:sampleCompImg3})}></i></h4>
                        <div className='row'>
                            <div className='allignComp'>
                                <EventComponent>The inner text / child for the custom component.</EventComponent>
                            </div>
                            <pre>&lt;EventComponent&gt; The inner text / child for the custom component. &lt;/EventComponent&gt;</pre>
                        </div>
                    </div>
                </div>

                {/* State changes in components. */}
                <div className='row compState'>
                    <div className='col-sm-12'>
                        <h4> States <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                        onClick={(event) => this.showHidePreview({preview:sampleCompImg4})}></i></h4>
                        <div className='row'>
                            <ComponentState></ComponentState>
                            <pre>&lt;ComponentState&gt; States handling in components &lt;/ComponentState&gt;</pre>
                        </div>
                    </div>
                </div>

                {/* Refs in components. */}
                <div className='row compRefs'>
                    <div className='col-sm-12'>
                        <h4> Refs <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                        onClick={(event) => this.showHidePreview({preview:sampleCompImg5})}></i></h4>
                        <div className='row'>
                            <RefsComp></RefsComp>
                            <pre>&lt;RefsComp&gt; Refs for components &lt;/RefsComp&gt;</pre>
                        </div>
                    </div>
                </div>

                {/* Animations and user of keys */}
                <div className='row animateComp'>
                    <div className='col-sm-12'>
                        <h4> Animations & Keys <i title="Code implementation view" className='glyphicon glyphicon-picture pull-right codeView'
                        onClick={(event) => this.showHidePreview({preview:sampleCompImg5})}></i></h4>
                        <div className='row'>
                            <AnimateComp></AnimateComp>
                            <pre>&lt;AnimateComp&gt;&lt;/AnimateComp&gt;</pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RctFtrs;
