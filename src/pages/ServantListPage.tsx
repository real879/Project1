import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, AppError } from '../store/types';

import { ServantList } from '../components/ServantList'

export class ServantListPage extends React.Component<any, any>{
    render(){
        return (<ServantList 
            list={[
                {
                    imgUrl      : "https://vignette.wikia.nocookie.net/fategrandorder/images/2/2c/Artoria3.png/revision/latest?cb=20170206150725",
                    name        : "Artoria Pendragon",
                    description : "A legendary king of Britain. Also called the King of Knights."
                                + "Artoria is a childhood name and, upon being raised as a king, she began to be called King Arthur."
                                + "In an age when chivalry had lost its beauty, with a holy sword in her hands, she brought about a brief moment of peace and final prosperity to Britain."
                                + "A man in historical fact, but it seems that in this world she was a cross-dressing beauty."
                },{
                    imgUrl      : "https://vignette.wikia.nocookie.net/fategrandorder/images/0/07/S76Stage2.png/revision/latest?cb=20191012040755",
                    name        : "Mordred",
                    description : "Mordred is a Knight of the Round Table and the legitimate child of King Arthur."
                                + "At the same time, the one who put an end to the legend-- at Camlann Hill, the Knight of Rebellion who slew King Arthur."
                }
            ]}
        />);
    }
}

const mapStateToProps = (state : AppState, ownProps : any) => ({});
const mapDispatchToProps = (dispatch : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ServantListPage);