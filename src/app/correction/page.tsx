export default function CorrectionPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">원서접수 데이터 보정</h2>
        <p className="text-gray-600 mt-1">원서접수 데이터의 오류를 검증하고 수정할 수 있습니다.</p>
      </div>

      {/* 검증 상태 카드 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">총 지원자</span>
            <span className="text-2xl font-bold">324</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-green-600">검증 완료</span>
            <span className="text-2xl font-bold text-green-600">298</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-yellow-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-yellow-600">검증 중</span>
            <span className="text-2xl font-bold text-yellow-600">18</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-red-600">오류</span>
            <span className="text-2xl font-bold text-red-600">8</span>
          </div>
        </div>
      </div>

      {/* 오류 목록 테이블 */}
      <div className="bg-white rounded-lg border border-primary overflow-hidden">
        <div className="p-4 bg-primary bg-opacity-5 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">데이터 오류 목록</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수험번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">오류 항목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">오류 내용</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                id: '2025001234',
                name: '김지원',
                errorField: '생년월일',
                errorDesc: '잘못된 생년월일 형식',
                status: '미처리'
              },
              {
                id: '2025001235',
                name: '박수현',
                errorField: '연락처',
                errorDesc: '전화번호 형식 오류',
                status: '처리중'
              },
              {
                id: '2025001236',
                name: '이민준',
                errorField: '학교정보',
                errorDesc: '학교코드 불일치',
                status: '미처리'
              }
            ].map((item) => (
              <tr key={item.id} className="hover:bg-primary hover:bg-opacity-5">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.errorField}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{item.errorDesc}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === '미처리' 
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary hover:text-primary-dark">수정</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 페이지네이션 */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            총 <span className="font-medium">8</span>건의 오류가 있습니다.
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">이전</button>
            <button className="px-3 py-1 border border-primary bg-primary text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">다음</button>
          </div>
        </div>
      </div>
    </div>
  )
} 