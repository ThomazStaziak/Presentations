Reveal.initialize({
  history: true,
  dependencies: [
    { src: '../../../assets/libs/reveal/plugin/markdown/marked.js' },
    { src: '../../../assets/libs/reveal/plugin/markdown/markdown.js' },
    { src: '../../../assets/libs/reveal/plugin/notes/notes.js', async: true },
    {
      src: '../../../assets/libs/reveal/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
