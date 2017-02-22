import * as React from 'react';
import { PageHero } from '../../components/page-hero';
import { PageSection } from '../../components/page-section';
import { Link } from 'react-router';

export default () => ({
  path: '/',
  component : () =>
    <article>
      <PageHero title="Welcome to" subtitle="React / Redux / TypeScript - starter-kit sadfsdf" />
      <PageSection className="o-container o-container--small">
        <p>
          Below you can find a few examples created using concepts of this starter-kit:
        </p>
        <ul>
          <li>
            <Link to="/currency-converter">Currency Converter App</Link> - (work in progress)
          </li>
          <li>
            <Link to="/css-modules">CSS Modules</Link> 
          </li>
        </ul>
        <br />
        <div className="c-alert c-alert--info">
          Note: Open Redux DevTools Inspector
        </div>
      </PageSection>
      <br />
    </article>,
});
