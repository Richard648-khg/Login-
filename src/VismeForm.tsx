import { useEffect } from 'react';

export default function VismeForm() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="form-container w-full max-w-[800px] h-[600px]">
      <div 
        className="visme_d" 
        data-title="Registration Form" 
        data-url="x9m86gyq-webinar-registration-form?fullPage=true" 
        data-domain="forms" 
        data-full-page="true" 
        data-min-height="100vh" 
        data-form-id="161717"
      >
      </div>
    </div>
  );
}
