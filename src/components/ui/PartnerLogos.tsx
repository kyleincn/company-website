/**
 * 合作伙伴Logo墙组件
 * 展示合作院校和企业logo
 */

import { motion } from 'framer-motion'

// 合作伙伴数据
export interface Partner {
  name: string
  logo: string
  type: 'university' | 'enterprise' | 'government'
}

export const partners: Partner[] = [
  { name: '中山大学', logo: 'SYSU', type: 'university' },
  { name: '华南理工大学', logo: 'SCUT', type: 'university' },
  { name: '暨南大学', logo: 'JNU', type: 'university' },
  { name: '华南师范大学', logo: 'SCNU', type: 'university' },
  { name: '深圳大学', logo: 'SZU', type: 'university' },
  { name: '广东工业大学', logo: 'GDUT', type: 'university' },
  { name: '广州大学', logo: 'GZHU', type: 'university' },
  { name: '华南农业大学', logo: 'SCAU', type: 'university' },
]

// Logo占位符组件（用于没有实际logo图片时）
function LogoPlaceholder({ name, type }: { name: string; type: string }) {
  const initials = name.slice(0, 2)

  const typeColors = {
    university: 'from-blue-500 to-cyan-500',
    enterprise: 'from-purple-500 to-pink-500',
    government: 'from-green-500 to-emerald-500',
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${typeColors[type as keyof typeof typeColors]} rounded-lg`}
    >
      <span className="text-white font-bold text-xl">{initials}</span>
    </div>
  )
}

// Logo墙组件
interface PartnerLogosProps {
  title?: string
  subtitle?: string
  limit?: number
  autoScroll?: boolean
  className?: string
}

export function PartnerLogos({
  title = '他们正在使用我们的产品',
  subtitle = '已服务超过50所高校和教育机构',
  limit,
  autoScroll = true,
  className = ''
}: PartnerLogosProps) {
  const displayPartners = limit ? partners.slice(0, limit) : partners

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-900/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Logo 网格 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {displayPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video flex items-center justify-center">
                <LogoPlaceholder name={partner.name} type={partner.type} />
              </div>
              <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 自动滚动版本（可选） */}
        {autoScroll && (
          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -50 + '%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear'
                }
              }}
            >
              {[...displayPartners, ...displayPartners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-32 h-20 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm"
                >
                  <LogoPlaceholder name={partner.name} type={partner.type} />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PartnerLogos
