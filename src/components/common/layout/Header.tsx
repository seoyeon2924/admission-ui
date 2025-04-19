'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-['Pacifico']">logo</h1>
          <span className="ml-4 text-white font-medium">입학관리 시스템</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
            <i className="ri-notification-3-line text-white"></i>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <i className="ri-user-line text-primary"></i>
            </div>
            <span className="ml-2 text-white">김관리자님</span>
          </div>
        </div>
      </div>
    </header>
  );
} 