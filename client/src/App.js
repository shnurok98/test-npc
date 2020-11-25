import React, { Component } from 'react';
import { ExtGrid, ExtRowheader } from "@sencha/ext-react-modern";
import { ExtColumn } from "@sencha/ext-react-modern";
const Ext = window['Ext'];

class App extends Component {

  constructor() {
    super()
    // this.data=[
    //   { name: 'Marc', email: 'marc@gmail.com',priceChangePct: .25 },
    //   { name: 'Nick', email: 'nick@gmail.com',priceChangePct: .35 },
    //   { name: 'Andy', email: 'andy@gmail.com',priceChangePct: .45 }
    // ]
    // this.store = Ext.create('Ext.data.Store', {data: this.data})
    //this.store = {xtype: 'store',data: data}

    Ext.define('mpe1gem', {
      extend: 'Ext.data.Model',
      fields: [
          {name: 'Наименование', type: 'int'},
          {name: 'Местонахождение',  type: 'string'},
          {name: 'ИНН',  type: 'string'},
          {name: 'Макс. об. (тыс. литров)',  type: 'string'},
          {name: 'Цена (тыс. руб. за один литр)',  type: 'string'},
          {name: 'Макс. об. (тыс. литров)',  type: 'string'},
          {name: 'Цена (тыс. руб. за один литр)',  type: 'string'},
          {name: 'Макс. об. (тыс. литров)',  type: 'string'},
          {name: 'Цена (тыс. руб. за один литр)',  type: 'string'},
          {name: 'Макс. об. (тыс. литров)',  type: 'string'},
          {name: 'Цена (тыс. руб. за один литр)',  type: 'string'}
      ]
    });

    this.store = Ext.create('Ext.data.Store', {
      model: 'mpe1gem',
      proxy: {
        type: 'ajax',
        url: 'http://localhost:4000/mpe1gem',
        reader: {
          type: 'json'
        }
      },
      autoload: true
    })
  }

  // loadData() {
  //   fetch('http://localhost:4000/mpe1gem')
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({ data: res });
  //     console.log(res);
  //   })
  // }

  componentDidMount = () => {
    //console.log('componentDidMount')
    // this.loadData();
    this.store.load()
    //console.log(this.grid.cmp)
  }

  extReactDidMount = detail => {
    //console.log('extReactDidMount')
    //this.grid.cmp.setStore(this.store);
  }

  renderSign = (format, value) => (
    <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
        {Ext.util.Format.number(value, format)}
    </span>
  )

  render() {
    return (
      <ExtGrid
        viewport={ true }
        ref={ grid => this.grid = grid }
        title="The Grid"
        store={ this.store }
        onReady={ this.extReactDidMount }
      >
        <ExtColumn text="Наименование" dataIndex="naim_org"></ExtColumn>
        <ExtColumn text="Местонахождение" dataIndex="adr_fact" width="150"></ExtColumn>
        <ExtColumn text="ИНН" dataIndex="inn" width="150"></ExtColumn>
        <ExtColumn text="Макс. об. (тыс. литров)" dataIndex="plazma_max"></ExtColumn>
        <ExtColumn text="Цена (тыс. руб. за один литр)" dataIndex="plazma_cena"></ExtColumn>
        <ExtColumn text="Макс. об. (тыс. литров)" dataIndex="erm_max"></ExtColumn>
        <ExtColumn text="Цена (тыс. руб. за один литр)" dataIndex="erm_cena"></ExtColumn>
        <ExtColumn text="Макс. об. (тыс. литров)" dataIndex="immg_max"></ExtColumn>
        <ExtColumn text="Цена (тыс. руб. за один литр)" dataIndex="immg_cena"></ExtColumn>
        <ExtColumn text="Макс. об. (тыс. литров)" dataIndex="alb_max"></ExtColumn>
        <ExtColumn text="Цена (тыс. руб. за один литр)" dataIndex="alb_cena"></ExtColumn>
      </ExtGrid>
    )
  }

}
export default App;
