import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">전체 지원자</h2>
          <p className="text-3xl font-bold">0명</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">성적 업로드 현황</h2>
          <p className="text-3xl font-bold">0%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">평가 완료율</h2>
          <p className="text-3xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
}
