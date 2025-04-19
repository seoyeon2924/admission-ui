'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: '대시보드', href: '/', icon: 'home' },
  { name: '접수 데이터 보정', href: '/correction', icon: 'file-upload' },
  { name: '지원서 출력', href: '/print', icon: 'printer' },
  { name: '성적 업로드', href: '/grades', icon: 'file-excel' },
  { name: '지원자 조회', href: '/applicants', icon: 'search' },
  { name: '평가 관리', href: '/evaluation', icon: 'bar-chart' }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md fixed h-full">
      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg ${
                    isActive
                      ? 'bg-primary bg-opacity-10 text-primary'
                      : 'hover:bg-primary hover:bg-opacity-10 hover:text-primary'
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`ri-${item.icon}-line`}></i>
                  </div>
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
} 