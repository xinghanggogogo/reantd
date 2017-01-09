import React, { PropTypes } from 'react'
import {Button, Menu, Dropdown, Icon, message, Radio, Layout, Breadcrumb} from 'antd'
const {Header, Sider, Content, Footer} = Layout
const SubMenu = Menu.SubMenu

class Test extends React.Component {
  handleMenuClick(e) {
    message.info(e.key)
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
        <br/>
        <Radio.Group value="default" onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/>
        <Icon type="verticle-right" />
        <Icon type='rocket' spin={true} size='small'/>
        <br/>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default Test
