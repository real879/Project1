import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store/types';
import { generalShow } from '../store/GeneralStore/actions';

export class GeneralPage extends React.Component<any, any>{
    render(){
        return (<div>
            <div>Hello World!</div>
            <div>{this.props.state}</div>
            <button onClick={
                ()=>this.props.show()
            }>Click here!</button>
        </div>);
    }
}

function mapStateToProps(state:AppState, ownProps:any){
    return {
        state : state.general.state,
        error : state.general.error
    }
}

function mapDispatchToProps(dispatch:any){
    return {
        show: ()=>{ dispatch(generalShow()); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);