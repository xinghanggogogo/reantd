import React from 'react';
import { AutoComplete, Input, Button, Icon} from 'antd'
const Search = Input.Search;

import '../styles/search.scss';

class SearchCom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: []
		}
		this.onSelect = this.onSelect.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	onSelect(key) {
		console.log(key)
	}
	handleChange(value) {
		console.log(value)
		this.setState({
      			dataSource: ! value ? [] : [
        			value,
        			value + value,
      			],		
    		})
	}
	render() {
		const { dataSource } = this.state
		return (
			<div className="search">
				<AutoComplete
					className = "autocomplete"
					dataSource = {dataSource}
					onChange = {this.handleChange}
					onSelect = {this.onselect}
					placeholder = "输入你想看的任何东西"
				/>
				<Button type="primary" className="search-btn" icon="search">搜索</Button>
				<Search placeholder="input search text" onSearch={value => console.log(value)} onChange={value => console.log(value)}/>
			</div>
		);
	}
}

export default SearchCom
