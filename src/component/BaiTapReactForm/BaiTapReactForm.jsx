import React, { Component } from 'react'
import ThongTin from './ThongTin'
import BangThongTin from './BangThongTin'

export default class BaiTapReactForm extends Component {

  render() {
    return (
      <div className='container'>
        <ThongTin />
        <BangThongTin />
      </div>
    )
  }
}

