const projectsData = [
  {
    id: 4,
    title: "Luxury Brand Website",
    description: "A premium luxury marketplace website featuring elegant UI, smooth animations, premium product showcase, responsive design, and immersive shopping experience.",
    image: "assets/images/luxury.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://kiranwebdev02-commits.github.io/luxury-brand-website/",
    githubUrl: "https://github.com/kirangoswami"
  },

 {
  id: 8,
  title: "Restaurant Management System",
  description: "A professional restaurant management system featuring restaurant operations, menu management, reservations, orders, and a responsive management dashboard.",
  image: "assets/images/Screenshot 2026-08-21 134510.png",
  tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  liveUrl: "https://aureviahotel.42web.io/",
  githubUrl: "https://github.com/kirangoswami"
},

  {
    id: 1,
    title: "Roadmap Website",
    description: "A modern web development roadmap platform with interactive learning paths and technology guides.",
    image: "assets/images/webroadmap.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://kiranwebdev02-commits.github.io/web-development-roadmap/",
    githubUrl: "https://github.com/kirangoswami"
  },
     {
  id: 5,
  title: "Furniture E-Commerce Website",
  description: "A modern furniture e-commerce website featuring a professional product showcase, furniture categories, responsive design, and a smooth online shopping experience.",
  image: "assets/images/Screenshot 2026-08-21 133742.png",
  tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
  liveUrl: "https://velora-luxury-ecommerce.netlify.app/",
  githubUrl: "https://github.com/kirangoswami"
},
  {
  id: 6,
  title: "Beauty & Makeup E-Commerce Website",
  description: "A modern beauty and makeup e-commerce website featuring premium product showcases, responsive design, attractive UI, and a smooth online shopping experience.",
  image: "assets/images/Screenshot 2026-08-21 132501.png",
  tags: ["React", "JavaScript", "Tailwind CSS", "E-Commerce"],
  liveUrl: "https://gilded-semolina-3a8f2a.netlify.app/",
  githubUrl: "https://kiranwebdev02-commits.github.io/Velora-luxury-ecommerce/"
},
  {
  id: 7,
  title: "E-Commerce Website",
  description: "A modern e-commerce website featuring a professional product showcase, responsive design, attractive UI, organized categories, and a smooth online shopping experience.",
  image: "assets/images/Screenshot 2026-08-21 134007.png",
  tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
  liveUrl: "https://kiran-goswami-2.12commerce.com/",
  githubUrl: "https://github.com/kirangoswami"
},
];

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) return;

    let html = '';

    projectsData.forEach((project, index) => {
        const delay = (index % 3) * 0.1;

        let tagsHtml = project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');

        html += `
            <div class="col-lg-4 col-md-6 fade-up" style="transition-delay: ${delay}s">
                <div class="project-card glass-panel">
                    <div class="project-img-wrapper" onclick="window.open('${project.liveUrl}', '_blank')">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-overlay">
                            <i class='bx bx-link-external' style="font-size: 2rem; color: #fff;"></i>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-tags">
                            ${tagsHtml}
                        </div>

                        <h3 class="project-title">${project.title}</h3>

                        <p class="project-desc">
                            ${project.description}
                        </p>

                        <div class="project-links">
                            <a href="${project.liveUrl}" target="_blank" class="btn-icon btn-demo">
                                <i class='bx bx-globe'></i> Live Demo
                            </a>

                            <a href="${project.githubUrl}" target="_blank" class="btn-icon btn-github">
                                <i class='bx bxl-github'></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    projectsGrid.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderProjects);
