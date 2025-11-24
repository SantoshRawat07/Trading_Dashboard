"use client";

import React, { useEffect, useState } from "react";

type MarketData = {
  response: number;
  data: {
    marketDate: {
      date: string;
    };
    trendingStocks: string[];
    indicesSummary: Array<{
      indicesName: string;
      value: number;
      percentageChange: number;
      pointChange?: number;
      turnover: number;
      sharesTraded: number;
      advancers: number;
      decliners: number;
      neutral: number;
    }>;
    topGainers: Array<{
      ticker: string;
      fullName: string;
      ltp: number;
      percentageChange: number;
      fiftyHigh: number;
    }>;
    topLosers: Array<{
      ticker: string;
      fullName: string;
      ltp: number;
      percentageChange: number;
      fiftyLow: number;
    }>;
    topTurnover: Array<{
      ticker: string;
      fullName: string;
      ltp: number;
      percentage_change: number;
      amount: number;
    }>;
  };
};

const NepseTradingPage = () => {
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/nepse-trading")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.error("Error from API route:", data.error);
          setError(data.error);
          setLoading(false);
          return;
        }
        setMarketData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading NEPSE market data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold text-lg mb-2">Error Loading Data</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!marketData) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-center">
          <p className="text-gray-600 text-lg">No market data available.</p>
        </div>
      </div>
    );
  }

  const { data } = marketData;
  const nepseIndex = data.indicesSummary.find(idx => idx.indicesName === "NEPSE");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">NEPSE Trading</h1>
          <p className="text-gray-600">Market Date: {new Date(data.marketDate.date).toLocaleDateString()}</p>
        </div>

        {/* Main NEPSE Index */}
        {nepseIndex && (
          <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">NEPSE Index</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-blue-200 text-sm">Index Value</p>
                <p className="text-3xl font-bold">{nepseIndex.value.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Change</p>
                <p className={`text-2xl font-bold ${nepseIndex.percentageChange >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {nepseIndex.percentageChange >= 0 ? '+' : ''}{nepseIndex.percentageChange.toFixed(2)}%
                </p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Turnover</p>
                <p className="text-xl font-bold">{(nepseIndex.turnover / 10000000).toFixed(2)}Cr</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Shares Traded</p>
                <p className="text-xl font-bold">{(nepseIndex.sharesTraded / 1000000).toFixed(2)}M</p>
              </div>
            </div>
            <div className="mt-4 flex gap-6 text-sm">
              <span className="text-green-300">↑ Advancers: {nepseIndex.advancers}</span>
              <span className="text-red-300">↓ Decliners: {nepseIndex.decliners}</span>
              <span className="text-blue-200">→ Neutral: {nepseIndex.neutral}</span>
            </div>
          </div>
        )}

        {/* Trending Stocks */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">🔥 Trending Stocks</h2>
          <div className="flex flex-wrap gap-2">
            {data.trendingStocks.map(stock => (
              <span key={stock} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {stock}
              </span>
            ))}
          </div>
        </div>

        {/* Top Gainers and Losers */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Top Gainers */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4 text-green-700">📈 Top Gainers</h2>
            <div className="space-y-3">
              {data.topGainers.slice(0, 5).map(stock => (
                <div key={stock.ticker} className="flex justify-between items-center pb-3 border-b last:border-0">
                  <div>
                    <p className="font-semibold text-gray-900">{stock.ticker}</p>
                    <p className="text-xs text-gray-600 truncate">{stock.fullName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">Rs. {stock.ltp}</p>
                    <p className="text-sm text-green-600 font-semibold">+{stock.percentageChange.toFixed(2)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Losers */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4 text-red-700">📉 Top Losers</h2>
            <div className="space-y-3">
              {data.topLosers.slice(0, 5).map(stock => (
                <div key={stock.ticker} className="flex justify-between items-center pb-3 border-b last:border-0">
                  <div>
                    <p className="font-semibold text-gray-900">{stock.ticker}</p>
                    <p className="text-xs text-gray-600 truncate">{stock.fullName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">Rs. {stock.ltp}</p>
                    <p className="text-sm text-red-600 font-semibold">{stock.percentageChange.toFixed(2)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Turnover */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">💰 Top Turnover</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2 text-sm font-semibold text-gray-700">Ticker</th>
                  <th className="text-left py-2 px-2 text-sm font-semibold text-gray-700">Company</th>
                  <th className="text-right py-2 px-2 text-sm font-semibold text-gray-700">LTP</th>
                  <th className="text-right py-2 px-2 text-sm font-semibold text-gray-700">Change</th>
                  <th className="text-right py-2 px-2 text-sm font-semibold text-gray-700">Turnover</th>
                </tr>
              </thead>
              <tbody>
                {data.topTurnover.slice(0, 10).map(stock => (
                  <tr key={stock.ticker} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-2 px-2 font-semibold text-gray-900">{stock.ticker}</td>
                    <td className="py-2 px-2 text-sm text-gray-600">{stock.fullName}</td>
                    <td className="py-2 px-2 text-right font-medium">{stock.ltp}</td>
                    <td className={`py-2 px-2 text-right font-semibold ${stock.percentage_change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.percentage_change >= 0 ? '+' : ''}{stock.percentage_change.toFixed(2)}%
                    </td>
                    <td className="py-2 px-2 text-right text-sm">{(stock.amount / 10000000).toFixed(2)}Cr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sector Indices */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">📊 Sector Indices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.indicesSummary.filter(idx => idx.indicesName !== "NEPSE").map(index => (
              <div key={index.indicesName} className="border rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-semibold text-gray-900 mb-2">{index.indicesName}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{index.value.toFixed(2)}</p>
                    <p className={`text-sm font-semibold ${index.percentageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {index.percentageChange >= 0 ? '+' : ''}{index.percentageChange.toFixed(2)}%
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>↑ {index.advancers}</p>
                    <p>↓ {index.decliners}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepseTradingPage;