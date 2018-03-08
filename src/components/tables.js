import React, { Component } from 'react';
import "../assets/tables.css"

export default class extends Component {
  constructor(props){
          super(props);
          this.state = {
            tableNames: props.tableNames,
            columnTypes: props.columnTypes,
            types: {"type1": {
              "attributes": ["attr1", "attr2"],
              "values": {
                "subj1": [
                   "val",
                   "val",
                ]
              }
            }},
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.addTableColumn = this.addTableColumn.bind(this);
          this.createTable = this.createTable.bind(this);
      }
      componentWillReceiveProps(){
          this.createTable();
      }
      createTable(){
        var tables = this.state.tables;
        tables

      }
      handleSubmit = (e) => {
        if (e.key === 'Enter') {
          e.target.value = "";
          console.log(e.target)
        }
      }
      addTableColumn(){
        var currentColumns = this.state.columnTypes;
        currentColumns.push("text")
        this.setState({
          columnTypes: currentColumns
        })
      }

      render() {
        var tableNames = this.state.tableNames;


        var columns = [];
        var tables = [];
        var rows = {};


        for(var k=0;k<this.state.columnTypes.length;k++){
          columns.push(
            <div className="tableColumn">
              <input className="cellTitle" placeholder="CellTitle"></input>
              <input className="tableCell" placeholder="Value"></input>
            </div>
        )
        }

        for(var i=0;i<this.state.tableNames.length;i++){
          tables.push(
            <div className="tableContainer">
              <div className="table">
                <div className="headerCell">
                  <input className="tableHeader" placeholder={this.state.tableNames[i]}></input>
                  <input className="rowLeader" placeholder="item1"></input>
                </div>
                {columns}
                <button className="glyphicon glyphicon-plus-sign addTableColumn" onClick={this.addTableColumn}></button>
              </div>
              <input className={"addTableRow rowInput"+i} placeholder="+ Add a Row" onKeyPress={this.handleSubmit}></input>
            </div>

          )
          }
          return(
            <div className="tableWrapper">
              {tables}

            </div>
          )

      }
}
