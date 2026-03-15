import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from '../ui/Logo';

describe('Logo Component', () => {
  it('renders the MAPARD branding text', () => {
    render(<Logo />);
    expect(screen.getByText(/MAPARD/i)).toBeInTheDocument();
  });

  it('renders the shield icon', () => {
    const { container } = render(<Logo />);
    // Check for the SVG shield (via class or container)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('displays the three pillars subtitle by default', () => {
    render(<Logo />);
    expect(screen.getByText(/TÁCTICA • SUPERVIVENCIA • PREPARACIONISMO/i)).toBeInTheDocument();
  });

  it('hides the subtitle when showSubtitle is false', () => {
    render(<Logo showSubtitle={false} />);
    const subtitle = screen.queryByText(/TÁCTICA • SUPERVIVENCIA • PREPARACIONISMO/i);
    expect(subtitle).not.toBeInTheDocument();
  });
});
