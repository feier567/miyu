import { Zap, Layout, Monitor, MessageSquareQuote, RefreshCw, Mic, Rocket, Sparkles } from 'lucide-react'
import './WhatsNewModal.scss'

interface WhatsNewModalProps {
    onClose: () => void
    version: string
}

function WhatsNewModal({ onClose, version }: WhatsNewModalProps) {
    const updates = [
        {
            icon: <Rocket size={20} />,
            title: '极速启动',
            desc: '重构启动流程，显著提升应用加载速度，带来丝滑的入场动画体验。'
        },
        {
            icon: <MessageSquareQuote size={20} />,
            title: '样式自定义',
            desc: '支持在设置中切换引用消息样式（需重启聊天窗口生效）。'
        },
        {
            icon: <RefreshCw size={20} />,
            title: '智能同步',
            desc: '优化数据库连接机制，支持自动同步最新消息数据（同步过程约需 20 秒）。'
        },
        {
            icon: <Sparkles size={20} />,
            title: '体验升级',
            desc: '支持“拍一拍”系统消息解析，新增头像懒加载与骨架屏，聊天浏览更流畅。'
        },
        {
            icon: <Mic size={20} />,
            title: '语音增强',
            desc: '语音转文字支持多模型选择，灵活平衡识别精度与速度，适配更多场景。'
        }
    ]

    return (
        <div className="whats-new-overlay">
            <div className="whats-new-modal">
                <div className="modal-header">
                    <span className="version-tag">新版本 {version}</span>
                    <h2>欢迎体验全新的密语</h2>
                    <p>我们为您带来了一些令人兴奋的改进</p>
                </div>

                <div className="modal-content">
                    <div className="update-list">
                        {updates.map((item, index) => (
                            <div className="update-item" key={index}>
                                <div className="item-icon">
                                    {item.icon}
                                </div>
                                <div className="item-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="start-btn" onClick={onClose}>
                        开启新旅程
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsNewModal
