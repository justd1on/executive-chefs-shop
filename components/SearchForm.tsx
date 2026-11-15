import Form from "next/form";

type Props = { id: string; defaultValue?: string; autoFocus?: boolean };

export default function SearchForm({ id, defaultValue, autoFocus }: Props) {
  return (
    <Form action="/search" role="search" className="flex w-full items-center rounded-full border border-border bg-surface px-4 focus-within:border-copper">
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        type="search"
        name="q"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        placeholder="Search knives, sets, sharpeners..."
        className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted focus:outline-none"
      />
      <button type="submit" aria-label="Search" className="shrink-0 p-1 text-muted hover:text-copper-dark">
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="9" cy="9" r="6" />
          <path d="M17 17l-3.5-3.5" strokeLinecap="round" />
        </svg>
      </button>
    </Form>
  );
}
