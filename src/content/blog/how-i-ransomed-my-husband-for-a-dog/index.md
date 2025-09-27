---
title: How I Ransomed My Husband for a Dog
description: A SANS grad's journey from student to cloud security red teamer
publicationDate: 2025-09-25
image: ./ransomdog.png
imageAlt: Vibrant digital illustration of a woman with pink hair hacking into a computer with a cute puppy on the screen
---

# How I Ransomed My Husband for a Dog

*A SANS grad's journey from student to cloud security red teamer*

Hey cyber friends! 

So picture this: You've just finished the SANS Cyber Academy, earned your GFACT, GSEC, and GCIH certifications, got promoted to Director of IT & Operations (yeah, I'm still processing that one), and then... reality hits. Hard.

The transition from being a full-time SANS student back to the "real world" was like going from 60 to 0 in about 2.5 seconds. Don't get me wrong - I was proud of what I'd accomplished. But suddenly I found myself with this weird combination of imposter syndrome and analysis paralysis. What do you do when you've just absorbed more cybersecurity knowledge than your brain thought possible, but you're not quite sure how to keep that momentum going?

My solution? I did what any reasonable person would do: I spent approximately 100 hours playing Baldur's Gate 3. 🎮 (Don't judge me - Astarion needed me, okay?)

## The Post-Certification Blues Are Real

But here's the thing about brain breaks - they're necessary, but they can't last forever. I started getting that familiar itch, the one that whispers "you're going to get rusty if you don't practice." I'd worked too hard to let my skills atrophy while I was busy romancing fictional vampires.

I knew I wanted to dive deeper into cloud security. It was the area that excited me most during my studies, probably because it felt like this perfect intersection of traditional security principles and shiny new tech that could break in creative ways. Plus, let's be honest - the cloud is where everything is moving, and I wanted to be ahead of that curve, not chasing it.

