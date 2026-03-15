import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HudCard } from './HudCard';
import { Activity } from 'lucide-react';

describe('HudCard Component', () => {
  const defaultProps = {
    title: 'TEST TITLE',
    value: '87%',
    Icon: Activity,
  };

  it('renders title and value correctly', () => {
    render(<HudCard {...defaultProps} />);
    expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
    expect(screen.getByText('87%')).toBeInTheDocument();
  });

  it('renders trend label with positive color', () => {
    render(<HudCard {...defaultProps} trend={{ label: '↑ 2%', isPositive: true }} />);
    const trendElement = screen.getByText('↑ 2%');
    expect(trendElement).toHaveClass('text-emerald-400');
  });

  it('renders warning trend label', () => {
    render(<HudCard {...defaultProps} trend={{ label: 'ALERTA', isWarning: true }} />);
    const trendElement = screen.getByText('ALERTA');
    expect(trendElement).toHaveClass('text-yellow-500');
  });

  it('renders subtitle correctly', () => {
    render(<HudCard {...defaultProps} subtitle="Sub info" />);
    expect(screen.getByText('Sub info')).toBeInTheDocument();
  });

  it('renders icon', () => {
    const { container } = render(<HudCard {...defaultProps} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
