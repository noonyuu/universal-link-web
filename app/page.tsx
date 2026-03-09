"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const BASE_URL = "https://universal-link.noonyuu.com";

export default function Home() {
  const [ffEnabled, setFfEnabled] = useState(false);

  const qrUrl = ffEnabled
    ? `${BASE_URL}/open-web`
    : `${BASE_URL}/open`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center gap-6">
        <h1 className="text-xl font-bold text-gray-800">Universal Links Demo</h1>

        {/* FF Toggle */}
        <div className="w-full flex items-center justify-between bg-gray-100 rounded-xl p-4">
          <div>
            <p className="font-semibold text-gray-700 text-sm">Feature Flag</p>
            <p className="text-xs text-gray-500 mt-0.5">
              {ffEnabled ? "ON: アプリへ遷移しない" : "OFF: アプリへ遷移する"}
            </p>
          </div>
          <button
            onClick={() => setFfEnabled((v) => !v)}
            className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none ${
              ffEnabled ? "bg-red-500" : "bg-green-500"
            }`}
            aria-label="Feature Flag toggle"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200 ${
                ffEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Status Badge */}
        <div
          className={`w-full text-center py-2 rounded-lg text-sm font-medium ${
            ffEnabled
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-green-50 text-green-700 border border-green-200"
          }`}
        >
          {ffEnabled
            ? "AASA: /open-web は未登録 → ブラウザで開く"
            : "AASA: /open は登録済み → アプリで開く"}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 border-2 border-gray-200 rounded-xl bg-white">
            <QRCodeSVG value={qrUrl} size={180} />
          </div>
          <p className="text-xs text-gray-400 break-all text-center max-w-xs">
            {qrUrl}
          </p>
        </div>

        {/* Instructions */}
        <div className="w-full bg-blue-50 rounded-xl p-4 text-xs text-blue-800 space-y-1">
          <p className="font-semibold">QRコードの挙動</p>
          <p>
            📱 アプリあり (FF OFF) → <strong>アプリが起動</strong>
          </p>
          <p>
            🌐 アプリなし → <strong>ブラウザで表示</strong>
          </p>
          <p>
            🚫 FF ON → <strong>常にブラウザで表示</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