When I mentioned this to my husband Jared (who's a Cloud Security Engineer and therefore knows things), he had this brilliant idea: "What if we both learned something new? You want cloud security practice, I want to test my detection skills... let's build a CTF!"

## Wait, I'm Supposed to be the Bad Guy?

Now, I'll be real with you - when Jared suggested I take on the red team role, my first thought was "LOL, no." Me? The person who just finished learning about attack frameworks? The one whose practical attack experience was basically limited to whatever labs SANS threw at me? I was supposed to try to outsmart a literal Cloud Security Engineer?

But then I remembered something from my GCIH studies: DPRK TTPs (Tactics, Techniques, and Procedures). I'd been fascinated by how these threat actors operated - not because they used the most sophisticated tools, but because they were methodical, patient, and leveraged legitimate access in unauthorized ways. They weren't necessarily the flashiest hackers, but they were effective.

I thought, "You know what? I can follow a playbook. I can be methodical." And honestly? That made it feel way more attainable than trying to channel my inner elite hacker.

## Building shart.cloud (Yes, That's Actually What We Called It)

Over the course of about a week, Jared and I built out what would become "shart.cloud" - our fake cloud service provider. (And yes, before you ask, we absolutely knew what we were doing with that name. We're not sorry.)

The infrastructure was legit though: Kubernetes clusters, S3-compatible storage, Entra ID SSO, the works. We created fake customers (including a Minecraft server with 7 whole concurrent viewers - we're talking Fortune 100^100 enterprises here), set up legitimate cloud credentials, and basically built a playground that felt real enough to make the attacks meaningful.

This process was incredible for me because I was learning Kubernetes along the way, which had been on my goals list for the year. There's nothing quite like having to understand how something works so you can properly attack it. I was getting hands-on experience with container orchestration, service accounts, RBAC configurations - all while knowing I'd eventually need to abuse every single one of these components.

The most challenging part? Testing whether our attack scenarios would actually work. There's a special kind of stress that comes from spending hours setting up an attack chain, only to find out that your carefully crafted payload fails because of some tiny configuration detail you missed.

## The Magic Moment

But then came the moment that made it all worth it. I was working through my attack plan, and I needed to establish persistence in a container workload. I spun up Metasploit's exec module, set up a reverse TCP listener, and... it just worked. Smoothly. Quickly. Like I actually knew what I was doing.

I remember sitting there thinking, "Holy crap, the SANS training actually stuck." It was this beautiful validation that all those hours studying weren't just theoretical knowledge floating around in my head - they were practical skills I could actually use.

From there, I was able to capture a break-the-glass admin token that gave me cluster admin permissions. Suddenly, I wasn't just following a playbook anymore - I was thinking like an attacker, seeing opportunities, chaining privileges together. It was terrifying and exhilarating at the same time.

## The Heist (Or: How We Got a Dog)

What followed was basically a multi-cloud ransomware campaign. I enumerated backup buckets, exfiltrated customer data, encrypted everything using SSE-C encryption in AWS, deleted backups in Azure for good measure, and then deployed my ransom note.

My demands? Me and the kid want to adopt a dog. 🐕

(Look, if you're going to hold someone's infrastructure hostage, you might as well go for something that really matters, right?)

The beautiful thing was watching Jared work from the blue team side. He was using DuckDB, Tailpipe, and his own tool called Corkscrew to try to detect my activities. Some attacks he caught immediately, others flew completely under the radar. We kept score throughout the whole thing - final tally was Defender: 3, Attacker: 5.

Spoiler alert: shart.cloud paid the ransom. Meet Rue, our French Bulldog who is absolutely worth every encrypted backup. 🥰

## The Real Learning Happens in the Reflection

When we stepped back and looked at what we'd accomplished, I realized something important. My biggest lesson wasn't about the technical aspects (though I learned tons of those). It was about curiosity.

The magic for me isn't in achieving something I thought was complex - it's in the curiosity I have and the journey toward learning that complex thing. It's about staying excited about the "what if?" and the "how does this work?" and the "what happens when I poke this?"

That curiosity is what carried me through the moments when I felt out of my depth. It's what made me keep digging when an attack didn't work the first time. It's what made me want to understand not just how to use Metasploit, but why that particular technique was effective in that specific environment.

## From Homelab to Main Stage

Now here's where it gets really scary: we're presenting this whole adventure as a talk at SANS CloudSecNext 2025 in Denver. "Get The Flock Out of My Cloud: Using DuckDB to Detect Spousal Sabotage."

I'm not going to lie - preparing for this presentation has been nerve-wracking. 😅 You'd think my background as a teacher would make this easier, but there's something different about presenting technical content to a room full of cybersecurity professionals. Finding that balance between technical depth and storytelling, between sharing what we learned and keeping people engaged... it's a fine line to walk.

But I'm excited about it too. Because if our little experiment taught me anything, it's that learning doesn't have to be solitary or serious all the time. Some of the best learning happens when you're playing, when you're collaborating, when you're pushing each other to try things that feel just outside your comfort zone.

## What's Next (Besides the Dog Training)

This whole experience has completely revved me up to continue my certification journey. I'm already eyeing the GX-IH as my next target. I realized that I need to be more consistent and disciplined with my learning if I want to keep leveling up, but now I know what that looks like for me.

It looks like curiosity-driven projects. It looks like finding ways to learn with other people. It looks like building things that are fun and practical at the same time.

Speaking of which - we're not keeping this CTF to ourselves. We're planning to release "shart.cloud" as a public CTF that others can use to practice these same techniques. Early access starts November 28th, with a full release planned for December 21st. Because honestly, if we had this much fun learning together, imagine what a whole community could do.

## For My Fellow Cyber Humans

If you're reading this and you're in that post-training, post-certification, "now what?" phase - I see you. It's weird to suddenly have all this knowledge and not be sure how to apply it. It's intimidating to think about practicing skills that feel advanced when you still feel like you're figuring things out.

But here's what I learned: you don't have to wait until you feel "ready" to start practicing. You don't have to have everything figured out before you begin. Sometimes the best way to learn is to pick a direction that excites you and start walking.

Find someone to learn with if you can. Build something. Break something (safely, in a lab, please). Follow your curiosity and see where it leads.

And if you're worried about not being good enough yet? Remember that I went from SANS student to successfully executing a multi-stage cloud attack in the span of a few months. Not because I'm some kind of prodigy, but because I got curious and stayed curious.

The magic really isn't in the complexity - it's in the curiosity.

---

*Want to try the shart.cloud CTF when it releases? Check out our website at shart.cloud or connect with us on LinkedIn. And if you're going to be at SANS CloudSecNext 2025 in Denver, come say hi after our talk - I'll probably need a pep talk and maybe some validation that we didn't just embarrass ourselves in front of the entire cloud security community.*

*Also, dog pics are always welcome. Rue demands tribute.*