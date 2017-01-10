import React from 'react';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

import { Select } from 'antd';
const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
	if (timeout) {
		clearTimeout(timeout);
		timeout = null;
	}
  	currentValue = value;
  	function fake() {
    		const str = querystring.encode({
      			code: 'utf-8',
      			q: value,
    		});
    		jsonp(`https://suggest.taobao.com/sug?${str}`)
      			.then(response => response.json())
      			.then((d) => {
        			if (currentValue === value) {
          				const result = d.result;
          				const data = [];
          				result.forEach((r) => {
            					data.push({
              						value: r[0],
              						text: r[0],
            					});
          				});
          			callback(data);
        			}		
      			});
  	}
  	timeout = setTimeout(fake, 300);
}

export default class Search2 extends React.Component {
	constructor(props) {
    		super(props);
    		this.state = {
    			data: [ ],
    			value: '',
    			style: {width: "200px"},
    			placeholder: '输入你想看的任何东西!'
    		}
		this.handleChange = this.handleChange.bind(this)
  	}
	handleChange(value) {
		this.setState({ value });
		fetch(value, data => this.setState({ data }));
	}
  	render() {
    		const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    		return (
      		<Select
			combobox
			value={this.state.value}
			placeholder={this.state.placeholder}
			notFoundContent=""
			style={this.state.style}
			defaultActiveFirstOption={false}
			showArrow={false}
			filterOption={false}
			onChange={this.handleChange}
      			>
        		{options}
      		</Select>
    );
  }
}
