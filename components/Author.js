import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import "../public/style/components/author.css"

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="../images/logo.JPG" /></div>
            <div className="author-introduction">
                999999999
                <Divider>
                    社交账号
                </Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"></Avatar>
                <Avatar size={28} icon={<QqOutlined />} className="account"></Avatar>
                <Avatar size={28} icon={<WechatOutlined />} className="account"></Avatar>
            </div>
        </div>
    )
}
export default Author