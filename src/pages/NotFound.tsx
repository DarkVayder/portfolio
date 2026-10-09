const NotFound = () => (
  <section aria-labelledby="not-found-title" className="flex min-h-[70vh] flex-col justify-center pb-16 pt-32">
    <p className="eyebrow">404</p>
    <h1 id="not-found-title" className="mt-3 font-display text-4xl font-medium text-paper sm:text-5xl">
      That page doesn't exist.
    </h1>
    <p className="mt-5 max-w-xl leading-relaxed text-muted">
      The link may be old or mistyped. Everything on this site lives on the home page.
    </p>
    <div className="mt-9">
      <a href="/" className="btn-primary">
        Back to the home page
      </a>
    </div>
  </section>
);

export default NotFound;
