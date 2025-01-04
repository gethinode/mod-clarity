{{- $id := site.Params.modules.clarity.id -}}

{{- if not $id -}}
    {{- partial "utilities/LogErr.html" (dict 
        "partial" "gethinode/mod-clarity" 
        "msg" "Please configure the Clarity tracking code in the site parameters (modules.clarity.id)"
    ) -}}
{{- else -}}
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "{{ $id }}");

// automatically give consent; assumes this script is only loaded when the user has given explicit consent.
window.clarity('consent');
{{ end }}