import { useState, useEffect } from 'react';
import CandidateList from './CandidateList';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxanDC3M7cebGht3CBV6DfNgNnfLIut4gtrUd1VUjIJ7XQjaCRUpc0a2uIw2OUEK7uYOg/exec';

function Spinner() {
  return (
    <div className="lds-spinner">
      {Array.from({ length: 12 }).map((_, i) => <div key={i}></div>)}
    </div>
  );
}

export default function CandidateViewsContent({ staticData }) {
  const isEmpty = !staticData || JSON.stringify(staticData) === '{}';
  const [data, setData] = useState(isEmpty ? null : staticData);
  const [loading, setLoading] = useState(isEmpty);

  useEffect(() => {
    if (!isEmpty) return;
    fetch(SHEET_URL, { redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' } })
      .then(r => r.json())
      .then(json => { setData(json.data); setLoading(false); });
  }, []);

  if (loading) return <Spinner />;
  return <CandidateList data={data} />;
}
