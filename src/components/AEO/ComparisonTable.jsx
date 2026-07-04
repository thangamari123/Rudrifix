import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonTable({ title, entityA, entityB, features }) {
  return (
    <div className="my-12">
      {title && <h3 className="text-2xl font-black mb-6 text-gray-900">{title}</h3>}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 border-b border-gray-200 font-bold text-gray-700 w-1/3">Feature</th>
              <th className="p-4 border-b border-gray-200 font-bold text-gray-900 w-1/3 text-center">{entityA}</th>
              <th className="p-4 border-b border-gray-200 font-bold text-gray-900 w-1/3 text-center">{entityB}</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {features.map((feat, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                <td className="p-4 text-sm font-medium text-gray-700">{feat.name}</td>
                
                <td className="p-4 text-center">
                  {typeof feat.valueA === 'boolean' ? (
                    feat.valueA ? <Check className="inline-block text-emerald-500" size={20} /> : <X className="inline-block text-red-400" size={20} />
                  ) : (
                    <span className="text-sm text-gray-600">{feat.valueA}</span>
                  )}
                </td>
                
                <td className="p-4 text-center">
                  {typeof feat.valueB === 'boolean' ? (
                    feat.valueB ? <Check className="inline-block text-emerald-500" size={20} /> : <X className="inline-block text-red-400" size={20} />
                  ) : (
                    <span className="text-sm text-gray-600">{feat.valueB}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
