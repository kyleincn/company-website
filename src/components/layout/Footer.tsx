import { Link } from 'react-router-dom';

const companyInfo = {
  name: '广东创想元宇科技有限公司',
  shortName: '创想元宇',
  description: '专注于AI和VR在高教和职业教育中的应用，提供创新的教育技术解决方案。',
  address: '广东省广州市天河区科技园',
  phone: '400-888-8888',
  email: 'contact@gdx-vr.com',
};

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '产品服务', href: '/products' },
  { name: '联系我们', href: '/contact' },
];

const socialLinks = [
  { name: '微信', href: '#' },
  { name: '微博', href: '#' },
  { name: 'LinkedIn', href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GD</span>
              </div>
              <span className="font-bold text-lg">{companyInfo.shortName}</span>
            </div>
            <p className="text-sm text-white/70">{companyInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{companyInfo.address}</li>
              <li>电话：{companyInfo.phone}</li>
              <li>邮箱：{companyInfo.email}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>
            © {currentYear} {companyInfo.name}. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
