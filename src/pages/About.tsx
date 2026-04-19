/**
 * 关于我们页面
 * GDX-VR Company Website
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  Lightbulb,
  Heart,
  Award,
  Building2,
  GraduationCap,
  Microscope,
  Globe,
  ChevronRight
} from 'lucide-react'

// 团队成员数据
const teamMembers = [
  {
    name: '张明远',
    role: '创始人 & CEO',
    background: '清华大学计算机博士，15年AI研发经验',
    avatar: 'ZM'
  },
  {
    name: '李雪琴',
    role: '技术副总裁',
    background: '北京大学AI实验室资深研究员',
    avatar: 'LX'
  },
  {
    name: '王建国',
    role: '产品总监',
    background: '曾任某知名教育科技公司产品VP',
    avatar: 'WJ'
  },
  {
    name: '陈思远',
    role: 'VR技术负责人',
    background: 'VR/AR领域顶尖专家，多项专利发明人',
    avatar: 'CS'
  }
]

// 发展历程
const timeline = [
  { year: '2018', title: '公司成立', desc: '广东创想元宇科技正式成立' },
  { year: '2019', title: '首获投资', desc: '完成天使轮融资，获得千万级资金支持' },
  { year: '2020', title: '产品上线', desc: 'AI智能教学平台V1.0正式发布' },
  { year: '2021', title: 'VR突破', desc: 'VR虚拟仿真实训系统研发成功' },
  { year: '2022', title: '规模扩张', desc: '合作院校突破30家，完成A轮融资' },
  { year: '2023', title: '行业领先', desc: '入选国家高新技术企业，完成B轮融资' },
  { year: '2024', title: '技术深耕', desc: '发布新一代AI+VR融合解决方案' },
  { year: '2025', title: '持续创新', desc: 'AI教育产品全面升级，VR实训覆盖50+专业' }
]

// 企业文化
const culture = [
  { icon: Target, title: '使命', desc: '用AI和VR技术推动教育公平与创新' },
  { icon: Lightbulb, title: '创新', desc: '持续探索前沿技术与教育场景的融合' },
  { icon: Heart, title: '责任', desc: '为院校提供安全、可靠的教育科技产品' },
  { icon: Globe, title: '开放', desc: '与合作伙伴共建智慧教育生态' }
]

// 资质荣誉
const honors = [
  { icon: Award, title: '国家高新技术企业' },
  { icon: GraduationCap, title: '软件企业认定' },
  { icon: Microscope, title: 'ISO质量管理体系认证' },
  { icon: Building2, title: '广东省创新型企业' }
]

export default function About() {
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
                    item === '关于我们' ? 'text-primary' : 'text-text-secondary hover:text-primary'
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
              关于我们
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              用科技力量<span className="gradient-text">改变教育未来</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              广东创想元宇科技有限公司成立于2018年，是国家高新技术企业，专注于AI和VR技术在教育领域的创新应用
            </p>
          </motion.div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-text-primary mb-6">公司简介</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  广东创想元宇科技有限公司是一家专注于AI和VR技术在教育领域应用的国家高新技术企业。公司汇聚了来自清华大学、北京大学等顶尖高校的技术专家，致力于用科技创新推动教育公平与质量提升。
                </p>
                <p>
                  我们与多所知名院校建立深度合作关系，共同探索AI辅助教学、VR沉浸式实训等前沿教育科技的落地应用。目前已服务超过50所高校和职业院校，覆盖超过10万名师生。
                </p>
                <p>
                  公司拥有20余项核心专利技术，产品涵盖AI智能教学平台、VR虚拟仿真实训系统、智慧校园管理平台等多个领域，是教育科技领域的创新引领者。
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '2018', label: '成立年份' },
                    { value: '50+', label: '合作院校' },
                    { value: '10K+', label: '服务师生' },
                    { value: '20+', label: '核心专利' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-primary rounded-3xl opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">发展历程</h2>
            <p className="text-text-secondary">从初创到领先，见证我们的成长</p>
          </div>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">核心团队</h2>
            <p className="text-text-secondary">顶尖技术专家领衔的创新团队</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-24 px-6 lg:px-20 bg-deep-space text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">企业文化</h2>
            <p className="text-white/70">我们的价值观驱动着每一步前行</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-aurora-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 资质荣誉 */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">资质荣誉</h2>
            <p className="text-text-secondary">权威认证，品质保证</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {honors.map((honor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-50 flex items-center justify-center">
                  <honor.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">{honor.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 招聘CTA */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">加入我们</h2>
            <p className="text-xl text-white/90 mb-8">
              如果你热爱教育科技，渴望用技术改变教育，欢迎加入我们的团队
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all">
              查看职位
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
                  <MapPin className="w-4 h-4" /> 广东省广州市
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Users className="w-4 h-4" /> hr@gdx-vr.com
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
