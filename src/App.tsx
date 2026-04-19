/**
 * App.tsx - 应用入口
 * GDX-VR Company Website
 */

import { HashRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { HomeSkeleton } from '@/components/ui/Skeleton'

// 懒加载页面组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Contact = lazy(() => import('./pages/Contact'))

// 骨架屏加载组件
function PageLoader() {
  return (
    <div className="min-h-screen">
      <HomeSkeleton />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
