import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { AppState, AppError } from '../store/types';
import { GeneralStateName } from '../store/GeneralStore/types';
import { generalShow, generalError } from '../store/GeneralStore/actions';

import { NavigationBar } from '../components/Navbar'
import ServantListPage from './ServantListPage'

interface Props {
    state       ?: GeneralStateName
    error       ?: AppError
    showAction  ?: () => void
    errorAction ?: (msg : string) => void
}
interface State{
    msg : string
}
const initialState:State = {
    msg : ''
}

const history = createBrowserHistory()

export class GeneralPage extends React.Component<Props, State>{
    constructor(props : Props){
        super(props);
        this.state = initialState;
    }
    render(){
        return (<div>
            <NavigationBar
                imgUrl="https://vignette.wikia.nocookie.net/fategrandorder/images/8/89/Wiki-wordmark.png/revision/latest?cb=20190613184911"
                brandFunc={()=>{
                    alert("Secret lol :V")
                }}
            />
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={ServantListPage}/>
                </Switch>
            </Router>
        </div>);
    }
}

const mapStateToProps = (state : AppState, ownProps : any) => ({
    state : state.general.state,
    error : state.general.error
});
const mapDispatchToProps = (dispatch : any) => ({
    showAction  : () => {
        dispatch(generalShow());
    },
    errorAction : (msg : string) => {
        dispatch(generalError({ action: 'test', msg }));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(GeneralPage);