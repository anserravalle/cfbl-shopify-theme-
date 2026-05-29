/* global React */
function PathwayCards() {
  const pathways = [
    {
      kicker: 'For Clients',
      title: 'Center for Balanced Living',
      copy: 'Therapy, psychological evaluation, groups, and consultation for individuals and families. Trauma-informed care for adults, adolescents, and children.',
      cta: 'Explore Clinical Services',
      tone: 'cfbl',
    },
    {
      kicker: 'For Professionals',
      title: 'CFBL Institute',
      copy: 'Continuing education in trauma-informed practice, assessment, and applied clinical reasoning. Live workshops and on-demand courses for licensed clinicians.',
      cta: 'View Trainings and CE',
      tone: 'institute',
    },
    {
      kicker: 'For Readers',
      title: 'MUSA',
      copy: 'Books, essays, and longer-form writing on psychology, memory, and being human. A publication by Dr. Angela Serravalle.',
      cta: 'Read the Essays',
      tone: 'musa',
    },
  ];

  return (
    <section className="pathways" aria-label="Three pathways to support">
      <div className="section-head">
        <p className="eyebrow">Three Pathways to Support</p>
        <h2>One practice. Three doors.</h2>
      </div>
      <div className="pathway-grid">
        {pathways.map((p) => (
          <a key={p.title} href="#" className={`pathway-card tone-${p.tone}`}>
            <div className="pathway-dot" aria-hidden="true"></div>
            <p className="pathway-kicker">{p.kicker}</p>
            <h3 className="pathway-title">{p.title}</h3>
            <p className="pathway-copy">{p.copy}</p>
            <span className="pathway-cta">{p.cta} <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
window.PathwayCards = PathwayCards;
