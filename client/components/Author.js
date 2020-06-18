import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import "../public/style/components/author.css"

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="../images/logo.JPG" /></div>
            <div className="author-introduction">
                现实会告诉你，不努力就会被生活给踩死。无需找什么借口，一无所有，就是拼的理由。
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