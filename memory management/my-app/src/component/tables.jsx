import React, {Component} from "react";
import Table from "./table";
import { red } from '@mui/material/colors';

const color = red[500];




export default class Tables extends Component{
    render(){
        let {referenceString, frameNumber, resetTurns, swapToggle, animationToggle, algorithms, detailToggle} = this.props;
        let referenceMap = new Map();
        referenceMap.set("0", "table-primary");
        referenceMap.set("1", "table-secondary");
        referenceMap.set("2", "table-info");
        referenceMap.set("3", "table-warning");
        referenceMap.set("4", "table-danger");
        referenceMap.set("5", "table-success");
        referenceMap.set("6", "table-add-0");
        referenceMap.set("7", "table-add-1");
        referenceMap.set("8", "coloo");
        referenceMap.set("9", "bg-gray-300");
        return algorithms.map( a => <Table key={a['name']} colorMap={referenceMap} frameNumber={frameNumber} resetTurns={resetTurns} swapToggle={swapToggle} detailToggle={detailToggle} animationToggle={animationToggle} referenceString={referenceString} algorithmLabel={a['name']} algorithm={a['f']}/>);
    }
}