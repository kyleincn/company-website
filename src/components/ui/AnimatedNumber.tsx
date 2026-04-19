/**
 * 数字滚动动画组件
 * 滚动到视口时触发的数字递增动画
 */

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimal?: boolean
}

export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
  decimal = false
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        // 使用easeOutExpo缓动函数
        const easeOutExpo = progress === 1
          ? 1
          : 1 - Math.pow(2, -10 * progress)

        const currentValue = startValue + (value - startValue) * easeOutExpo

        if (decimal) {
          setDisplayValue(Math.round(currentValue * 10) / 10)
        } else {
          setDisplayValue(Math.floor(currentValue))
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration, decimal])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  )
}

// 统计数据项配置
export interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
  decimal?: boolean
}

// 统计数据数组
export const statsData: StatItem[] = [
  { value: 50, suffix: '+', label: '合作院校', decimal: false },
  { value: 100, suffix: '+', label: '成功案例', decimal: false },
  { value: 20, suffix: '+', label: '核心专利', decimal: false },
  { value: 10, suffix: 'K+', label: '服务师生', decimal: false },
]

// 统计组件
interface StatsSectionProps {
  className?: string
}

export function StatsSection({ className = '' }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimal={stat.decimal}
              duration={2000}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedNumber
