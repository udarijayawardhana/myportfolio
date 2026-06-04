(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();function h(){return`<div class="grain" aria-hidden="true"></div>
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>`}const c={nav:{logo:"UJ"},hero:{eyebrow:"Available - Internships & Collaborations",name:'Udari<br/><span class="surname">Jayawardhana<span class="accent">.</span></span>',roles:["developer","designer","creative technologist","data enthusiast","problem-solver"],tagline:"<b>Information Technology undergraduate</b> specializing in Data Science - passionate about UI/UX design, web development, and turning data into meaningful stories.",cta:[{text:"View projects",href:"#projects",class:"btn btn-primary"},{text:"Get in touch",href:"#contact",class:"btn btn-ghost"}]},about:{eyebrow:"01 / About",title:"A short <em>introduction</em>.",bio:["I'm an Information Technology undergraduate at <em>University of Sri Jayewardenepura</em>, majoring in IT with a specialization in <em>Data Science</em>. I enjoy blending creativity with technology - whether it's designing intuitive user interfaces or exploring how data can drive smarter decisions.","Beyond academics, I build web and mobile projects, design user experiences, and explore data visualization. My recent work spans <em>UI/UX design for community platforms</em>, full-stack mobile app development, and interactive Power BI dashboards.","I'm also a trained Visharad violinist and vocalist, which brings a unique creative perspective to everything I build. I care about crafting experiences that are both beautiful and purposeful."],stats:[{num:"5",small:"+",label:"Projects built"},{num:"#54",small:"",label:"District rank (A/L)"},{num:"3",small:"A's",label:"GCE Advanced Level"},{num:"6",small:"+",label:"Certifications"}],availability:"Open to internships &amp; collaborations"},skills:{eyebrow:"02 / Skills",title:"Tools I reach for <em>without thinking</em>.",groups:[{name:"Frontend Development",delay:"",skills:[{name:"HTML / CSS",level:85},{name:"JavaScript",level:75},{name:"React Native",level:65},{name:"WordPress",level:70}]},{name:"Design & Visualization",delay:"1",skills:[{name:"Figma / UI/UX",level:80},{name:"Power BI",level:72},{name:"Video Editing",level:70},{name:"Graphics Design",level:72}]},{name:"Data &amp; Programming",delay:"",skills:[{name:"SQL / Databases",level:70},{name:"Python",level:55},{name:"R",level:50}]},{name:"Other Skills",delay:"1",skills:[{name:"Machine Learning (Fundamentals)",level:45},{name:"Big Data (Fundamentals)",level:40},{name:"Project Management",level:55}]}],marqueeItems:["HTML","CSS","JavaScript","SQL","Figma","React Native","WordPress","Python","R","Power BI","UI/UX","Video Editing"]},projects:{eyebrow:"03 / Selected work",title:"A few things I've <em>built</em>.",githubUrl:"#",items:[{num:"01",title:"UI/UX & Mobile App Research Project",desc:"Studying user-centered design for a university community platform and developing a full-stack mobile application with front-end, back-end, and database integration. (Ongoing)",chips:["UI/UX","Mobile Dev","Full-Stack","Research"],links:[{href:"#",label:"Details",icon:"↗"}],featured:!0},{num:"02",title:"Simple Daily Planner App",desc:"Developed a task management mobile app with calendar integration and data features using React Native.",chips:["React Native","Mobile","JavaScript"],links:[{href:"#",label:"GitHub",icon:"{ }"}],featured:!1},{num:"03",title:"Happy Paws World Website",desc:"Built a multi-page pet shop website with interactive UI, responsive design, and engaging user experience.",chips:["HTML","CSS","JavaScript"],links:[{href:"#",label:"Live",icon:"↗"}],featured:!1},{num:"04",title:"Kiosk for Food Ordering - UX/UI Design",desc:"Designed a modern kiosk UI focusing on usability, visual hierarchy, and user engagement for a food ordering system.",chips:["Figma","UX/UI","Prototyping"],links:[{href:"#",label:"Case Study",icon:"↗"}],featured:!1},{num:"05",title:"Power BI Sales Dashboard",desc:"Created an interactive business intelligence dashboard to analyze and visualize sales data for decision-making.",chips:["Power BI","Data Viz","BI"],links:[{href:"#",label:"View",icon:"↗"}],featured:!1}]},experience:{eyebrow:"04 / Leadership & Experience",title:"Where I've <em>contributed</em> &amp; grown.",items:[{dates:"2025 - Present",role:"Content Strategist - Talent Management (Back Office)",org:"AIESEC in University of Sri Jayewardenepura",bullets:["Serving as a graphic designer; nominated for Best Graphic Designer (April).","Marketing In-Charge for Iftar LCM event.","Active member contributing to content strategy and talent management."]},{dates:"2025",role:"UI/UX Team - Task Master",org:"Entre Club, University of Sri Jayewardenepura",bullets:["Led UI/UX tasks and coordinated team deliverables.","Finance crew member for Camiliya event - coordinated signing items.","Marketing In-Charge for G-Tune Organizing Committee - managed promotional activities."]},{dates:"2024 - 2025",role:"Event Coordinator & Committee Member",org:"Department of Social Statistics, USJ",bullets:["Music event coordinator for Magazine Lounge organizing committee (2024).","Marketing Team Member for Elevate 2.0 (2025).","3rd place in Ranrasu Dancing & Singing competition (2025).","Participant in Vidumaga Arunalu project and fund raise (2025)."]},{dates:"2025",role:"Volunteer Judge & Team Member",org:"Badminton Team, University of Sri Jayewardenepura",bullets:["Volunteer judgment at SMASHES All Island Age Group Badminton Championship."]}]},achievements:{eyebrow:"05 / Recognition",title:"Things I'm <em>proud</em> of.",highlights:[{num:"#<span>54</span>",caption:"District Rank - GCE Advanced Level",sub:"Achieved 3 A's with a Z-score of 1.9 - District Rank 54, Island Rank 997 from Rippon Girls' College, Galle (2021).",link:{text:"View education →",href:"#education"}},{num:"<span>🎻</span>",caption:"Bhatkande Visharad - Violin & Vocal",sub:"Completed Bhatkande Visharad in Violin (Prathama, Madhyama, Visharad 1 & 2) and Vocal (Prathama, Madhyama) - a rigorous Indian classical music qualification.",link:{text:"View education →",href:"#education"}}],certs:[{icon:"▣",name:"Introduction to Cybersecurity",issuer:"Cisco Networking Academy"},{icon:"◆",name:"Exploring Networking with Cisco Packet Tracer",issuer:"Cisco Networking Academy"},{icon:"●",name:"Python for Beginners",issuer:"CODL, University of Moratuwa"},{icon:"◇",name:"Web Designing for Beginners",issuer:"CODL, University of Moratuwa"}]},education:{eyebrow:"06 / Education",title:"Where I'm <em>studying</em>.",items:[{dates:"2023 - Present",degree:"Bachelor of Arts (Hons) in Information Technology",institution:"University of Sri Jayewardenepura",details:"Major in Information Technology specializing in <b>Data Science</b>. Coursework includes Machine Learning, Big Data, Database Management, and UI/UX Design."},{dates:"2021",degree:"GCE Advanced Level - 3 A's",institution:"Rippon Girls' College, Galle",details:"Z-score: <b>1.9</b> · District Rank: <b>54</b> · Island Rank: <b>997</b>"},{dates:"2022",degree:"Advanced Diploma in English",institution:"ICBT Galle Campus",details:"Professional English language certification."},{dates:"2021",degree:"Advanced Diploma in English",institution:"The Beeline English Academy & SDFL (Ministry of Education)",details:"State-level English language diploma program."},{dates:"2021 - 2022",degree:"Bhatkande Visharad - Violin & Vocal",institution:"Bhatkande Music Institute",details:"Violin: Prathama, Madhyama, Visharad 1 &amp; 2 (Completed). Vocal: Prathama &amp; Madhyama (Completed)."}]},contact:{eyebrow:"07 / Contact",title:"Let's <em>build</em> something.",rows:[{label:"Email",value:"udarijayawardhana2001@gmail.com",href:"mailto:udarijayawardhana2001@gmail.com"},{label:"Location",value:"Galle, Sri Lanka",href:"#"},{label:"Calendar",value:"Book a chat",href:"#"},{label:"Phone",value:"+94 76 067 5441",href:"tel:+94760675441"}],socials:[{name:"LinkedIn",sub:"/in/udari-jayawardhana",href:"https://www.linkedin.com/in/udari-jayawardhana-405141288"},{name:"GitHub",sub:"@udarijayawardhana",href:"https://github.com/udarijayawardhana"}],formAction:"https://formspree.io/f/YOUR_FORM_ID"},footer:{name:"Udari Jayawardhana",links:[{text:"About",href:"#about"},{text:"Projects",href:"#projects"},{text:"Contact",href:"#contact"}],resumeHref:"resume.pdf"}};function p(){return`<header class="nav" id="nav">
  <div class="container nav-row">
    <a href="#home" class="logo" data-logo data-hover><span class="logo-dot"></span>${c.nav.logo}</a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#about" data-hover>About</a>
      <a href="#skills" data-hover>Skills</a>
      <a href="#projects" data-hover>Projects</a>
      <a href="#experience" data-hover>Experience</a>
      <a href="#achievements" data-hover>Achievements</a>
      <a href="#contact" class="nav-cta" data-hover>Let's talk →</a>
    </nav>
    <button class="nav-burger" aria-label="Open menu" aria-expanded="false" data-hover><span></span></button>
  </div>
</header>

<nav class="menu" aria-label="Mobile">
  <a href="#about" style="--i:1" data-hover>About</a>
  <a href="#skills" style="--i:2" data-hover>Skills</a>
  <a href="#projects" style="--i:3" data-hover>Projects</a>
  <a href="#experience" style="--i:4" data-hover>Experience</a>
  <a href="#achievements" style="--i:5" data-hover>Achievements</a>
  <a href="#contact" style="--i:6" data-hover>Contact</a>
</nav>`}function g(){const{hero:e}=c,s=e.cta.map(a=>a.class.includes("btn-primary")?`<a href="${a.href}" class="${a.class}" data-hover>${a.text} <span class="arr">→</span></a>`:`<a href="${a.href}" class="${a.class}" data-hover>${a.text}</a>`).join(`
        `);return`<section class="hero" id="home" data-hero>
  <div class="mesh" aria-hidden="true"></div>
  <div class="container hero-inner">
    <div>
      <div class="hero-eyebrow reveal"><span class="pulse-dot"></span> ${e.eyebrow}</div>
      <h1 class="reveal" data-delay="1">${e.name}</h1>
      <div class="role-line reveal" data-delay="2">
        <span class="prefix">$ whoami →</span>
        <span class="role" id="role">${e.roles[0]}</span>
      </div>
      <p class="tagline reveal" data-delay="3">
        ${e.tagline}
      </p>
      <div class="cta-row reveal" data-delay="3">
        ${s}
      </div>
    </div>
    <div class="hero-art reveal" data-delay="2" aria-hidden="true">
      <div class="geo"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
  <div class="scroll-ind" aria-hidden="true">
    <div class="mouse"></div>
    <span>scroll</span>
  </div>
</section>`}function f(){const{about:e}=c,s=e.bio.map(t=>`        <p>${t}</p>`).join(`
`),a=e.stats.map(t=>{const i=t.small?`<small>${t.small}</small>`:"";return`          <div class="stat"><div class="num">${t.num}${i}</div><div class="lbl">${t.label}</div></div>`}).join(`
`);return`<section class="section" id="about" data-about>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>
    <div class="about-grid">
      <div class="bio reveal">
${s}
      </div>
      <div class="reveal" data-delay="1">
        <div class="stats">
${a}
        </div>
        <div class="avail"><span class="pulse-dot"></span> ${e.availability}</div>
      </div>
    </div>
  </div>
</section>`}function b(){const{skills:e}=c,s=e.groups.map(t=>{const i=t.delay?` data-delay="${t.delay}"`:"",n=t.skills.map(r=>`        <div class="skill" data-level="${r.level}" style="--w:${r.level}%"><div class="skill-row"><b>${r.name}</b><span>${r.level}</span></div><div class="bar"><i></i></div></div>`).join(`
`);return`      <div class="skill-group reveal"${i}>
        <h3>${t.name}</h3>
${n}
      </div>`}).join(`
`),a=e.marqueeItems.map(t=>`<span>${t}</span>`).join("");return`<section class="section" id="skills">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>
    <div class="skills-grid">
${s}
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${a}
        ${a}
      </div>
    </div>
  </div>
</section>`}function y(){const{projects:e}=c,s=e.items.map((a,t)=>{const i=a.featured,n=i?" feat":"",o=[0,1,2,0,1][t]||0,l=o?` data-delay="${o}"`:"",v=i?`
        <span class="featured-tag">Featured</span>`:"",m=a.chips.map(d=>`<span class="chip">${d}</span>`).join(""),u=a.links.map(d=>`<a href="${d.href}" class="icon-btn" aria-label="${d.label}" data-hover>${d.icon}</a>`).join("");return`      <article class="card${n} reveal"${l} data-hover>${v}
        <div>
          <div class="card-num">${a.num} →</div>
          <h3 class="card-title">${a.title}</h3>
          <p class="card-desc">${a.desc}</p>
        </div>
        <div class="card-foot">
          <div class="chips">${m}</div>
          <div class="card-links">${u}</div>
        </div>
      </article>`}).join(`

`);return`<section class="section" id="projects" data-projects>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
      <a href="${e.githubUrl}" class="btn btn-ghost" data-hover target="_blank" rel="noopener">All projects on GitHub <span class="arr">→</span></a>
    </div>

    <div class="bento">
${s}
    </div>
  </div>
</section>`}function $(){const{experience:e}=c,s=e.items.map(a=>{const t=a.bullets.map(i=>`          <li>${i}</li>`).join(`
`);return`      <div class="tl-item reveal">
        <div class="tl-meta">${a.dates}</div>
        <div class="tl-role">${a.role}</div>
        <div class="tl-org">${a.org}</div>
        <ul class="tl-list">
${t}
        </ul>
      </div>`}).join(`

`);return`<section class="section" id="experience" data-experience>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>

    <div class="timeline" id="timeline">
      <svg class="line" preserveAspectRatio="none" viewBox="0 0 2 1000" aria-hidden="true"><path d="M1 0 L1 1000" /></svg>

${s}
    </div>
  </div>
</section>`}function w(){const{achievements:e}=c,s=e.highlights.map((t,i)=>`      <div class="hi-card reveal"${i>0?` data-delay="${i}"`:""} data-hover>
        <div class="hi-num">${t.num}</div>
        <div class="hi-cap">${t.caption}</div>
        <p class="hi-sub">${t.sub}</p>
        <a href="${t.link.href}" class="hi-link" data-hover>${t.link.text}</a>
      </div>`).join(`
`),a=e.certs.map((t,i)=>`      <div class="cert reveal"${i>0?` data-delay="${i}"`:""} data-hover><div class="ico">${t.icon}</div><h4>${t.name}</h4><p>${t.issuer}</p></div>`).join(`
`);return`<section class="section" id="achievements" data-achievements>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>

    <div class="hi-grid">
${s}
    </div>

    <div class="cert-grid">
${a}
    </div>
  </div>
</section>`}function k(){const{education:e}=c,s=e.items.map((a,t)=>`      <div class="edu reveal"${t>0?` data-delay="${t}"`:""}>
        <div class="meta">${a.dates}</div>
        <div class="deg">${a.degree}</div>
        <div class="inst">${a.institution}</div>
        <p class="extra">${a.details}</p>
      </div>`).join(`
`);return`<section class="section" id="education" data-education>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>
    <div class="edu-grid">
${s}
    </div>
  </div>
</section>`}function I(){const{contact:e}=c,s=e.rows.map(t=>`        <a class="c-row" href="${t.href}" data-hover><span class="lbl">${t.label}</span><span class="val">${t.value}</span></a>`).join(`
`),a=e.socials.map(t=>`          <a class="social" href="${t.href}" target="_blank" rel="noopener" data-hover>
            <div><div class="name">${t.name}</div><div class="sub">${t.sub}</div></div><span class="arr">→</span>
          </a>`).join(`
`);return`<section class="section" id="contact" data-contact>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${e.eyebrow}</div>
        <h2 class="section-title">${e.title}</h2>
      </div>
    </div>

    <div class="contact-grid">
      <div class="reveal">
${s}

        <div class="social-row">
${a}
        </div>
      </div>

      <form class="form reveal" data-delay="1" id="contact-form" action="${e.formAction}" method="POST">
        <div class="form-row">
          <div class="field"><input id="f-name" name="name" type="text" placeholder=" " required maxlength="100" /><label for="f-name">Name</label></div>
          <div class="field"><input id="f-email" name="email" type="email" placeholder=" " required maxlength="255" /><label for="f-email">Email</label></div>
        </div>
        <div class="field"><input id="f-subj" name="subject" type="text" placeholder=" " maxlength="120" /><label for="f-subj">Subject</label></div>
        <div class="field"><textarea id="f-msg" name="message" placeholder=" " required maxlength="2000"></textarea><label for="f-msg">Message</label></div>
        <button class="submit" type="submit" data-hover>Send message <span class="arr">→</span></button>
        <div class="form-msg" id="form-msg" role="status" aria-live="polite"></div>
      </form>
    </div>
  </div>
</section>`}function S(){const{footer:e}=c,s=e.links.map(a=>`<a href="${a.href}" data-hover>${a.text}</a>`).join(`
      `);return`<footer>
  <div class="container foot">
    <div>© <span id="yr"></span> ${e.name} — built from scratch.</div>
    <div class="foot-links">
      ${s}
    </div>
    <a class="resume" href="${e.resumeHref}" download data-hover>Download résumé ↓</a>
  </div>
</footer>`}function x(){const e=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!matchMedia("(pointer: coarse)").matches&&!e){const a=document.querySelector(".cursor-dot"),t=document.querySelector(".cursor-ring");let i=0,n=0,r=0,o=0;addEventListener("mousemove",l=>{i=l.clientX,n=l.clientY,a.style.transform=`translate(${i}px,${n}px) translate(-50%,-50%)`}),(function l(){r+=(i-r)*.18,o+=(n-o)*.18,t.style.transform=`translate(${r}px,${o}px) translate(-50%,-50%)`,requestAnimationFrame(l)})(),document.querySelectorAll("[data-hover], a, button, input, textarea").forEach(l=>{l.addEventListener("mouseenter",()=>t.classList.add("hover")),l.addEventListener("mouseleave",()=>t.classList.remove("hover"))})}}function A(){const e=document.getElementById("nav"),s=document.querySelector(".nav-burger"),a=()=>e.classList.toggle("scrolled",scrollY>40);addEventListener("scroll",a,{passive:!0}),a(),s==null||s.addEventListener("click",()=>{const r=document.body.classList.toggle("menu-open");document.body.classList.toggle("no-scroll",r),s.setAttribute("aria-expanded",String(r))}),document.querySelectorAll(".menu a").forEach(r=>r.addEventListener("click",()=>{document.body.classList.remove("menu-open","no-scroll"),s.setAttribute("aria-expanded","false")}));const t=document.querySelectorAll('.nav-links a[href^="#"]'),i=new Map;t.forEach(r=>{const o=r.getAttribute("href").slice(1),l=document.getElementById(o);l&&i.set(l,r)});const n=new IntersectionObserver(r=>{r.forEach(o=>{var l;o.isIntersecting&&(t.forEach(v=>v.classList.remove("active")),(l=i.get(o.target))==null||l.classList.add("active"))})},{rootMargin:"-45% 0px -50% 0px"});i.forEach((r,o)=>n.observe(o))}function E(){const e=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("in"),e.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});document.querySelectorAll(".reveal").forEach(s=>e.observe(s))}function j(){const e=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){const t=a.target.dataset.level||80;a.target.style.setProperty("--w",t+"%"),a.target.classList.add("in"),e.unobserve(a.target)}})},{threshold:.4});document.querySelectorAll(".skill").forEach(s=>e.observe(s))}function L(){const e=document.getElementById("timeline");if(e){const s=e.querySelector("svg.line path"),a=()=>{const i=e.offsetHeight;s.style.setProperty("--len",i),s.setAttribute("d",`M1 0 L1 ${i}`),e.querySelector("svg.line").setAttribute("viewBox",`0 0 2 ${i}`),e.querySelector("svg.line").style.height=i+"px",s.style.strokeDasharray=i,s.style.strokeDashoffset=i};a(),addEventListener("resize",a);const t=()=>{const i=e.getBoundingClientRect(),n=innerHeight,r=i.height+n*.4,o=Math.min(Math.max(n*.7-i.top,0),r),l=e.offsetHeight;s.style.strokeDashoffset=Math.max(0,l-o/r*l)};addEventListener("scroll",t,{passive:!0}),t()}}function C(){if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const s=c.hero.roles,a=document.getElementById("role");let t=0,i=0,n=!1;const r=()=>{const o=s[t];i+=n?-1:1,a.textContent=o.slice(0,i);let l=n?35:75;!n&&i===o.length?(l=1400,n=!0):n&&i===0&&(n=!1,t=(t+1)%s.length,l=250),setTimeout(r,l)};r()}}function M(){const e=document.getElementById("contact-form"),s=document.getElementById("form-msg");e==null||e.addEventListener("submit",async a=>{var i,n;a.preventDefault();const t=e.querySelector(".submit");t.disabled=!0,s.className="form-msg",s.textContent="Sending…";try{const r=await fetch(e.action,{method:"POST",body:new FormData(e),headers:{Accept:"application/json"}});if(r.ok)e.reset(),s.className="form-msg ok",s.textContent="Message sent — talk soon.";else{const o=await r.json().catch(()=>({}));s.className="form-msg err",s.textContent=((n=(i=o==null?void 0:o.errors)==null?void 0:i[0])==null?void 0:n.message)||"Something went wrong. Try email instead."}}catch{s.className="form-msg err",s.textContent="Network error. Try email instead."}finally{t.disabled=!1}})}function D(){document.getElementById("yr").textContent=new Date().getFullYear()}const P=document.getElementById("app");P.innerHTML=[h(),p(),"<main>",g(),f(),b(),y(),$(),w(),k(),I(),"</main>",S()].join(`
`);x();A();E();j();L();C();M();D();
