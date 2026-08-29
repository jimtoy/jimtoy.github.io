---
title: "I Outsourced My Midlife Crisis to an AI (It Rebuilt My Website)"
date: 2026-08-29
description: "Jekyll to Astro, a career-uptime counter, a resume that escaped TypeScript, and a microblog that lived for one commit. Written mostly by me, about work mostly done by Claude."
---

This site used to run on Jekyll. Ruby toolchain, dated look, the kind
of local dev setup where "quick fix" meant twenty minutes of gem
version archaeology before you even touched a template. It worked.
It also embarrassed me a little every time I opened it.

So I did what any developer with thirty years in enterprise systems
and zero patience left for yak-shaving does: I handed the whole thing
to an agent and said, more or less, "make this not Jekyll." Astro,
Node/npm only, no Ruby in sight. Deployed the same way as before —
GitHub Actions, building from `master` — just with less ceremony to
get there.

The part I actually cared about was the design identity, and this is
where it got a little indulgent. I've spent my career building
enterprise systems, including a genuinely-named failover system
called "Blackout." So the site now looks like an ops console: dark
navy and brass by default, a status line that says "nominal," and a
counter in the header that ticks up your career like server uptime —
seconds and all — computed from the day I started in 1995. It is a
completely unnecessary amount of design commitment to a joke about
being old. I regret nothing.

Not everything survived contact with actual use. I shipped a "notes"
section — a microblog, lighter than the main blog — because it
seemed like the kind of thing a personal site should have. Then I sat
down to actually write one and realized I couldn't tell you what it
was for that a blog post wasn't already doing. So it's gone. Zero
notes were harmed, because zero notes were ever written; the whole
feature had a lifespan and never once had content. That's either a
clean kill or a confession that I planned before I needed, and I'll
let you pick.

I also went back and pulled my resume out of a hand-typed TypeScript
object and into a YAML content file, same pattern as the blog posts,
because "my job history" being coupled to "code that ships" felt
backwards the moment I looked at it straight.

And yes — I'm aware of the bit where I write a blog post about using
Claude Code to rebuild my site, using Claude Code to draft the blog
post about it. I thought about writing this one by hand, on principle.
Then I remembered I live within my limitations same as anyone, and
one of those limitations is a strong preference for spending my
evening doing literally anything else. So: mostly its typing, my
opinions, my edits, my call on every line that stayed. Ops console
theme was mine. The self-awareness about the irony was also, embarrassingly, mine.

Status: nominal.
