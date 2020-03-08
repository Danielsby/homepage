import * as React from 'react';

const BottomBar: React.FC = () => {
  return (
    <div className="bottom-bar">
      <section className="links">
        <article className="linkedin">
          <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/dby/">LinkedIn</a>
        </article>
        <article className="github">
          <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/dby/">Github</a>
        </article>
      </section>
    </div>
  )
}

export default BottomBar;
