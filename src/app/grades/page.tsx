export default function GradesPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">성적 업로드</h2>
        <p className="text-gray-600 mt-1">학생부/수능 성적을 업로드하고 관리할 수 있습니다.</p>
      </div>

      {/* 탭 메뉴 */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button className="border-primary text-primary font-medium py-4 px-1 border-b-2">
            성적 업로드
          </button>
          <button className="text-gray-500 hover:text-gray-700 py-4 px-1 border-b-2 border-transparent">
            업로드 이력
          </button>
        </nav>
      </div>

      {/* 파일 업로드 영역 */}
      <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 mb-6">
        <div className="text-center">
          <i className="ri-upload-cloud-2-line text-4xl text-gray-400 mb-3"></i>
          <p className="text-gray-600 mb-2">엑셀 파일을 드래그하여 업로드하거나</p>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
            파일 선택
          </button>
          <p className="text-sm text-gray-500 mt-2">* xlsx, xls 파일만 업로드 가능합니다.</p>
        </div>
      </div>

      {/* 업로드 결과 요약 */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">총 데이터</span>
            <span className="text-2xl font-bold">150</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-green-600">정상 처리</span>
            <span className="text-2xl font-bold text-green-600">142</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-red-600">오류</span>
            <span className="text-2xl font-bold text-red-600">8</span>
          </div>
        </div>
      </div>

      {/* 오류 목록 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-medium text-gray-900">오류 목록</h3>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">행 번호</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">오류 내용</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">수정</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              { row: 15, error: "성적 데이터 형식 오류" },
              { row: 23, error: "학년/학기 정보 누락" },
              { row: 45, error: "과목명 오류" }
            ].map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.row}행
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  {item.error}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-primary hover:text-primary-dark">수정</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          취소
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          저장
        </button>
      </div>
    </div>
  )
} 