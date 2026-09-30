# Authority order

Resolve conflicts in this order. A lower source may fill silence but may not override a higher source.

1. Safety, legal, accessibility, required format, access limits, and hard technical constraints.
2. The user's explicit instruction in the current task.
3. Project `PRODUCT.md`: audience, problem, job, product truth, and non-negotiable behavior.
4. Project `DESIGN.md`: approved visual language, tokens, components, motion, and anti-references.
5. Contextual taste evidence: domain-specific or task-specific preferences with provenance.
6. Global taste evidence: broad preferences used as a tiebreaker.
7. Borrowed mechanics, industry defaults, and model priors.

## Conflict handling

- Name consequential conflicts; do not quietly average them.
- Prefer the narrowest applicable evidence. A demonstrated preference for one type of artifact does not automatically generalize to another.
- If explicit instructions request something contrary to taste, follow the instruction unless it violates level 1.
- If project files conflict, treat `PRODUCT.md` as product authority and `DESIGN.md` as design authority; ask one decisive question only when the conflict changes the outcome materially.
- Third-party heuristics are suggestions unless adopted by a higher authority or they expose a hard gate.
