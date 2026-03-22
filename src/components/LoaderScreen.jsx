function LoaderScreen({ durationMs, message }) {
  const petals = Array.from({ length: 12 })
  const cycleDurationMs = Math.max(1200, Math.round(durationMs / 2))

  return (
    <section
      className="loader-screen"
      style={{ '--loader-cycle': `${cycleDurationMs}ms` }}
    >
      <div className="loader-screen__inner" role="status" aria-live="polite">
        <div aria-hidden="true" className="sunflower">
          {petals.map((_, index) => (
            <span
              key={index}
              className="sunflower__petal"
              style={{ '--petal-angle': `${index * 30}deg` }}
            />
          ))}
          <span className="sunflower__center" />
        </div>

        <p className="loader-screen__eyebrow">Transicion</p>
        <h2 className="loader-screen__title">{message}</h2>
        <p className="loader-screen__copy">
          El loader es reutilizable y su duracion se edita desde un solo
          archivo.
        </p>
      </div>
    </section>
  )
}

export default LoaderScreen
