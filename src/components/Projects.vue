<template>
    <div ref="projectsSection" class="projects-section container-fluid px-0">
      <div id="projects" class="row g-4 mx-0">
        <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-6 col-lg-4">
          <div class="project-card">
            <img :src="project.image" :alt="project.title" class="img-fluid project-image" />
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <ul>
                <li v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</li>
              </ul>
              <div class="button-group mt-3">
                <a :href="project.liveLink" class="btn btn-outline-light me-2" target="_blank">Live</a>
                <a :href="project.sourceLink" class="btn btn-outline-light" target="_blank">Source</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  
  export default defineComponent({
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjc2bXdvMGl5N3Zlcm93NnM5dGJzdzFjajBsd2JyYTB4cmxwa2EyYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fx4vdyj25p0Nq0PEQ0/giphy.webp',
            title: 'Projeto 1',
            description: 'Descrição do Projeto 1',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenEyN29qY3B4dGhubWNpdnA1YTdxdXA1anVucmV5bnBqbGo2MmMzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1lvoeZP7jMAHHickFz/giphy.webp',
            title: 'Projeto 2',
            description: 'Descrição do Projeto 2',
            technologies: ['Vue.js', 'Bootstrap', 'TypeScript'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzE4M25zaXRtOXU2dGIweXg0d3docDM0Y3ExcWl0bTVpOXcwb2dzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs87Tu71K9AxKNfW/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 3',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjE4a3Q1M2g2aWhreDFqYWNucHZraWhjdHU3Y3V5cDE4a3U4dmxtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26CaNNU8NTmBDNdqU/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 4',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWk5Y3F3bGo0cGNqbzB5MXE4Z3RuN2syczJkOGdxcnZxemR3a3h2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vQXZiBGhxBEALEk/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 5',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3k2bml2MDc4ajVjN282M3Y5aDNodDZxZG14d203N3pwam53OHdnYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7PkZA1zW6INHAA/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 5',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJnMThkb3dhMm42emV3MG40dnN0MnJ6ZndwcDhsamF1aHczczVhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmkjsAECZFLYiDm/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 5',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGV4dWM4MnRrZHlldnBrNTFnZjk4N2JhcWk2eHhsbXo5Z3FndWMxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmp2N5Moog2IbFC/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 5',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
          {
            image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWZ1ZTVrZG5ocXF1enEyZTVwbnUxOHE5d3BudXRtanU3cGxpdnA1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fIWe9NNrVJHbygw/giphy.webp',
            title: 'Projeto 3',
            description: 'Descrição do Projeto 5',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: 'https://live-link.com',
            sourceLink: 'https://github.com/user/repo',
          },
        ],
      };
    },
    setup() {
      const projectsSection = ref<HTMLElement | null>(null);
  
      onMounted(() => {
        if (projectsSection.value) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  projectsSection.value?.classList.add('expanded');
                } else {
                  projectsSection.value?.classList.remove('expanded');
                }
              });
            },
            { threshold: 0.5 } // Ativa a animação quando 50% da seção estiver visível
          );
          observer.observe(projectsSection.value);
        }
      });
  
      return {
        projectsSection,
      };
    },
  });
  </script>
  
  <style scoped>
  .projects-section {
    transition: all 0.8s ease-in-out;
    transform: scale(0.9); /* Definido como menor para que a expansão seja visível */
  }
  
  .projects-section.expanded {
    transform: scale(1); /* Expande para o tamanho original */
  }
  
  .project-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    height: 300px;
  }
  
  .project-card:hover {
    transform: scale(1.05);
  }
  
  .project-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  .project-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
    text-align: center;
  }
  
  .project-card:hover .project-info {
    opacity: 1;
  }
  
  .button-group a {
    text-decoration: none;
  }
  
  .button-group .btn {
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .button-group .btn:hover {
    transform: translateY(-3px);
    background-color: #fff;
  }
  </style>
  