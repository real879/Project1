import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, AppError } from '../store/types';
import { GeneralStateName } from '../store/GeneralStore/types';
import { generalShow, generalError } from '../store/GeneralStore/actions';

interface Props {
    state ?: GeneralStateName
    error ?: AppError
    showAction  ?: () => void
    errorAction ?: (msg : string) => void
}
interface State{
    msg : string
}
const initialState:State = {
    msg : ''
}

export class GeneralPage extends React.Component<Props, State>{
    constructor(props : Props){
        super(props);
        this.state = initialState;
    }
    render(){
        const errorDiv = (this.props.error != null)?
        (<div>
            {this.props.error.action}-{this.props.error.msg}
        </div>):null;
        return (<div>
            <div>Hello World!</div>
            <hr/>
            <div>{this.props.state}</div>
            <button onClick={this.props.showAction}>Show Action!</button>
            <hr/>
            <input
                type="text"
                value={this.state.msg}
                onChange={(e : any) => {
                    this.setState({ msg: e.target.value })
                }}
            />
            <button onClick={() => {
                this.props.errorAction(this.state.msg)
            }}>New Error!</button>
            <br/>
            {errorDiv}
        </div>);
    }
}

const mapStateToProps = (state : AppState, ownProps : any) => ({
    state : state.general.state,
    error : state.general.error
});

const mapDispatchToProps = (dispatch : any) => ({
    showAction  : () => { dispatch(generalShow()); },
    errorAction : (msg : string) => {
        dispatch(generalError({ action: 'test', msg }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);