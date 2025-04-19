'use client';

import { useEffect, useState } from 'react';

interface Application {
    id: number;
    examNumber: string;
    name: string;
    department: string;
    applicationType: string;
    status: string;
    applicationDate: string;
}

export default function ApplicantsPage() {
    const [applications, setApplications] = useState<Application[]>([]);
    const [department, setDepartment] = useState<string>('전체');
    const [applicationType, setApplicationType] = useState<string>('전체');
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const fetchApplications = async (params?: {
        department?: string;
        applicationType?: string;
        searchKeyword?: string;
    }) => {
        try {
            const queryParams = new URLSearchParams({
                department: params?.department || '전체',
                applicationType: params?.applicationType || '전체',
                searchKeyword: params?.searchKeyword || ''
            });

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/applications/search?${queryParams.toString()}`;
            console.log('Calling API:', apiUrl);
            
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error('Error details:', error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleSearch = () => {
        fetchApplications({
            department,
            applicationType,
            searchKeyword
        });
    };

    const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newDepartment = e.target.value;
        setDepartment(newDepartment);
        fetchApplications({
            department: newDepartment,
            applicationType,
            searchKeyword
        });
    };

    const handleApplicationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newType = e.target.value;
        setApplicationType(newType);
        fetchApplications({
            department,
            applicationType: newType,
            searchKeyword
        });
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">지원자 조회</h2>
                <p className="text-gray-600 mt-1">지원자 정보를 조회하고 관리할 수 있습니다.</p>
            </div>

            {/* 필터 섹션 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">모집단위</label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary"
                                value={department}
                                onChange={handleDepartmentChange}
                            >
                                <option>전체</option>
                                <option>인문대학</option>
                                <option>사회과학대학</option>
                                <option>자연과학대학</option>
                                <option>공과대학</option>
                                <option>예술대학</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i className="ri-arrow-down-s-line text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">전형구분</label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary"
                                value={applicationType}
                                onChange={handleApplicationTypeChange}
                            >
                                <option>전체</option>
                                <option>수시모집</option>
                                <option>정시모집</option>
                                <option>학생부종합</option>
                                <option>논술전형</option>
                                <option>특기자전형</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i className="ri-arrow-down-s-line text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">검색</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="이름 또는 수험번호 입력" 
                                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary"
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                <button 
                                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary"
                                    onClick={handleSearch}
                                >
                                    <i className="ri-search-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 결과 테이블 */}
            <div className="bg-white rounded-lg border border-primary overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-primary bg-opacity-10">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">수험번호</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">이름</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">모집단위</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">전형구분</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">원서접수일</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">상태</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">관리</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {applications.map((application) => (
                            <tr key={application.id} className="hover:bg-primary hover:bg-opacity-5">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.examNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{application.applicationType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {new Date(application.applicationDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                        {application.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <button className="text-primary hover:text-primary-dark">상세보기</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 페이지네이션 */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                    <div className="text-sm text-gray-700">
                        총 <span className="font-medium">{applications.length}</span>건 표시
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">이전</button>
                        <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md text-sm">1</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">2</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">3</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">4</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">5</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">다음</button>
                    </div>
                </div>
            </div>
        </div>
    );
} 