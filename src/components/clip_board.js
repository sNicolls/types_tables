import React, { Component } from 'react';
import "../assets/clip_board.css"
import Tables from './tables'

export default class extends Component {
  constructor(props){
          super(props);
          this.state = {
            tableNames: ["table1"],
            columnTypes: ["text"],
          };
          this.handleSubmit = this.handleSubmit.bind(this);

      }
      handleSubmit = (e) => {
        if (e.key === 'Enter') {
          var tableNames = this.state.tableNames;
          var newTableName = e.target.value;
          tableNames.push(newTableName);
          this.setState({
            tableNames: tableNames
          })
          e.target.value = "";
        }
      }

    

      render() {
        var tables = [];
        for(var i = 0; i < this.state.tableNames.length; i++){
          tables.push(<h4>{this.state.tableNames[i]}</h4>)
        }
          return(
            <div className="container">
              <div className="createTableForm">
                <input onKeyPress={this.handleSubmit} className="createTableInput" placeholder="+ Create a Table"></input>
              </div>
              <div className="tableExterior">
                <Tables tableNames={this.state.tableNames} columnTypes={this.state.columnTypes}/>
              </div>
            </div>
          )
      }
}
