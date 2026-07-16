const projectsData = [
   {
    id: 1,
    title: "Roadmap Website",
    description: "A modern web development roadmap platform with interactive learning paths and technology guides.",
    image: "assets/images/webroadmap.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "file:///C:/Users/Com%20Plus/Desktop/web-roadmap/learning/index.html",
    githubUrl: "https://github.com/kirangoswami"
},
    {
    id: 2,
    title: "Project Management System",
    description: "A robust dashboard for managing tasks, tracking team progress, and visualizing data metrics in real-time.",
    image: "assets/images/PMS2.png",   // apni image ka exact naam likho
    tags: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    liveUrl: "http://localhost/promanage/login.php",
    githubUrl: "https://github.com/kirangoswami"
},
       
    {
        id: 3,
        title: "Coffee Website",
        description: "A premium, visually stunning landing page for an artisanal coffee shop featuring smooth scrolling and glassmorphism.",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "https://github.com/kirangoswami"
    },
   {
    id: 4,
    title: "Luxury Brand Website",
    description: "A premium luxury marketplace website featuring elegant UI, smooth animations, premium product showcase, responsive design, and immersive shopping experience.",
    image: "assets/images/luxury.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "file:///C:/Users/Com%20Plus/Pictures/luxury-marketplace/luxury-marketplace/index.html#home",
    githubUrl: "https://github.com/kirangoswami"
},
   {
    id: 5,
    title: "Insight Hub",
    description: "A modern AI-powered blog platform with premium UI/UX, responsive design, category-based articles, and an engaging reading experience.",
    image: "assets/images/technology.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "file:///C:/Users/Com%20Plus/Desktop/InsightHub-AI/index.html",
    githubUrl: "https://github.com/kirangoswami"
},
    {
        id: 6,
        title: "Event Booking Website",
        description: "A full-stack booking system allowing users to reserve seats, view schedules, and receive automated confirmations.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        tags: ["PHP", "MySQL", "JavaScript", "AJAX"],
        liveUrl: "#",
        githubUrl: "https://github.com/kirangoswami"
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    let html = '';
    
    projectsData.forEach((project, index) => {
        // Calculate delay for staggered animation
        const delay = (index % 3) * 0.1;
        
        let tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
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
                        <p class="project-desc">${project.description}</p>
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

// Call render when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
