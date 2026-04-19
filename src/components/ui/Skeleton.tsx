/**
 * 骨架屏组件
 * 页面加载中显示的占位动画
 */

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
}

export function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer'

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  )
}

// 首页骨架屏
export function HomeSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <header className="h-20 border-b border-gray-200 dark:border-gray-800 px-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <Skeleton width={180} height={40} />
          <div className="hidden md:flex items-center gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} width={80} height={20} />
            ))}
          </div>
          <Skeleton width={100} height={40} />
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Skeleton width="60%" height={60} className="mx-auto mb-6" />
          <Skeleton width="80%" height={30} className="mx-auto mb-4" />
          <Skeleton width="40%" height={30} className="mx-auto mb-12" />
          <div className="flex justify-center gap-4">
            <Skeleton width={160} height={50} />
            <Skeleton width={160} height={50} />
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20 px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <Skeleton width={200} height={40} className="mx-auto mb-4" />
          <Skeleton width="60%" height={24} className="mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-2xl">
                <Skeleton width={60} height={60} className="mb-6" />
                <Skeleton width="70%" height={24} className="mb-4" />
                <Skeleton width="100%" height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <Skeleton width={100} height={48} className="mx-auto mb-4" />
                <Skeleton width={80} height={24} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// 通用内容骨架屏
interface ContentSkeletonProps {
  rows?: number
  showAvatar?: boolean
}

export function ContentSkeleton({ rows = 5, showAvatar = false }: ContentSkeletonProps) {
  return (
    <div className="space-y-4">
      {showAvatar && (
        <div className="flex items-center gap-4 mb-6">
          <Skeleton variant="circular" width={48} height={48} />
          <div className="space-y-2">
            <Skeleton width={120} height={16} />
            <Skeleton width={80} height={12} />
          </div>
        </div>
      )}
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === rows - 1 ? '60%' : '100%'}
          height={16}
        />
      ))}
    </div>
  )
}

export default Skeleton
