"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OpenContent() {
  const searchParams = useSearchParams();
  const ffOn = searchParams.get("app") === "false";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center gap-4">
        {ffOn ? (
          <>
            <div className="text-5xl">🚫</div>
            <h1 className="text-xl font-bold text-gray-800">FFがONです</h1>
            <div className="w-full bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800 text-center">
              <p className="font-semibold mb-1">アプリへの遷移をブロック中</p>
              <p>
                Feature Flagが有効なため、アプリがインストールされていてもブラウザで表示されます。
              </p>
            </div>
            <div className="w-full bg-gray-100 rounded-xl p-3 text-xs text-gray-500 text-center">
              <p>
                AASA: <code className="font-mono">NOT *app=false*</code> で除外済み
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="text-5xl">🌐</div>
            <h1 className="text-xl font-bold text-gray-800">ブラウザで表示中</h1>
            <div className="w-full bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800 text-center">
              <p className="font-semibold mb-1">アプリがインストールされていません</p>
              <p>
                アプリをインストールすると、次回からこのリンクで直接アプリが起動します。
              </p>
            </div>
            <div className="w-full bg-gray-100 rounded-xl p-3 text-xs text-gray-500 text-center">
              <p>AASA: Universal Link 有効</p>
            </div>
          </>
        )}
        <a href="/universal-link-web/" className="text-sm text-blue-600 underline">
          ← トップに戻る
        </a>
      </div>
    </div>
  );
}

export default function OpenPage() {
  return (
    <Suspense>
      <OpenContent />
    </Suspense>
  );
}
