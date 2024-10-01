function addGoogleAnalyticsTags() {
    // GitHub Pages
    var githubAnalyticsScript = document.createElement('script');
    githubAnalyticsScript.async = true;
    githubAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-C44R8LD9MC';
    document.head.appendChild(githubAnalyticsScript);

    var githubScriptContent = document.createElement('script');
    githubScriptContent.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C44R8LD9MC');
    `;
    document.head.appendChild(githubScriptContent);

    // Netlify
    var netlifyAnalyticsScript = document.createElement('script');
    netlifyAnalyticsScript.async = true;
    netlifyAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0R2ZXFSYVT';
    document.head.appendChild(netlifyAnalyticsScript);

    var netlifyScriptContent = document.createElement('script');
    netlifyScriptContent.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0R2ZXFSYVT');
    `;
    document.head.appendChild(netlifyScriptContent);

    // Render
    var renderAnalyticsScript = document.createElement('script');
    renderAnalyticsScript.async = true;
    renderAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-MND1TVBSXV';
    document.head.appendChild(renderAnalyticsScript);

    var renderScriptContent = document.createElement('script');
    renderScriptContent.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MND1TVBSXV');
    `;
    document.head.appendChild(renderScriptContent);
}

// Call the function to add Google Analytics tags
addGoogleAnalyticsTags();
