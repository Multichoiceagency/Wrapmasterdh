'use client'
import { useEffect } from 'react';

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // Voeg de Elfsight script tag toe aan het document
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js'; // Elfsight platform script
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-your-widget-id" />  // Vervang 'your-widget-id' door de widget ID die je krijgt van Elfsight
  );
}
