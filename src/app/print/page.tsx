export default function PrintPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">지원서 출력</h2>
        <p className="text-gray-600 mt-1">지원서를 선택하여 PDF로 출력할 수 있습니다.</p>
      </div>

      {/* 필터 섹션 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">모집단위</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary">
                <option>전체</option>
                <option>인문대학</option>
                <option>사회과학대학</option>
                <option>자연과학대학</option>
                <option>공과대학</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">전형구분</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary">
                <option>전체</option>
                <option>수시모집</option>
                <option>정시모집</option>
                <option>학생부종합</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">검색</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="이름 또는 수험번호 입력" 
                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary">
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 결과 테이블 */}
      <div className="bg-white rounded-lg border border-primary overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-primary bg-opacity-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              <span className="text-sm text-gray-700">전체 선택</span>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center space-x-2">
              <i className="ri-printer-line"></i>
              <span>선택 항목 출력</span>
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary bg-opacity-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider w-10">
                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">수험번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">모집단위</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">전형구분</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">최종수정일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              {
                id: '2025001234',
                name: '김지원',
                department: '공과대학 컴퓨터공학과',
                type: '수시모집',
                date: '2025-04-15 14:30'
              },
              {
                id: '2025001235',
                name: '박수현',
                department: '인문대학 국어국문학과',
                type: '정시모집',
                date: '2025-04-16 09:15'
              },
              {
                id: '2025001236',
                name: '이민준',
                department: '사회과학대학 경영학과',
                type: '학생부종합',
                date: '2025-04-16 11:45'
              }
            ].map((student) => (
              <tr key={student.id} className="hover:bg-primary hover:bg-opacity-5">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{student.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{student.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{student.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button className="text-primary hover:text-primary-dark">미리보기</button>
                  <button className="text-primary hover:text-primary-dark">
                    <i className="ri-printer-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 페이지네이션 */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            총 <span className="font-medium">150</span>건 중 <span className="font-medium">1</span>-<span className="font-medium">3</span>건 표시
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
  )
} 