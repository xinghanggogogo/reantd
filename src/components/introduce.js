import React from 'react'
import { Pagination, Spin, Alert} from 'antd'

export default class myIntroduce extends React.Component {
       constructor(props) {
            	super(props)
       }
       render() {
            	return (
                	<div className="ani-box">
                        	Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
  				<Pagination
    					total={85}
    					showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    					pageSize={20}
    					defaultCurrent={1}
    					/>
    				<Spin spinning={false}>
    					<Alert
      						message="Alert message title"
      						description="Further details about the context of this alert."
      						type="info"
    					/>
 	 			</Spin>
                	</div>
            	)
       }
}
