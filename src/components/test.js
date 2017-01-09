import React, { PropTypes } from 'react'
import {Button, Menu, Dropdown, Icon} from 'antd'

class Test extends React.Component {
  handleMenuClick(e) {
    console.log('click', e);
  }
  render () {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>)
    return(
      <div className="test">
        <Dropdown overlay={menu}>
          <Button type="ghost">
            more <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}

export default Test
