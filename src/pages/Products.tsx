/**
 * 产品服务页面
 * GDX-VR Company Website
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Brain, 
  Eye, 
  GraduationCap, 
  Monitor,
  BookOpen,
  Play,
  Settings,
  BarChart3,
  Users,
  Award,
  CheckCircle,
  ArrowUpRight,
  Layers,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react'

// 产品分类
const categories = [
  { id: 'ai', name: 'AI教育产品', icon: Brain, color: 'from-primary to-blue-400' },
  { id: 'vr', name: 'VR实训产品', icon: Eye, color: 'from-purple-500 to-purple-600' },
  { id: 'smart-campus', name: '智慧校园', icon: GraduationCap, color: 'from-emerald-500 to-emerald-600' },
  { id: 'solutions', name: '解决方案', icon: Layers, color: 'from-orange-500 to-orange-600' }
]

// AI产品
const aiProducts = [
  {
    name: 'AI智能教学平台',
    desc: '融合生成式AI技术的智能教学平台，覆盖备课、教学、批改、分析全流程',
    features: ['智能备课助手', 'AI作业批改', '学情智能分析', '个性化推荐', '教学评估报告'],
    highlight: true
  },
  {
    name: '智能学情分析系统',
    desc: '基于大数据和AI算法的学情分析平台，精准定位学生薄弱环节',
    features: ['知识点掌握分析', '学习路径规划', '预警提醒', '学情报告生成'],
    highlight: false
  },
  {
    name: 'AI智能备课系统',
    desc: '帮助教师快速生成教案、课件、试题的AI辅助工具',
    features: ['教案自动生成', '课件智能制作', '试题批量生成', '资源智能推荐'],
    highlight: false
  }
]

// VR产品
const vrProducts = [
  {
    name: 'VR虚拟仿真实训系统',
    desc: '沉浸式VR实训平台，支持多个专业的虚拟仿真训练',
    features: ['医学护理实训', '机械工程仿真', '建筑设计可视化', '化学实验模拟'],
    highlight: true
  },
  {
    name: 'VR多人协作平台',
    desc: '支持多人同时在线的VR协作空间，实现远程实训教学',
    features: ['多人实时协作', '场景共享', '教师监控', '数据记录'],
    highlight: false
  },
  {
    name: 'AR增强现实教学套件',
    desc: '将AR技术融入课堂教学，让抽象知识具象化',
    features: ['3D模型展示', '交互式学习', 'AR实验模拟', '移动端支持'],
    highlight: false
  }
]

// 智慧校园
const smartCampusProducts = [
  { name: '智慧教学管理平台', icon: Monitor, desc: '教学全流程数字化管理' },
  { name: '智能排课系统', icon: BookOpen, desc: 'AI驱动的智能排课' },
  { name: '在线学习平台', icon: Play, desc: '支持直播录播的在线学习' },
  { name: '教务管理系统', icon: Settings, desc: '高效的教务管理' },
  { name: '数据分析驾驶舱', icon: BarChart3, desc: '数据驱动的决策支持' },
  { name: '智慧宿舍管理', icon: Users, desc: '宿舍数字化管理' }
]

// 客户案例
const cases = [
  {
    school: '华南理工大学',
    type: 'AI智能教学',
    desc: '引入AI智能教学平台，实现教学效率提升40%，学生满意度达到95%以上',
    result: ['教学效率提升40%', '学生满意度95%']
  },
  {
    school: '深圳职业技术学院',
    type: 'VR仿真实训',
    desc: '建设VR仿真实训中心，覆盖10个专业的虚拟仿真训练，降低实训成本60%',
    result: ['覆盖10个专业', '成本降低60%']
  },
  {
    school: '中山大学',
    type: '智慧校园',
    desc: '部署智慧校园整体解决方案，实现校园管理效率提升，数据决策能力增强',
    result: ['效率提升50%', '数据决策升级']
  }
]

// 为什么选择我们
const whyChooseUs = [
  { icon: Sparkles, title: '前沿技术', desc: '自主研发的AI和VR核心算法，技术领先行业' },
  { icon: Shield, title: '安全可靠', desc: '通过等保三级认证，数据安全有保障' },
  { icon: Zap, title: '快速部署', desc: '云端部署，弹性扩展，快速上线' },
  { icon: Users, title: '专业服务', desc: '7×24小时技术支持，定制化服务' },
  { icon: Award, title: '品质保证', desc: 'ISO质量管理体系，品质有保证' },
  { icon: CheckCircle, title: '持续迭代', desc: '产品持续更新迭代，紧跟教育需求' }
]

export default function Products() {
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
                    item === '产品服务' ? 'text-primary' : 'text-text-secondary hover:text-primary'
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
              产品中心
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              <span className="gradient-text">AI + VR</span> 全场景解决方案
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              针对高等教育和职业教育量身打造，覆盖AI教学、VR实训、智慧管理等全场景，用科技赋能教育创新
            </p>
          </motion.div>
        </div>
      </section>

      {/* 产品分类 */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <motion.a
                key={i}
                href={`#${cat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-text-primary">{cat.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* AI产品 */}
      <section id="ai" className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-full text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              AI教育产品
            </span>
            <h2 className="text-4xl font-bold text-text-primary mb-4">AI智能教学平台</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">融合大语言模型技术，为教育者提供智能化教学工具，让AI成为教师的得力助手</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {aiProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl p-8 ${product.highlight ? 'bg-gradient-primary text-white' : 'bg-white shadow-md'}`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${product.highlight ? 'text-white' : 'text-text-primary'}`}>
                  {product.name}
                </h3>
                <p className={`mb-6 leading-relaxed ${product.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                  {product.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${product.highlight ? 'text-white' : 'text-primary'}`} />
                      <span className={product.highlight ? 'text-white/90' : 'text-text-secondary'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center gap-2 font-semibold ${product.highlight ? 'text-white hover:text-white/80' : 'text-primary'}`}
                >
                  了解更多 <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VR产品 */}
      <section id="vr" className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-6">
              <Eye className="w-4 h-4" />
              VR实训产品
            </span>
            <h2 className="text-4xl font-bold text-text-primary mb-4">VR虚拟仿真实训系统</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">沉浸式VR技术打破时空限制，为学生提供安全、可重复的实训环境</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {vrProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl overflow-hidden ${product.highlight ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white' : 'bg-white shadow-md'}`}
              >
                <div className={`h-48 ${product.highlight ? 'bg-gradient-to-br from-purple-500 to-purple-700' : 'bg-gradient-to-br from-purple-100 to-purple-50'}`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Eye className={`w-20 h-20 ${product.highlight ? 'text-white/30' : 'text-purple-300'}`} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${product.highlight ? 'text-white' : 'text-text-primary'}`}>
                    {product.name}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${product.highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                    {product.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${product.highlight ? 'bg-white' : 'bg-purple-500'}`}></span>
                        <span className={product.highlight ? 'text-white/90' : 'text-text-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`inline-flex items-center gap-2 font-semibold ${product.highlight ? 'text-white' : 'text-purple-600'}`}
                  >
                    了解详情 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 智慧校园 */}
      <section id="smart-campus" className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" />
              智慧校园
            </span>
            <h2 className="text-4xl font-bold text-text-primary mb-4">全场景智慧校园解决方案</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">覆盖教学、管理、服务的全场景数字化解决方案</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartCampusProducts.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <product.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{product.name}</h3>
                <p className="text-text-secondary text-sm">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">客户案例</h2>
            <p className="text-text-secondary">已成功服务多所知名院校，获得广泛认可</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md"
              >
                <div className="bg-gradient-primary px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{caseItem.school}</h3>
                      <span className="text-white/70 text-sm">{caseItem.type}</span>
                    </div>
                    <Award className="w-10 h-10 text-white/30" />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-text-secondary mb-6 leading-relaxed">{caseItem.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {caseItem.result.map((result, j) => (
                      <span key={j} className="px-4 py-2 bg-primary-50 text-primary text-sm font-medium rounded-lg">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">为什么选择我们</h2>
            <p className="text-text-secondary">专业、可靠、值得信赖</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-5"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">开启您的智慧教育之旅</h2>
            <p className="text-xl text-white/90 mb-8">
              联系我们，获取专属解决方案和免费试用机会
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all">
                预约演示
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all">
                获取报价
              </Link>
            </div>
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
                <li className="text-white/60 text-sm">广东省广州市</li>
                <li className="text-white/60 text-sm">contact@gdx-vr.com</li>
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
