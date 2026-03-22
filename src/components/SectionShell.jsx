function SectionShell({
  align = 'center',
  background,
  children,
  scrollable = false,
}) {
  const className = [
    'screen',
    align === 'top' ? 'screen--top' : 'screen--center',
    scrollable ? 'screen--scrollable' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      className={className}
      style={{ '--section-background': `url("${background}")` }}
    >
      <div aria-hidden="true" className="screen__background" />
      <div className="screen__inner">{children}</div>
    </section>
  )
}

export default SectionShell
