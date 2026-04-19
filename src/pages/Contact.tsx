/**
 * 联系我们页面
 * GDX-VR Company Website
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Users,
  MessageSquare,
  Headphones,
  ArrowUpRight
} from 'lucide-react'

// 表单验证Schema
const contactSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符'),
  company: z.string().optional(),
  email: z.string().email('请输入有效的邮箱地址'),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入有效的手机号码'),
  subject: z.string().min(1, '请选择咨询主题'),
  message: z.string().min(10, '留言内容至少10个字符')
})

type ContactForm = z.infer<typeof contactSchema>

// 咨询主题选项
const subjects = [
  'AI智能教学平台',
  'VR虚拟仿真实训',
  '智慧校园建设',
  '校企合作',
  '产品试用',
  '商务合作',
  '技术支持',
  '其他'
]

// 联系信息
const contactInfo = [
  { icon: Phone, title: '联系电话', content: '400-888-8888', link: 'tel:400-888-8888' },
  { icon: Mail, title: '商务邮箱', content: 'contact@gdx-vr.com', link: 'mailto:contact@gdx-vr.com' },
  { icon: MapPin, title: '公司地址', content: '广东省广州市天河区珠江新城', link: null },
  { icon: Clock, title: '服务时间', content: '周一至周五 9:00-18:00', link: null }
]

// 咨询类型
const consultationTypes = [
  { icon: Users, title: '院校合作', desc: '与高校、职业院校建立深度合作关系' },
  { icon: MessageSquare, title: '产品咨询', desc: '了解产品功能、获取定制化方案' },
  { icon: Headphones, title: '技术支持', desc: '7×24小时技术支持服务' }
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('表单提交:', data)
    setIsSubmitted(true)
    reset()
  }

  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] glass shadow-sm z-50">
        <div className="max-w-7xl mx-auto h-full px-8 lg:px-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-extrabold text-lg">
              GDX
            </div>
            <span className="text-lg font-bold text-text-primary">创想元宇</span>
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {['首页', '关于我们', '产品服务', '解决方案', '新闻动态', '联系我们'].map((item, i) => (
              <li key={i}>
                <Link 
                  to={item === '首页' ? '/' : `/${item === '关于我们' ? 'about' : item === '产品服务' ? 'products' : item === '联系我们' ? 'contact' : ''}`}
                  className={`text-sm font-medium transition-colors ${
                    item === '联系我们' ? 'text-primary' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all">
            立即咨询
          </Link>
        </div>
      </nav>

      {/* Hero区域 */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,212,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(99,102,241,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 grid-bg"></div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              联系我们
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              开启智慧教育<span className="gradient-text">合作之旅</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              无论是产品咨询、技术支持还是商务合作，我们都期待与您建立联系
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系信息卡片 */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-text-secondary hover:text-primary transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-text-secondary">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 咨询类型和表单 */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* 左侧咨询类型 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8">咨询类型</h2>
              
              <div className="space-y-6">
                {consultationTypes.map((type, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{type.title}</h3>
                    <p className="text-text-secondary text-sm">{type.desc}</p>
                  </div>
                ))}
              </div>

              {/* 关注我们 */}
              <div className="mt-10 bg-deep-space rounded-2xl p-8 text-white">
                <h3 className="font-semibold mb-4">关注我们</h3>
                <p className="text-white/70 text-sm mb-6">获取最新产品动态和行业资讯</p>
                <div className="flex gap-4">
                  {['微信', '微博', '公众号'].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 右侧表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">在线留言</h2>
                    <p className="text-text-secondary text-sm">我们将尽快与您联系</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">提交成功！</h3>
                    <p className="text-text-secondary mb-6">感谢您的留言，我们将在24小时内与您联系</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      继续留言
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* 姓名 */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('name')}
                          placeholder="请输入您的姓名"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* 公司 */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          公司/院校
                        </label>
                        <input
                          {...register('company')}
                          placeholder="请输入公司或院校名称"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* 邮箱 */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          邮箱 <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="请输入邮箱地址"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      {/* 手机 */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          手机号码 <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('phone')}
                          placeholder="请输入手机号码"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* 咨询主题 */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        咨询主题 <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">请选择咨询主题</option>
                        {subjects.map((subject, i) => (
                          <option key={i} value={subject}>{subject}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* 留言内容 */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        留言内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="请详细描述您的需求..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* 提交按钮 */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          提交中...
                        </>
                      ) : (
                        <>
                          提交留言
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">期待与您合作</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  广东创想元宇科技有限公司位于广州市天河区珠江新城，毗邻广州图书馆和广东省博物馆，交通便利，环境优美。欢迎莅临参观洽谈！
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-aurora-cyan" />
                    <span>广东省广州市天河区珠江东路30号</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-aurora-cyan" />
                    <span>400-888-8888</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-aurora-cyan" />
                    <span>contact@gdx-vr.com</span>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-white/50" />
                  <p className="text-white/70">地图位置</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-deep-space text-white py-20 px-8 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-extrabold text-lg">GDX</div>
                <span className="text-lg font-bold">创想元宇</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                专注AI和VR在高教及职业教育领域的创新应用
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">产品服务</h4>
              <ul className="space-y-3">
                {['AI智能教学平台', 'VR虚拟仿真实训', '智慧校园管理'].map((item, i) => (
                  <li key={i}><Link to="/products" className="text-white/60 text-sm hover:text-aurora-cyan transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">关于我们</h4>
              <ul className="space-y-3">
                {['公司简介', '核心团队', '发展历程'].map((item, i) => (
                  <li key={i}><Link to="/about" className="text-white/60 text-sm hover:text-aurora-cyan transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">联系我们</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4" /> 400-888-8888
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="w-4 h-4" /> contact@gdx-vr.com
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center text-white/40 text-sm">
            © 2026 广东创想元宇科技有限公司 版权所有
          </div>
        </div>
      </footer>
    </div>
  )
}
