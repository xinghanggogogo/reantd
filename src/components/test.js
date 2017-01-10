import React, { PropTypes } from 'react'
import {Button, Menu, Dropdown, Icon, message, Radio, Layout, Breadcrumb, Slider, Tabs, Select} from 'antd'
const {Header, Sider, Content, Footer} = Layout
const TabPane = Tabs.TabPane
const SubMenu = Menu.SubMenu
const Option = Select.Option
const OptGroup = Select.OptGroup

class Test extends React.Component {
	constructor(props) {
		super(props);
	}
	handleMenuClick(e) {
		message.info(e.key)
	}
	handleSliderChange(value) {
		message.info(value[0] + ' ' +value[1])
	}
	handleSelectChange(value) {
		//message.info(value)
		message.info(`selected ${value}`)
	}
	render () {
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1">1st item</Menu.Item>
				<Menu.Item key="2">2nd item</Menu.Item>
				<Menu.Item key="3">3rd item</Menu.Item>
			</Menu>)
		return (
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
				<Icon type='rocket' spin={true} size='small'/>
				<br/>
				<Layout className="layout">
					<Header>
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
						<div style={{ background: '#eee', minHeight: 280 }}>
							<Tabs defaultActiveKey="2" type="card">
    								<TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
      									Tab 1
    								</TabPane>
    								<TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
      									Tab 2
    								</TabPane>
  							</Tabs>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>

			<br/>

			<Slider range defaultValue={[20, 50]} step={5} onChange={this.handleSliderChange} />

			<br/>
			<Select defaultValue="lucy"
				style={{ width: 200 }}
				showSearch={false}
				onChange={this.handleSelectChange}
				>
    				<OptGroup label="Manager">
      					<Option value="jack">Jack</Option>
      					<Option value="lucy">Lucy</Option>
    				</OptGroup>
    				<OptGroup label="Engineer">
      					<Option value="Yiminghe">yiminghe</Option>
    				</OptGroup>
  			</Select>

			</div>
		)
	}
}

export default Test
