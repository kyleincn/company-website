/**
 * 首页 - 基于设计稿实现
 * GDX-VR Company Website
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Eye, 
  GraduationCap, 
  Shield, 
  Users, 
  Globe, 
  Box, 
  Award,
  ArrowRight,
  Play,
  ChevronDown
} from 'lucide-react'
import { AnimatedNumber, StatsSection } from '@/components/ui/AnimatedNumber'
import { PartnerLogos } from '@/components/ui/PartnerLogos'

// 动画变体
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

// 服务卡片数据
const services = [
  {
    icon: Brain,
    title: 'AI智能教学',
    description: '基于大语言模型的智能教学助手，实现个性化学习路径规划，精准学情分析，提升教学效率。',
    link: '/products#ai'
  },
  {
    icon: Eye,
    title: 'VR沉浸实训',
    description: '虚拟现实技术打造身临其境的实训环境，打破时空限制，降低实训成本，保障实训安全。',
    link: '/products#vr'
  },
  {
    icon: GraduationCap,
    title: '智慧校园',
    description: '覆盖教学、管理、服务的全场景智慧校园解决方案，实现校园数字化管理一体化。',
    link: '/products#smart-campus'
  }
]

// 产品数据
const products = [
  {
    badge: 'AI 核心产品',
    title: 'AI智能教学平台',
    description: '融合生成式AI技术的智能教学平台，支持智能备课、作业批改、学情分析、教学评估等全流程AI赋能。',
    features: ['智能备课', '自动批改', '学情分析', '个性化推荐'],
    gradient: 'from-primary to-primary-dark',
    link: '/products'
  },
  {
    badge: 'VR 核心产品',
    title: 'VR虚拟仿真实训系统',
    description: '基于VR/AR技术的沉浸式实训平台，支持医学护理、机械工程、建筑设计等多个专业的虚拟仿真训练。',
    features: ['沉浸式体验', '安全无风险', '反复练习', '实时反馈'],
    gradient: 'from-smart-purple to-deep-space',
    link: '/products'
  }
]

// 公司优势
const advantages = [
  { icon: Shield, title: '国家高新技术企业', desc: '专注教育科技创新' },
  { icon: Users, title: '顶尖技术团队', desc: '清华北大专家领衔' },
  { icon: Globe, title: '校企深度合作', desc: '50+合作院校' },
  { icon: Box, title: '自主可控技术', desc: '20+核心专利' }
]

// 统计数据 - 用于数字动画组件
const statsData = [
  { value: 50, suffix: '+', label: '合作院校' },
  { value: 100, suffix: '+', label: '成功案例' },
  { value: 20, suffix: '+', label: '专利技术' },
  { value: 10, suffix: 'K+', label: '服务师生' }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] glass shadow-sm z-50">
        <div className="max-w-7xl mx-auto h-full px-8 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-extrabold text-lg">
              GDX
            </div>
            <span className="text-lg font-bold text-text-primary">创想元宇</span>
          </Link>

          {/* 导航链接 */}
          <ul className="hidden lg:flex items-center gap-8">
            {['首页', '关于我们', '产品服务', '解决方案', '新闻动态', '联系我们'].map((item, i) => (
              <li key={i}>
                <Link 
                  to={item === '首页' ? '/' : `/${item === '关于我们' ? 'about' : item === '产品服务' ? 'products' : item === '联系我们' ? 'contact' : ''}`}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    item === '首页' ? 'text-primary' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-primary transition-all ${
                    item === '首页' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA按钮 */}
          <Link 
            to="/contact" 
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/25"
          >
            立即咨询
          </Link>

          {/* 移动端菜单按钮 */}
          <button className="lg:hidden p-2 text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* 背景层 */}
        <div className="absolute inset-0">
          {/* 渐变光效 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,212,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(99,102,241,0.2)_0%,transparent_50%),radial-gradient(ellipse_at_50%_80%,rgba(0,102,255,0.1)_0%,transparent_50%)]">
          </div>
          {/* 网格背景 */}
          <div className="absolute inset-0 grid-bg"></div>
          {/* 浮动光球 */}
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        {/* 内容 */}
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-20 pt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* 徽章 */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-aurora-cyan rounded-full animate-pulse"></span>
            AI & VR 教育科技引领者
          </motion.div>

          {/* 标题 */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            <span className="gradient-text">AI赋能教育</span>
            <br />
            VR沉浸未来
          </motion.h1>

          {/* 副标题 */}
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            专注AI和VR在高教及职业教育领域的创新应用，
            <br className="hidden md:block" />
            打造新一代智慧教育解决方案，助力院校数字化转型升级
          </motion.p>

          {/* 按钮组 */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
              预约演示
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/products" className="btn-secondary px-10 py-4 text-lg">
              <Play className="w-5 h-5" />
              了解更多
            </Link>
          </motion.div>

          {/* 统计数据 - 数字滚动动画 */}
          <motion.div variants={fadeInUp} className="mt-24 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-20">
              {statsData.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-inter">
                    <AnimatedNumber 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      className="gradient-text"
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm md:text-base text-white/60 mt-3">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 滚动指示器 */}
        <div className="scroll-indicator">
          <span>向下滚动</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* 特色服务 */}
      <section id="services" className="py-24 lg:py-30 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* 标题区 */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              核心服务
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
              为什么选择我们
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              深耕教育科技领域，以技术创新驱动教学变革，为院校提供全方位的智慧教育解决方案
            </p>
          </div>

          {/* 服务卡片 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-10 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                {/* 顶部渐变条 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                
                {/* 图标 */}
                <div className="w-18 h-18 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                  <service.icon className="w-9 h-9 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* 内容 */}
                <h3 className="text-2xl font-semibold text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                
                {/* 链接 */}
                <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  了解更多
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section id="products" className="py-24 lg:py-30 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* 标题区 */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              产品中心
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
              核心产品解决方案
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              针对高等教育和职业教育量身打造，覆盖AI教学、VR实训、智慧管理等全场景
            </p>
          </div>

          {/* 产品卡片 */}
          <div className="grid lg:grid-cols-2 gap-10">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* 产品图片区 */}
                <div className={`relative h-72 bg-gradient-to-br ${product.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <span className="absolute top-5 left-5 px-4 py-2 bg-white/90 rounded-full text-primary text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>

                {/* 产品内容 */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-text-primary mb-3">{product.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{product.description}</p>
                  
                  {/* 特性标签 */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {product.features.map((feature, j) => (
                      <span key={j} className="px-4 py-2 bg-gray-50 rounded-lg text-sm text-text-secondary">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 链接 */}
                  <Link to={product.link} className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    了解详情
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们预览 */}
      <section className="py-24 lg:py-30 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* 左侧文字 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                关于创想元宇
              </h2>
              <p className="text-lg text-text-secondary leading-loose mb-8">
                广东创想元宇科技有限公司成立于2018年，是一家专注于AI和VR技术在教育领域应用的国家高新技术企业。公司汇聚了来自清华大学、北京大学等顶尖高校的技术专家，与多所知名院校建立深度合作关系，共同推动教育数字化转型。
              </p>

              {/* 优势列表 */}
              <div className="grid sm:grid-cols-2 gap-6">
                {advantages.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 右侧数据卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-3xl p-12 shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '50+', label: '合作院校' },
                    { value: '100+', label: '落地案例' },
                    { value: '20+', label: '专利技术' },
                    { value: '5年+', label: '行业深耕' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-5xl font-extrabold text-primary font-inter mb-2">{stat.value}</div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* 背景装饰 */}
              <div className="absolute -top-5 -right-5 w-full h-full bg-gradient-primary rounded-3xl opacity-10 -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 合作伙伴Logo墙 */}
      <PartnerLogos 
        title="他们正在使用我们的产品"
        subtitle="已服务超过50所高校和教育机构"
        limit={8}
        autoScroll={true}
      />

      {/* CTA 区域 */}
      <section id="contact" className="py-24 lg:py-30 px-6 lg:px-20 bg-gradient-primary relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              开启智慧教育新篇章
            </h2>
            <p className="text-xl text-white/90 mb-12">
              与创想元宇一起，探索AI与VR技术在教育领域的无限可能
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-xl">
              立即预约演示
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-deep-space text-white py-20 px-8 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* 顶部内容 */}
          <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            {/* 品牌 */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-extrabold text-lg">
                  GDX
                </div>
                <span className="text-lg font-bold">广东创想元宇科技有限公司</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                专注AI和VR在高教及职业教育领域的创新应用，用科技赋能教育，用创新改变未来。
              </p>
            </div>

            {/* 产品服务 */}
            <div>
              <h4 className="font-semibold mb-6">产品服务</h4>
              <ul className="space-y-3">
                {['AI智能教学平台', 'VR虚拟仿真实训', '智慧校园管理', '校企合作方案'].map((item, i) => (
                  <li key={i}>
                    <Link to="/products" className="text-white/60 text-sm hover:text-aurora-cyan transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 关于我们 */}
            <div>
              <h4 className="font-semibold mb-6">关于我们</h4>
              <ul className="space-y-3">
                {['公司简介', '核心团队', '发展历程', '资质荣誉'].map((item, i) => (
                  <li key={i}>
                    <Link to="/about" className="text-white/60 text-sm hover:text-aurora-cyan transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 联系我们 */}
            <div>
              <h4 className="font-semibold mb-6">联系我们</h4>
              <ul className="space-y-3">
                {['商务合作', '人才招聘', '技术支持', '媒体采访'].map((item, i) => (
                  <li key={i}>
                    <Link to="/contact" className="text-white/60 text-sm hover:text-aurora-cyan transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 底部 */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-white/40 text-sm">© 2026 广东创想元宇科技有限公司 版权所有</span>
            
            {/* 社交媒体 */}
            <div className="flex gap-4">
              {[
                { name: '微信', icon: 'M8.5 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM15.5 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.526 5.55 3.926 7.227l-.926 2.781 3.252-1.626A11.394 11.394 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2z' },
                { name: '微博', icon: 'M10.098 20c-4.612 0-8.353-2.66-8.353-5.947 0-1.652 1.057-3.466 2.788-5.18 2.34-2.316 5.01-3.338 5.564-2.127.276.605.12 1.526-.12 2.28-.484 1.512-.846 2.04.362 2.688 1.208.648 4.004-.12 4.497-2.64.24-1.207-.12-2.268-.846-3.216-.483-.64-.846-1.208-.605-1.808.846-2.16 3.374-.96 3.374-.96 1.205.365 1.327 1.75 1.327 1.75.365 2.4-1.447 3.8-1.447 3.8 1.75 2.52-.12 5.22-2.668 5.22-1.448 0-2.52-.725-3.374-1.567-.604-.605-.967-1.327-1.45-1.567-.241-.12-.362-.12-.362-.365 0-.12.12-.24.362-.24.483 0 .967.12 1.45.24.966.363 1.81 1.207 2.274 2.16.362.725.241 1.567-.12 2.16-.362.605-.846 1.208-1.327 1.448-.605.36-1.086.605-1.207.725-.12.12-.12.24-.12.24 0 .12.362.12.362.12.12-.12.362-.12.605-.24.483-.24 1.086-.604 1.569-1.085.725-.725 1.207-1.69 1.327-2.16.241-.846-.12-1.81-.846-2.416-.846-.725-2.034-1.085-3.374-.725-.604.12-1.086.365-1.328.725-.604.725-.846 1.69-.604 2.64.362 1.085 1.208 1.93 2.16 2.4-.483.12-.846.24-1.329.24h-.12c-.604 0-1.207-.12-1.69-.24h-.12c-.604-.12-.967-.36-1.569-.605h-.12c-.24-.12-.483-.24-.725-.48h-.12c-.483-.12-.846-.365-1.208-.605-.362-.24-.725-.48-1.086-.725z' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  aria-label={social.name}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
