interface CodeBlockProps {
  children: React.ReactNode
  language?: string
}

export default function CodeBlock({ children, language = 'json' }: CodeBlockProps) {
  return (
    <div className="code-block">
      {language && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">{language}</span>
          <button className="text-xs text-gray-400 hover:text-gray-200">Copy</button>
        </div>
      )}
      <pre><code>{children}</code></pre>
    </div>
  )
}
