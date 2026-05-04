import { useState, useEffect } from "react";
import GVGCandidateList from "./GVGCandidateList3.jsx";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxanDC3M7cebGht3CBV6DfNgNnfLIut4gtrUd1VUjIJ7XQjaCRUpc0a2uIw2OUEK7uYOg/exec";

export default function GuideContent({ staticData }) {
  const isStaticDataEmpty = !staticData || JSON.stringify(staticData) === "{}";
  const [data, setData] = useState(isStaticDataEmpty ? null : staticData);
  const [loading, setLoading] = useState(isStaticDataEmpty);

  useEffect(() => {
    if (!isStaticDataEmpty) return;
    fetch(GOOGLE_SHEET_URL, {
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
    })
      .then((r) => r.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="lds-spinner">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return <GVGCandidateList data={data} />;
}
