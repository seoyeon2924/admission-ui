export default function EvaluationPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">성적 평가 관리</h2>
        <p className="text-gray-600 mt-1">전형별 평가 항목을 설정하고 성적을 산출할 수 있습니다.</p>
      </div>

      {/* 전형 선택 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">전형구분</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-primary focus:border-primary">
                <option>수시모집 학생부교과</option>
                <option>수시모집 학생부종합</option>
                <option>정시모집 수능위주</option>
                <option>정시모집 실기위주</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
              평가기준 적용
            </button>
          </div>
        </div>
      </div>

      {/* 평가 항목 설정 */}
      <div className="bg-white rounded-lg border border-primary overflow-hidden mb-6">
        <div className="p-4 bg-primary bg-opacity-5 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">평가 항목 설정</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {/* 학생부 교과 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" checked className="rounded text-primary focus:ring-primary" />
                  <h4 className="font-medium text-gray-900">학생부 교과</h4>
                </div>
                <input 
                  type="number" 
                  value="60" 
                  className="w-24 border border-gray-300 rounded-md py-1 px-2 text-right"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">반영 교과</label>
                  <select className="w-full border border-gray-300 rounded-md py-1 px-2">
                    <option>국어, 수학, 영어, 사회</option>
                    <option>국어, 수학, 영어, 과학</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">반영 학기</label>
                  <select className="w-full border border-gray-300 rounded-md py-1 px-2">
                    <option>전체 학기</option>
                    <option>1,2학년</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 수능 성적 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" checked className="rounded text-primary focus:ring-primary" />
                  <h4 className="font-medium text-gray-900">수능 성적</h4>
                </div>
                <input 
                  type="number" 
                  value="40" 
                  className="w-24 border border-gray-300 rounded-md py-1 px-2 text-right"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">반영 영역</label>
                  <select className="w-full border border-gray-300 rounded-md py-1 px-2">
                    <option>국어, 수학, 영어, 탐구(1)</option>
                    <option>국어, 수학, 영어, 탐구(2)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">가산점</label>
                  <select className="w-full border border-gray-300 rounded-md py-1 px-2">
                    <option>수학(미적분) 10%</option>
                    <option>과학탐구 5%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 평가 결과 */}
      <div className="bg-white rounded-lg border border-primary overflow-hidden">
        <div className="p-4 bg-primary bg-opacity-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-900">평가 결과</h3>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center space-x-2">
            <i className="ri-download-line"></i>
            <span>엑셀 다운로드</span>
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수험번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">학생부 점수</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수능 점수</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">총점</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">상세보기</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              { id: '2025001234', name: '김지원', schoolScore: 58.5, satScore: 38.2, total: 96.7 },
              { id: '2025001235', name: '박수현', schoolScore: 56.8, satScore: 37.5, total: 94.3 },
              { id: '2025001236', name: '이민준', schoolScore: 57.2, satScore: 39.1, total: 96.3 }
            ].map((student) => (
              <tr key={student.id} className="hover:bg-primary hover:bg-opacity-5">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.schoolScore}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.satScore}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">{student.total}</td>
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