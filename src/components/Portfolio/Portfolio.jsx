import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Img1.png'
import IMG2 from '../../assets/Img2.png'
import IMG3 from '../../assets/Img3.png'
import IMG4 from '../../assets/Img4.png'
import IMG5 from '../../assets/Img5.png'
import IMG6 from '../../assets/Img6.png'
import IMG7 from '../../assets/Img7.png'
import IMG8 from '../../assets/Img8.png'
import IMG9 from '../../assets/Img9.png'
import IMG10 from '../../assets/Img10.png'
import IMG11 from '../../assets/Img11.png'
import IMG13 from '../../assets/Img13.png'
import IMG14 from '../../assets/Img14.png'
import IMG15 from  '../../assets/Img15.png'



const Portfolio = () => {

  const projects = [
      {
      id: 15,
      image: IMG15,
      title: 'Ecomerce page. Made with React, Nodejs, express and MongoDb. I used stripe for payment and cloudinary for image management. Add items to your cart, view your orders as well as order status. This website is hosted on a free server that may experience downtime.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Ecomerce',
      demo: 'https://frolicking-dasik-3f67ae.netlify.app/',  
    },

    {
      id: 14,
      image: IMG14,
      title: "Sociopedia, social media website. Made with React, Nodejs, express and MongoDb. I used cloudinary for image management. You can make posts with images or simply text, comment, like posts, add friends as well as view a friend's profile and whatever posts they have made. This website is hosted on a free server that may experience downtime.",
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Sociopedia',
      demo: 'https://quiet-treacle-9ca976.netlify.app/',  
    },
    {
      id: 13,
      image: IMG13,
      title: 'Blog  website. Made with React, Nodejs, express and MongoDb. Uses cloudinary for image management. Able to create posts, search for a specific post, comment, delete posts and comments, edit posts and view your published posts. This website is hosted on a free server that may experience downtime.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/BlogMERN',
      demo: 'https://luminous-queijadas-0dc9f2.netlify.app/',  
    },
    {
      id: 1,
      image: IMG1,
      title: 'Foodies Hub, fetches data from a recipe API depending on your search query , responsive design, provides a couple of settings that can be changed. ',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/FoodieHub_portfolio',
      demo: 'https://flourishing-gaufre-4b7aa1.netlify.app/',  
    },
    {
      id: 2,
      image: IMG3,
      title: 'Workout Searcher, fetches data from an API, able to search for specific workouts, provides an example of how to preform the workout as well as provides youtube videos with more explanations. Responsive design.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/ExercisePage_with_API',
      demo: 'https://curious-froyo-8e0f1e.netlify.app/',  
    },
    {
      id: 3,
      image: IMG4,
      title: 'Youtube Clone, fetches data from a youtube api, provides results from predetermined querys or search for videos yourself. Responsive design.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Youtube_clone',
      demo: 'https://earnest-lolly-8a7ba5.netlify.app/', 
    },
    {
      id: 4,
       image: IMG10,
      title: 'Restaurant page. Transfered a figma design into this responsive website',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Restaurant_design',
      demo: 'https://lucent-capybara-ad7a6d.netlify.app/', 
   
    },
    {
      id: 5,
      image: IMG11,
      title: 'Real Estate Page',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/RealEstate_Design',
      demo: 'https://joyful-kringle-9e0319.netlify.app/', 
    },{
      id: 6,
      image: IMG8,
      title: 'UX UI Design, used a figma design and translated it into this website.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/ChatGPT_UX_Design',
      demo: 'https://timely-liger-a89bd7.netlify.app/',  

    },/*
    {
      id: 7,
      image: IMG7,
      title: 'Color Generator',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Color-generator',
      demo: 'https://ubiquitous-lokum-880e8e.netlify.app/',  
    },*/
    {
      id: 8,
      image: IMG6,
      title: 'Todo List, Editable Items',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/ToDo_List',
      demo: 'https://radiant-cat-e9a1ec.netlify.app/', 
    },{
      id: 9,
      image: IMG9,
      title: 'Cocktail searcher, fetches data from an API and provides details about a cocktail of your chocie',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Cocktails_with_Api',
      demo: 'https://frabjous-kataifi-4c491f.netlify.app/',      
    },
    {
      id: 10,
      image: IMG2,
      title: 'Recipe Searcher, responsive',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Simple_recipe_finder',
      demo: 'https://subtle-starburst-6fbca2.netlify.app/', 
    },
    {
      id: 11,
      image: IMG5,
      title: 'Image Searcher, fetches data from an API depending on your query search.',
      github: 'https://github.com/Alberto-Ignacio-Flores-Mendoza/Image_searcher_with_Api/tree/main/ImageSearcher',
      demo: 'https://superb-sunshine-f8584a.netlify.app/',  
    },

  ]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

          {
            projects.map((project)=>

              (
              <article className='portfolio__item' key={project.id}>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title}/>
                </div>
                  <h3>{project.title}</h3>
                <div className='portfolio__item-cta'>
                    <a href={project.github} className='btn' target='_blank'>GitHub</a>
                    <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
      
              )
            )
          }
    

      

      </div>
    </section>
    )
}

export default Portfolio